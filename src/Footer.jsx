import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Instagram, Email, Phone, Star } from '@mui/icons-material';
import './App.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#2E8B57', color: 'white', py: 4, fontFamily: 'DM Sans, sans-serif' }}>
      
      {/* Top Section: Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', ml: 2 }}>
          <IconButton>
            <Instagram />
          </IconButton>
        </Link>
        <Link href="mailto:contact@melbourneclean.com" sx={{ color: 'white', ml: 2 }}>
          <IconButton>
            <Email />
          </IconButton>
        </Link>
        <Link href="tel:+61383917026" sx={{ color: 'white', ml: 2 }}>
          <IconButton>
            <Phone />
          </IconButton>
        </Link>
      </Box>

      {/* Tagline and Ratings Section */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Excellent Service Every Time
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {[...Array(5)].map((_, index) => (
            <Star key={index} sx={{ color: 'gold', fontSize: 30 }} />
          ))}
        </Box>
      </Box>

{/* Navigation Links */}
<Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
  {['Services', 'Pricing', 'About Us', 'Contact Us'].map((text, index) => {
    const path = `/${text.toLowerCase().replace(' ', '-')}`; // Generates the correct path
    
    return (
      <Typography key={index} variant="body2" sx={{ ml: 2 }}>
        {/* Use a regular anchor tag with href */}
        <a href={path} style={{ color: 'white', textDecoration: 'none' }}>
          {text}
        </a>
      </Typography>
    );
  })}
</Box>



      {/* Modern Book Now Button */}
<Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
  {/* Use Link for navigation to the homepage */}
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#4CAF50',
        color: 'white',
        textTransform: 'none',
        fontSize: '1.1rem',
        fontFamily: 'DM Sans, sans-serif',
        borderRadius: '50px',  // Rounded corners for modern look
        padding: '12px 30px',  // Increased padding
        boxShadow: 'none',  // Flat design
        '&:hover': {
          backgroundColor: '#45a049',  // Darker green on hover
          transform: 'scale(1.05)',  // Slight zoom effect
          transition: 'transform 0.3s ease-in-out',  // Smooth transition
        },
        '&:active': {
          transform: 'scale(0.98)',  // Slight shrink on click
        },
      }}
      href="/"
    >
      Book Now
    </Button>
</Box>


      {/* Contact Information */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography>Phone: +61 400 123 456</Typography>
        <Typography>Address: 123 Clean Street, Melbourne, VIC 3000</Typography>
      </Box>

      {/* Copyright Notice */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          &copy; 2025 MelbourneClean. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
