import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Donors from "./pages/Donors";
import Patients from "./pages/Patients";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import ContactUs from "./pages/ContactUs";
import DonorRegistry from "./pages/DonorRegistry";
import DonorRegistration from "./pages/DonorRegistration";
import Doctors from "./pages/Doctors";
import TransplantCenters from "./pages/TransplantCenters";
import CorporatePartners from "./pages/CorporatePartners";
import Courses from "./pages/Courses";
import DonationForm from "./pages/DonationForm";
import AndrewLuu from "./pages/AndrewLuu";
import RobertSanchez from "./pages/RobertSanchez";
import JoinTeam from "./pages/JoinTeam";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donor-registry" element={<DonorRegistry />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/transplant-centers" element={<TransplantCenters />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/andrew-luu" element={<AndrewLuu />} />
          <Route path="/robert-sanchez" element={<RobertSanchez />} />
          <Route path="/join-team" element={<JoinTeam />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
