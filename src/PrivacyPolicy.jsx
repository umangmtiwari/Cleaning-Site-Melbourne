import React from 'react';
import { Box, Typography, Button, Container, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <Box
          sx={{
            mt: 5,
            mb: 5,
            backgroundImage: 'url(/privacy.jpg)',
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
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
              borderRadius: '12px',
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              zIndex: 1,
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Text shadow for better visibility
            }}
          >
            Privacy Policy
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
            We value your privacy. Learn more about how we protect your personal information.
          </Typography>
        </Box>
      </Container>

      {/* Privacy Policy Content Section */}
      <Container sx={{ py: 6, maxWidth: 'lg', color: 'black' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Privacy Policy Details
        </Typography>

        <Box sx={{ lineHeight: 1.8 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            <strong>1. Collection of Personal Information</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We will identify the purposes for which personal information is being collected either before or at the time of collection.
            Information will be collected only by lawful and fair means, and where appropriate, with the knowledge or consent of the individual concerned.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>2. Use of Personal Information</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Personal information will be used solely for the purposes specified at the time of collection or for purposes that are compatible
            with those original purposes. We will not use or disclose personal information for other purposes without obtaining the individual’s consent
            or as required by law.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>3. Retention of Personal Information</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We will retain personal information only for as long as necessary to fulfill the purposes for which it was collected. Once the information is
            no longer required, it will be securely disposed of or anonymized.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>4. Accuracy and Relevance</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We will take reasonable steps to ensure that personal data is accurate, complete, and up-to-date, and is relevant to the purposes for which it is to be used.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>5. Security of Personal Information</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We are committed to protecting personal information through reasonable security safeguards against risks such as loss, theft, unauthorized access,
            disclosure, copying, use, or modification.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>6. Transparency and Access</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We will make information about our policies and practices relating to the management of personal information readily available to individuals.
            Upon request, individuals will be informed of the existence, use, and disclosure of their personal information and will be given access to that
            information, subject to legal limitations.
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            <strong>7. Compliance and Accountability</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We conduct our business in accordance with these principles to ensure that the confidentiality and integrity of personal information is protected
            and maintained. Our staff are trained and held accountable for complying with this Privacy Policy.
          </Typography>
        </Box>

        {/* Contact Information Section */}
        <Typography variant="h4" align="center" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Business Hours:</strong> Mon–Fri, 9am–5pm<br />
          <strong>Weekend & Public Holiday Hours:</strong> 9am – 4pm<br />
          <strong>Contact No:</strong> -------------------<br />
          <strong>SMS Us:</strong> -------------- (SMS only – no photos)<br />
          <strong>For photo submissions:</strong> email services@cleancommerce.com.au
        </Typography>

        {/* Additional Information Section */}
        <Typography variant="h4" align="center" gutterBottom>
          Additional Information
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="body1" paragraph>
            <strong>200% Satisfaction Guarantee:</strong> If you are unsatisfied with your service, contact our support team within 48 hours and provide photos. Photos
            are required to activate the 200% guarantee. If we cannot resolve the issue, a full refund may be considered depending on the circumstances.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Move-Out Services:</strong> You have 7 days to contact support after a move-out clean. If necessary, a re-clean will be arranged within 7 days of the
            original service.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Steam Cleaning:</strong> The satisfaction guarantee does not apply to steam cleaning services, except in exceptional cases. Our professional
            equipment will clean carpets/upholstery to the best possible standard. However, permanent stains may not be removable.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>COVID-19 Safety Measures:</strong> All team members strictly adhere to current government COVID-19 regulations at the time of your booking.
            We maintain a comprehensive COVID-Safe Plan. Cleaners will carry masks, gloves, and shoe covers, and will wear them upon request.
          </Typography>

          {/* Service Exclusions Section */}
          <Typography variant="body1" paragraph>
            <strong>Service Exclusions:</strong>
            <List sx={{ pl: 4 }}>
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
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
