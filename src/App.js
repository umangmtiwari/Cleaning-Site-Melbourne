import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';
import WhyChooseUs from './WhyChooseUs';
import CleaningRates from './CleaningRates';
import Testimony from './Testimony';
import Popup from './Popup';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './Pricing'; // Your Pricing page component
import AboutUs from './AboutUs'; // Example About Us page
import ContactUs from './ContactUs'; // Example Contact Us page
import Services from './Services'; // Example Services page
import Chatbot from './Chatbot';

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
    <Router> {/* Wrap everything in Router to manage routes */}
      <Box sx={{ fontFamily: 'DM Sans, sans-serif', color: '#2E8B57' }}>
        {/* Popup */}
        <Popup open={isPopupOpen} onClose={closePopup} />

        {/* Header - always visible */}
        <Header />

        {/* Routes and Components */}
        <Routes>
          <Route path="/" element={
            <div>
              {/* Only render this content on the homepage */}
              <BookingForm />
              <Testimony />
              <WhyChooseUs />
            </div>
          } />

          {/* Pages for individual routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Chatbot />

        {/* Footer - always visible */}
        <Footer />
      </Box>
    </Router>
  );
}
