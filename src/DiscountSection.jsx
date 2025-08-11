// DiscountSection.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const DiscountBadge = ({ discount, frequency }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 180,
        height: 180,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)',
        margin: '0 auto',
        border: '5px dotted white',
      }}
    >
      <Box textAlign="center" zIndex={2}>
        <Typography variant="h5" fontWeight="bold">
          {discount} OFF
        </Typography>
      </Box>
      <Box
  sx={{
    position: 'absolute',
    bottom: -20, // Adjusted for better positioning
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    color: 'black',
    px: 3, // Padding for more space
    py: 1, // Increased padding for a more prominent look
    fontWeight: 'bold',
    fontSize: 14,
    borderRadius: '20px', // Rounding the corners
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: -8, // Position the triangle correctly
      left: '50%',
      transform: 'translateX(-50%)',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid white', // White triangle to form the ribbon notch
    },
  }}
>
  {frequency}
</Box>

    </Box>
  );
};

const DiscountSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffffff', py: 8, color: 'white', textAlign: 'center' }}>
      <Typography color='black' variant="h4" fontWeight="bold" mb={2}>
        You pay less the more often we clean
      </Typography>
      <Typography color='black' variant="h6" mb={1}>
        Loyalty has its rewards – we offer great discounts for regular clients.
      </Typography>
      <Typography color='black' variant="body1" mb={6}>
        Book a regular cleaning service and we’ll also assign you a dedicated housekeeper – that’s consistently exceptional,
        hassle-free cleaning from someone you trust. Guaranteed.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <DiscountBadge discount="10%" frequency="Fortnightly Services" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DiscountBadge discount="10%" frequency="Weekly Services" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DiscountBadge discount="5%" frequency="Monthly Services" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscountSection;
