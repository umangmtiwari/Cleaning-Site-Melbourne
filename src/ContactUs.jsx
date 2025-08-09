import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container} from '@mui/material';
import { Shield as ShieldIcon, CheckCircle as CheckCircleIcon, Star as StarIcon, Email as EmailIcon } from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Service Booking Request");
    const body = encodeURIComponent(`Name: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}`);
    window.location.href = `mailto:services@melbourneclean.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#2E8B57' }}>
        Contact Us
      </Typography>

      {/* Trust-Building Content */}
      <Typography variant="body1" paragraph align="center" sx={{ color: '#555' }}>
        We are here to help you! Whether you have a question, need support, or simply want to provide feedback, feel free to reach out.
        Our team is committed to responding quickly and professionally. Your inquiry is important to us, and we strive to provide the best service.
      </Typography>

          <Container maxWidth="md" sx={{ my: 5 }}>
      {/* Heading */}
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#2E8B57' }} gutterBottom>
        Book a Service
      </Typography>

      {/* Booking Form */}
      <Box sx={{ fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'row', gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.name}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2E8B57', // Green border for text fields
              },
              '&:hover fieldset': {
                borderColor: '#2E8B57', // Green on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2E8B57', // Green when focused
              },
            },
          }}
        />
        <TextField
          label="Contact No"
          name="contact"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.contact}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2E8B57',
              },
              '&:hover fieldset': {
                borderColor: '#2E8B57',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2E8B57',
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.email}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2E8B57',
              },
              '&:hover fieldset': {
                borderColor: '#2E8B57',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2E8B57',
              },
            },
          }}
        />
      </Box>

      {/* Trust-Building Icons */}
      <Box sx={{ fontFamily: 'DM Sans, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
        <Typography variant="body2" sx={{ color: '#2E8B57', display: 'flex', alignItems: 'center' }}>
          <ShieldIcon fontSize="small" />
          200% Guarantee
        </Typography>
        <Typography variant="body2" sx={{ color: '#2E8B57', display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon fontSize="small" />
          Fully Insured
        </Typography>
        <Typography variant="body2" sx={{ color: '#2E8B57', display: 'flex', alignItems: 'center' }}>
          <StarIcon fontSize="small" />
          5 Star Rated Service
        </Typography>
      </Box>

      {/* Submit Button */}
      <Box sx={{ fontFamily: 'DM Sans, sans-serif', display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2E8B57', // Green button color
            color: 'white',
            borderRadius: '50px', // Rounded corners for a modern look
            fontSize: '1.1rem', // Slightly larger text for better readability
            fontWeight: 'bold', // Bold text for more emphasis
            padding: '12px 24px', // More padding for a comfortable click area
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            '&:hover': {
              backgroundColor: '#248C48', // Darker green on hover
              boxShadow: '0 8px 14px rgba(0, 0, 0, 0.2)', // Shadow becomes stronger on hover
              transform: 'translateY(-3px)', // Slight lift effect when hovered
            },
            transition: 'all 0.3s ease', // Smooth transition for all effects
          }}
          startIcon={<EmailIcon />}
          onClick={handleSubmit}
        >
          Book Service
        </Button>
      </Box>
    </Container>

      {/* Contact Details */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6" sx={{ color: '#2E8B57', fontWeight: 'bold' }}>
          Other Ways to Reach Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          You can also reach us through the following channels:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Email: <strong>support@melbourneclean.com</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Phone: <strong>+61 3 8391 7026</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Address: <strong>123 Melbourne Street, VIC 3000, Australia</strong>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
