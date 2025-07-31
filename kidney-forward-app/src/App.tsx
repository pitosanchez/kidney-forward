import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Patients from './components/pages/Patients';
import Donors from './components/pages/Donors';
import Doctors from './components/pages/Doctors';
import Courses from './components/pages/Courses';
import TransplantCenters from './components/pages/TransplantCenters';
import CorporatePartners from './components/pages/CorporatePartners';
import GetInvolved from './components/pages/GetInvolved';
import DonorRegistration from './components/pages/DonorRegistration';
import DonationForm from './components/pages/DonationForm';
import JoinTeam from './components/pages/JoinTeam';
import AndrewLuu from './components/pages/AndrewLuu';
import RobertSanchez from './components/pages/RobertSanchez';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/transplant-centers" element={<TransplantCenters />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/join-team" element={<JoinTeam />} />
          <Route path="/andrew-luu" element={<AndrewLuu />} />
          <Route path="/robert-sanchez" element={<RobertSanchez />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
