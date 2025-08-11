import React from 'react';
import { Box, Typography, Grid, Button, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #006699, #006699)',
  color: 'white',
  padding: theme.spacing(6, 0),
  textAlign: 'center',
}));

const AboutUs = () => {
  return (
    <div>
;

<HeroSection
  sx={{
    position: 'relative',
    backgroundImage: 'url(/clean2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    marginTop: '-26px',
    overflow: 'hidden',
    color: '#fff', // White text
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      zIndex: 1,
    }}
  />

  {/* Content */}
  <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
      Welcome to Clean Commerce
    </Typography>
    <Typography variant="h6" paragraph>
      We are a professional cleaning service dedicated to making your life easier. Our experienced team
      provides top-notch cleaning for homes and businesses in Melbourne.
    </Typography>

    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: '#006699',
        color: 'white',
        fontSize: '1.1rem',
        padding: '12px 30px',
        borderRadius: '50px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#006699',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
        },
      }}
      href="/contact-us"
    >
      Get in Touch
    </Button>
  </Box>
</HeroSection>

      {/* Company Information Section */}
      <Container sx={{ py: 6, color:'black' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          At Clean Commerce, we believe in offering a service that not only meets but exceeds your expectations.
          Established in 2019, our company has grown rapidly to become one of Melbourne’s trusted cleaning providers.
          We’re passionate about delivering high-quality results and we strive to create a clean, fresh, and
          comfortable environment for all our clients.
        </Typography>

        <Typography variant="h4" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide reliable, efficient, and affordable cleaning services for both residential and
          commercial clients. We are committed to making every space spotless and providing our customers with a
          clean, healthy environment. 
        </Typography>
      </Container>


{/* Call to Action Section */}
<Box
  sx={{
    position: 'relative',
    backgroundImage: 'url(/clean4.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    py: 8,
    overflow: 'hidden',
    textAlign: 'center',
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
      zIndex: 1,
    }}
  />

  {/* CTA Content */}
  <Container sx={{ position: 'relative', zIndex: 2 }}>
    <Typography variant="h4" gutterBottom>
      Ready to experience a cleaner space?
    </Typography>
    <Typography variant="h6" paragraph>
      Contact us today to book your cleaning service or to learn more about how we can help.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#006699',
          color: 'white',
          fontSize: '1.1rem',
          padding: '12px 30px',
          borderRadius: '50px',
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#006699',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          },
        }}
        href="/contact-us"
      >
        Get in Touch
      </Button>
    </Box>
  </Container>
</Box>

      <h1></h1>
    </div>
  );
};

export default AboutUs;
