import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <Box
          sx={{
            mt: 5,
            mb: 5,
            backgroundImage: 'url(/privacy.jpg)',  // You can update this image path
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
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
