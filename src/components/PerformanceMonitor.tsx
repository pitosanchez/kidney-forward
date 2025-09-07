import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          console.info('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // LCP observer not supported
      }

      // Monitor First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.info('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        // FID observer not supported
      }

      // Monitor Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              console.info('CLS:', clsValue);
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // CLS observer not supported
      }
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          ttfb: perfData.responseStart - perfData.requestStart,
          download: perfData.responseEnd - perfData.responseStart,
          domInteractive: perfData.domInteractive - perfData.fetchStart,
          domComplete: perfData.domComplete - perfData.fetchStart,
          loadComplete: perfData.loadEventEnd - perfData.fetchStart,
        };
        
        console.info('Performance Metrics:', metrics);
        
        // Send metrics to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'page_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(metrics.loadComplete),
            custom_map: metrics
          });
        }
      }
    });

    // Monitor memory usage (if available)
    if ((performance as any).memory) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const memoryInfo = {
          usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1048576),
          totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        };
        console.info('Memory Usage (MB):', memoryInfo);
      };
      
      // Check memory every 30 seconds
      const memoryInterval = setInterval(checkMemory, 30000);
      return () => clearInterval(memoryInterval);
    }
  }, []);

  return null;
};

export default PerformanceMonitor;