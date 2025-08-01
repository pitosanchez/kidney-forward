// Number animation with Intersection Observer
export function initNumberAnimation(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElement = entry.target as HTMLElement;
        const target = parseInt(
          numberElement.getAttribute("data-target") || "0"
        );
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          numberElement.textContent = Math.floor(current).toString();
        }, 16);

        numberElement.classList.add("animated");
        observer.unobserve(numberElement);
      }
    });
  }, observerOptions);

  // Observe all number elements
  document.querySelectorAll(".animate-number").forEach((el) => {
    observer.observe(el);
  });
}
