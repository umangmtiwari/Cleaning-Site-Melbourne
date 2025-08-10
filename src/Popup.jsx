import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ open, onClose }) => {
  if (!open) return null; // Don't render if the popup is closed

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Ensure it's on top
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f9f9f9', // Lighter background for the popup
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '380px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'gray',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '8px' }}>
          SPECIAL OFFER
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: '16px', fontSize: '1.1rem', color: '#333' }}>
          WESTERN SUBURBS
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#555' }}>
          We currently have a surplus of 5-Star rated cleaners in the Western Suburbs.
          Take advantage today!
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '24px', fontSize: '1.75rem' }}>
          WOULD YOU LIKE <span style={{ color: '#4CAF50' }}>$40 OFF</span> YOUR FIRST SERVICE
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50', // Green background as per the design
              color: 'white',
              padding: '12px 24px', // Adjust padding for a cleaner look
              textTransform: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#45a049', // Darker green on hover
              },
            }}
            href="/contact-us"
          >
            YES PLEASE!
          </Button>
        </Box>

        <Button
          onClick={onClose}
          sx={{
            color: '#777', // Subtle gray text
            textDecoration: 'underline',
            fontSize: '0.875rem',
            marginTop: '12px',
          }}
        >
          NO THANKS, I DON’T WANT TO SAVE MONEY
        </Button>

        <Typography variant="caption" sx={{ marginTop: '20px', fontSize: '0.75rem', color: '#777' }}>
          *$40 off any service booked for a home in the western suburbs of Melbourne. New bookings only.
          By entering your email address, you are subscribing to receive promotions and updates.
        </Typography>
      </Box>
    </Box>
  );
};

export default Popup;
