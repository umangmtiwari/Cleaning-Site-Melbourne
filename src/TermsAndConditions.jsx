import React from 'react';
import { Box, Typography, Button, Container, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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
            width: '100%',
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

        {/* Terms List */}
        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Condition of Home & Extreme Cleans</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Clean Commerce services are intended for homes that have received a thorough clean within the past 0–6 months.
            If your home has not been cleaned within this timeframe, an Extreme Clean may be required prior to any standard service. If
            our team determines upon arrival that the condition of your home is unsuitable for the booked service, a cancellation fee may apply.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Cleaner Safety – Hot Weather</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            To protect the health and safety of our cleaners, we ask that air conditioning be turned on during services on days
            where temperatures reach 35°C or above. If air conditioning is unavailable, please contact our office in advance.
            If no prior arrangements are made and air conditioning is not available at the time of service, the booking may be cancelled,
            and a cancellation fee may apply.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Damage Policy</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            In the rare event that damage occurs during a service, please follow the reporting guidelines below:
          </Typography>
          <List sx={{ pl: 4 }}>
            <ListItem>General Services: Report within 2 business days with supporting photos.</ListItem>
            <ListItem>End-of-Lease Services: Report within 5 business days with supporting photos.</ListItem>
          </List>
          <Typography variant="body1" paragraph>
            Clean Commerce is not liable for pre-existing damage, or damage to valuable or personal items (e.g., artwork, antiques,
            documents, cash, designer goods, jewelry, electronics) unless photographic evidence confirms the damage occurred during
            the service and was caused by our team.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Waiting for Access</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            If our team cannot access your property, our office will contact you via SMS and phone (unless otherwise requested).
            We will wait 15 minutes for access to be provided. If access is not granted, the service will be cancelled, and a 50% cancellation fee will apply.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Billing</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            You will not be charged until after your service is completed. For new or one-off customers, we will call the next
            business day to confirm satisfaction before charging your card. If unreachable, we will make two further attempts before processing payment.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Team Size</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We typically assign 1–2 cleaners per service. Occasionally, a support cleaner or Cleaning Quality Agent may assist.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Gender Neutral Policy</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Clean Commerce employs individuals of all genders. We affirm that gender does not impact cleaning quality. We kindly ask customers
            to avoid gender-based cleaner requests unless for reasons unrelated to service quality.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>Phone Call Recording</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            All incoming and outgoing calls may be recorded for quality assurance and training. If sensitive information (e.g., credit card details)
            is shared, our team will pause the recording to ensure your privacy and security.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>General Terms and Conditions</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations,
            and acknowledge that you are responsible for compliance with any relevant local laws.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
