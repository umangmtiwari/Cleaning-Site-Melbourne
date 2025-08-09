import React from 'react';
import { Box, Typography, Grid, Button, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #4CAF50, #2E8B57)',
  color: 'white',
  padding: theme.spacing(6, 0),
  textAlign: 'center',
}));

const TeamCard = styled(Paper)({
  padding: '20px',  // Static padding value
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Static shadow value
  borderRadius: '8px',
  '& img': {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
});


const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h3" gutterBottom>
          Welcome to Melbourne Clean
        </Typography>
        <Typography variant="h6" paragraph>
          We are a professional cleaning service dedicated to making your life easier. Our experienced team
          provides top-notch cleaning for homes and businesses in Melbourne.
        </Typography>
<Button
  variant="contained"
  size="large"
  sx={{
    backgroundColor: '#4CAF50',  // Green background
    color: 'white',
    fontSize: '1.1rem',
    padding: '12px 30px',
    borderRadius: '50px',  // Rounded corners
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
    fontWeight: 'bold',
    textTransform: 'none',  // No uppercase for button text
    '&:hover': {
      backgroundColor: '#45a049',  // Darker green on hover
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',  // Stronger shadow on hover
      transform: 'scale(1.05)',  // Slight zoom effect
      transition: 'transform 0.3s ease, background-color 0.3s ease',  // Smooth transition for all effects
    },
  }}
  href="/contact-us"
>
  Get in Touch
</Button>

      </HeroSection>

      {/* Company Information Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          At Melbourne Clean, we believe in offering a service that not only meets but exceeds your expectations.
          Established in 2010, our company has grown rapidly to become one of Melbourne’s trusted cleaning providers.
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
      <Box sx={{ backgroundColor: '#4CAF50', color: 'white', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Ready to experience a cleaner space?
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Contact us today to book your cleaning service or to learn more about how we can help.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
<Button
  variant="contained"
  size="large"
  sx={{
    backgroundColor: '#4CAF50',  // Green background
    color: 'white',
    fontSize: '1.1rem',
    padding: '12px 30px',
    borderRadius: '50px',  // Rounded corners
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow
    fontWeight: 'bold',
    textTransform: 'none',  // No uppercase for button text
    '&:hover': {
      backgroundColor: '#45a049',  // Darker green on hover
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',  // Stronger shadow on hover
      transform: 'scale(1.05)',  // Slight zoom effect
      transition: 'transform 0.3s ease, background-color 0.3s ease',  // Smooth transition for all effects
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
