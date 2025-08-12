import React from 'react';
import { Box, Typography, Container, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';

const TermsAndConditions = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <Box
          sx={{
            mt: 5,
            mb: 5,
            backgroundImage: 'url(/terms.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '12px',
            position: 'relative',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '12px',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              zIndex: 1,
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#f4f4f4',
              zIndex: 1,
              marginTop: 2,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Please read through our terms to understand our services better.
          </Typography>
        </Box>
      </Container>

      {/* Terms Content Section */}
      <Container sx={{ py: 6, maxWidth: 'lg', color: 'black' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Service Terms & Conditions
        </Typography>

        {/* Contact Information */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Contact Information</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1">
            Business Hours: Mon–Fri, 9am–5pm
          </Typography>
          <Typography variant="body1">
            Weekend & Public Holiday Hours: 9am – 4pm
          </Typography>
          <Typography variant="body1">
            Contact No: -------------------
          </Typography>
          <Typography variant="body1">
            SMS us at -------------- (SMS only – no photos)
          </Typography>
          <Typography variant="body1">
            For photo submissions, email services@cleancommerce.com.au
          </Typography>
        </Box>

        {/* 200% Satisfaction Guarantee */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>200% Satisfaction Guarantee</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            If you are unsatisfied with your service, contact our support team within 48 hours and provide photos. Photos are required to activate the 200% guarantee. If we cannot resolve the issue, a full refund may be considered depending on the circumstances. Re-cleans are currently available weekdays only, except in exceptional cases.
          </Typography>
        </Box>

        {/* Move-Out Services */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Move-Out Services</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            You have 7 days to contact support after a move-out clean. If necessary, a re-clean will be arranged within 7 days of the original service.
          </Typography>
        </Box>

        {/* Steam Cleaning */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Steam Cleaning</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            The satisfaction guarantee does not apply to steam cleaning services, except in exceptional cases. Our professional equipment will clean carpets/upholstery to the best possible standard. However, permanent stains may not be removable.
          </Typography>
        </Box>

        {/* COVID-19 Safety Measures */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>COVID-19 Safety Measures</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            All team members strictly adhere to current government COVID-19 regulations at the time of your booking. We maintain a comprehensive COVID-Safe Plan. Cleaners will carry masks, gloves, and shoe covers, and will wear them upon request. We ask all clients to observe social distancing, practice hand hygiene, and seek medical attention if experiencing flu-like symptoms. For more details, please visit our COVID-19 page.
          </Typography>
        </Box>

        {/* Service Exclusions */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Service Exclusions</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <List>
            <ListItem>Moving heavy/large furniture</ListItem>
            <ListItem>Floor grout cleaning</ListItem>
            <ListItem>Ceiling cleaning</ListItem>
            <ListItem>Oven glass sheet interiors</ListItem>
            <ListItem>Rubbish removal</ListItem>
            <ListItem>Human/animal waste removal</ListItem>
            <ListItem>Stained silicone</ListItem>
            <ListItem>Adhesive/paint removal</ListItem>
            <ListItem>Air conditioning filters</ListItem>
            <ListItem>Fly screen or curtain removal</ListItem>
            <ListItem>High-pressure cleaning</ListItem>
            <ListItem>Concrete stains</ListItem>
            <ListItem>Garage cleaning</ListItem>
            <ListItem>Exterior property cleaning (including windows, gardens, pools, BBQs)</ListItem>
            <ListItem>Pest control</ListItem>
          </List>
        </Box>

        {/* Keys & Property Access */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Keys & Property Access</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            Keys may be provided at the customer’s own risk. We label keys with only a first name and last initial. Our insurance does not cover lost or misused keys.
          </Typography>
        </Box>

        {/* Additional Terms */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Additional Terms and Conditions</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            Clean Commerce services are intended for homes that have received a thorough clean within the past 0–6 months. If your home has not been cleaned within this timeframe, an Extreme Clean may be required prior to any standard service.
          </Typography>
        </Box>

        {/* Billing and Payment Details */}
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Billing</strong>
        </Typography>
        <Box sx={{ pl: 2, mb: 4 }}>
          <Typography variant="body1" paragraph>
            You will not be charged until after your service is completed. For new or one-off customers, we will call the next business day to confirm satisfaction before charging your card. If unreachable, we will make two further attempts before processing payment.
          </Typography>
        </Box>

      </Container>
    </div>
  );
};

export default TermsAndConditions;
