import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 
import ScrollLine from './ScrollLine';

// Custom Styled Components
const StyledButton = styled(Button)(() => ({
  fontFamily: 'DM Sans, sans-serif',
  textTransform: 'none',  // Avoid uppercase letters (default in Material UI)
  fontSize: '1.1rem',  // Increase font size
  '&:hover': {
    textDecoration: 'underline',  // Add underline on hover
    transition: 'text-decoration 0.3s',  // Smooth transition for the underline
    backgroundColor: 'transparent',  // Keep transparent background
  },
}));

const BookNowButton = styled(Button)(() => ({
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',              // slightly smaller font
  textTransform: 'none',
  background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
  color: 'white',
  borderRadius: '30px',          // smaller rounding
  padding: '10px 24px',          // reduced padding for smaller height & width
  boxShadow: '0 3px 10px rgba(76, 175, 80, 0.4)',
  transition: 'all 0.3s ease',
  letterSpacing: '0.03em',
  '&:hover': {
    background: 'linear-gradient(135deg, #388E3C 0%, #4CAF50 100%)',
    boxShadow: '0 5px 15px rgba(56, 142, 60, 0.6)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

const ResponsiveAppBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);  // This will close the menu
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#1b4332', 
        borderBottom: '5px solid transparent',  
        backgroundImage: `linear-gradient(to top, #1b4332, #1b4332), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%2240%22 viewBox=%220 0 400 40%22%3E%3Cpath d=%22M0,0 Q50,15 100,0 T200,0 T300,0 T400,0 L400,40 L0,40 Z%22 fill=%22%2366BB6A%22/%3E%3C/svg%3E")`

      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Company Name Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <img src="cleanlogo.png" alt="Logo" style={{ height: 60, width:150 }} />
            </IconButton>
          </Link>
        </Box>

        {/* Menu Button (Hamburger icon) for small screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton edge="end" color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Menu links (visible on larger screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 28 }}>
          <Link to="/" onClick={closeMobileMenu}>
            <StyledButton sx={{
              ml: 2,
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>Home</StyledButton>
          </Link>
          <Link to="/pricing" onClick={closeMobileMenu}>
            <StyledButton sx={{
              ml: 2,
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>Services & Pricing</StyledButton>
          </Link>
          <Link to="/services" onClick={closeMobileMenu}>
            <StyledButton sx={{
              ml: 2,
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>Why Choose Us</StyledButton>
          </Link>
          <Link to="/about-us" onClick={closeMobileMenu}>
            <StyledButton sx={{
              ml: 2,
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>About Us</StyledButton>
          </Link>
          <Link to="/contact-us" onClick={closeMobileMenu}>
            <StyledButton sx={{
              ml: 2,
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>Contact Us</StyledButton>
          </Link>
        </Box>

        {/* Book Now and Call buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
            <BookNowButton sx={{
              ml: 2,
              '&:hover': {
                backgroundColor: '#45a049',  // Darker green on hover
              },
              // Adjust color for small screens
              '@media (max-width:600px)': {
                backgroundColor: '#45a049',  // Darker green for small screen
                color: 'black',
              }
            }}>Book Now</BookNowButton>
          </Link>
          <a href="tel:+61383917026" style={{ textDecoration: 'none' }}>
            <StyledButton sx={{
              ml: 2,
              fontWeight: 'bold',
              color: 'white',  // Default for larger screens
              borderColor: 'white',  // Default for larger screens
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              },
              // For smaller screens (under 600px) set black color and border
              '@media (max-width:600px)': {
                color: 'black',
                borderColor: 'black',
              }
            }}>Call 03 8391 7026</StyledButton>
          </a>
        </Box>
      </Toolbar>

      {/* Mobile Menu (Drawer) */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List sx={{ width: 250, padding: '20px 0' }}>
          <ListItem button>
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <StyledButton fullWidth sx={{
                mb: 2,
                color: 'black',  // Default for mobile
                borderColor: 'black',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                },
              }}>Services</StyledButton>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/pricing" style={{ textDecoration: 'none' }}>
              <StyledButton fullWidth sx={{
                mb: 2,
                color: 'black',  // Default for mobile
                borderColor: 'black',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                },
              }}>Pricing</StyledButton>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              <StyledButton fullWidth sx={{
                mb: 2,
                color: 'black',  // Default for mobile
                borderColor: 'black',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                },
              }}>About Us</StyledButton>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <StyledButton fullWidth sx={{
                mb: 2,
                color: 'black',  // Default for mobile
                borderColor: 'black',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                },
              }}>Contact Us</StyledButton>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/" style={{ textDecoration: 'none' }}>
  <BookNowButton fullWidth sx={{ mb: 2 }}>
    Book Now
  </BookNowButton>
</Link>

          </ListItem>
          <ListItem button>
            <a href="tel:+61383917026" style={{ textDecoration: 'none' }}>
              <StyledButton fullWidth sx={{
                mb: 2,
                fontWeight: 'bold',
                color: 'black',  // Default for mobile
                borderColor: 'black',
                '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                },
              }}>Call 03 8391 7026</StyledButton>
            </a>
          </ListItem>
        </List>
      </Drawer>
      <ScrollLine/>
    </AppBar>
  );
};

export default ResponsiveAppBar;
