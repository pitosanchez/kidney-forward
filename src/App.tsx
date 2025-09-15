import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { HeaderProvider } from "./contexts/HeaderContext";
import { initNumberAnimation } from "./utils/numberAnimation";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Donors = lazy(() => import("./pages/Donors"));
const Patients = lazy(() => import("./pages/Patients"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Programs = lazy(() => import("./pages/Programs"));
const AndrewLuu = lazy(() => import("./pages/AndrewLuu"));
const RobertSanchez = lazy(() => import("./pages/RobertSanchez"));
const Partnership = lazy(() => import("./pages/Partnership"));
const DonorRegister = lazy(() => import("./pages/DonorRegister"));
const Admin = lazy(() => import("./pages/Admin"));

// Story pages
const SarahStory = lazy(() => import("./pages/stories/Sarah"));
const MariaAnaStory = lazy(() => import("./pages/stories/MariaAna"));
const JamesStory = lazy(() => import("./pages/stories/James"));

function App() {
  useEffect(() => {
    // Initialize number animation
    initNumberAnimation();
  }, []);

  return (
    <HeaderProvider>
      <ErrorBoundary>
        <PerformanceMonitor />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donors" element={<Donors />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/donors/register" element={<DonorRegister />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/andrew-luu" element={<AndrewLuu />} />
                <Route path="/robert-sanchez" element={<RobertSanchez />} />
                <Route path="/partnership" element={<Partnership />} />

                {/* Story routes */}
                <Route path="/stories/sarah" element={<SarahStory />} />
                <Route path="/stories/maria-ana" element={<MariaAnaStory />} />
                <Route path="/stories/james" element={<JamesStory />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HeaderProvider>
  );
}

export default App;
