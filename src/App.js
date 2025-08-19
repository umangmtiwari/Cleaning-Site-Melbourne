import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';
import WhyChooseUs from './WhyChooseUs';
import AdminHome from './pages/AdminHome'; // Import your AdminHome page
import Testimony from './Testimony';
import Popup from './Popup';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './Pricing'; // Your Pricing page component
import AboutUs from './AboutUs'; // Example About Us page
import ContactUs from './ContactUs'; // Example Contact Us page
import Services from './Services'; // Example Services page
import Chatbot from './Chatbot';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Login from './pages/Login';
import Billing from './pages/Billing';

export default function MelbourneClean() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Open the popup after 1.5 seconds when the page loads
  useEffect(() => {
  const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

  if (!hasSeenPopup) {
    const timer = setTimeout(() => {
      setPopupOpen(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }
}, []);


  // Close the popup
  const closePopup = () => setPopupOpen(false);

  return (
    <Router>
      <Box sx={{ fontFamily: 'DM Sans, sans-serif', color: '#0099CC' }}>
        <Popup open={isPopupOpen} onClose={closePopup} />
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <BookingForm />
              <Testimony />
              <WhyChooseUs />
            </div>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/billing" element={<Billing/>} />
        </Routes>
        <Chatbot />
        <Footer />
      </Box>
    </Router>
  );
}
