import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CleaningRates  from './CleaningRates'; // Assuming CleaningRates is a component that displays pricing details
import { Email as EmailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div style={{ backgroundColor: '#f4f7f6', padding: '50px 0' }}>
      <Box
  sx={{
    position: 'relative',
    backgroundImage: 'url(/clean2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    py: 10,
    marginTop:'-56px',
    color: 'white',
    overflow: 'hidden',
  }}
>
  {/* Dark overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.55)', // Darker overlay for better readability
      zIndex: 1,
    }}
  />

  {/* Content Wrapper */}
  <Box sx={{ position: 'relative', zIndex: 2 }}>
    {/* Hero Section */}
    <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 5 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          color: 'white', // changed to white for visibility
        }}
      >
        Affordable and Transparent Pricing for Your Cleaning Needs
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.85)', // lighter white for subtitle
          mt: 2,
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        At Clean Commerce, we believe in making your cleaning experience hassle-free. Our prices are clear, competitive, and designed to give you the best value for your investment.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2E8B57',
            color: 'white',
            fontSize: '1.1rem',
            padding: '12px 30px',
            borderRadius: '30px',
            '&:hover': {
              backgroundColor: '#248c48',
            },
          }}
          href="#cleaning-rates" // Link to the CleaningRates section
        >
          View Pricing Details
        </Button>
      </Box>
    </Container>

    {/* Special Offer Section */}
    <Container maxWidth="md" sx={{ textAlign: 'center', mb: 5 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'DM Sans, sans-serif',
          color: '#ffffffff', // softer green to complement background
        }}
      >
        🏷️ Special Offer Just for You!
      </Typography>
      <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.85)', mt: 2 }}>
        *$40 off any service booked for a home in the western suburbs of Melbourne. New bookings only.
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', mt: 2 }}>
        Don’t miss out on this amazing deal to get your home cleaned at an unbeatable price. Book today and save!
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '1.1rem',
            padding: '12px 30px',
            borderRadius: '30px',
            '&:hover': {
              backgroundColor: '#45a049',
            },
          }}
          href="/"
        >
          Subscribe & Get Your Discount
        </Button>
      </Box>
    </Container>
  </Box>
</Box>

      {/* Pricing Table (CleaningRates Component) */}
      <div id="cleaning-rates">
        <CleaningRates />
      </div>

      {/* Email Subscription Section */}
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5, backgroundColor: '#2E8B57', color: 'white', padding: '30px 20px', borderRadius: '10px' }}>
        <Typography variant="h5" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
 }}>
          Any particular requirement, Please let us know!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontFamily: 'DM Sans, sans-serif' }}>
          We will look into the requirements and offer you the best quote!
        </Typography>
        <Box sx={{ mt: 3 }}>
          {/* Scroll to Contact Us */}
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                fontSize: '1.1rem',
                padding: '10px 25px',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#2E8B57',
                },
              }}
              startIcon={<EmailIcon />}
              href="/contact-us"
            >
              Contact Us
            </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Pricing;
