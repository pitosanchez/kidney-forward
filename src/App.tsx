import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donors from "./pages/Donors";
import Patients from "./pages/Patients";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import { HeaderProvider } from "./contexts/HeaderContext";
import { initNumberAnimation } from "./utils/numberAnimation";

function App() {
  useEffect(() => {
    // Initialize number animation
    initNumberAnimation();
  }, []);

  return (
    <HeaderProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<About />} />
            <Route path="/donor-info" element={<Donors />} />
            <Route path="/patient-registry" element={<Patients />} />
            <Route path="/volunteer" element={<GetInvolved />} />
            <Route path="/donate" element={<GetInvolved />} />
            <Route path="/donor-registry" element={<Donors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HeaderProvider>
  );
}

export default App;
