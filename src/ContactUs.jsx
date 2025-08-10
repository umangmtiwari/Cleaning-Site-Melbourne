import React, { useState } from 'react';
import { IconButton, Box, TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Instagram, Email, Phone, Star } from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyType: '',
    services: [],
    frequency: '',
    propertySize: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      services: formData.services.includes(value)
        ? formData.services.filter(service => service !== value)
        : [...formData.services, value],
    });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Service Booking Request");
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nContact: ${formData.phone}\nEmail: ${formData.email}\nProperty Type: ${formData.propertyType}\nServices: ${formData.services.join(', ')}\nFrequency: ${formData.frequency}\nProperty Size: ${formData.propertySize}\nAdditional Info: ${formData.additionalInfo}`);
    window.location.href = `mailto:services@CleanCommerce.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
          <Box
      sx={{
        mt: 5,
        mb: 5,
        backgroundImage: 'url(/clean3.jpg)', // Background image from the public folder
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        height: '60vh', // Adjust this to control the height of the container
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px', // Optional: rounded corners for a softer look
        position: 'relative', // Ensures overlay can be positioned over the content
        textAlign: 'center', // Center the text
        color: 'white', // White color for the text to stand out
      }}
    >
      {/* Overlay for background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay to improve text visibility
          borderRadius: '10px', // Optional: keeps rounded corners for overlay
        }}
      />
      
      {/* Heading */}
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: 'white',  // White color for visibility
          zIndex: 1,  // Ensures the text appears over the overlay
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
        }}
      >
        Get in Touch
      </Typography>

      {/* Trust-Building Content */}
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          color: '#f4f4f4', // Light text color for better contrast
          zIndex: 1,  // Ensures the text appears over the overlay
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
        }}
      >
        We're here to assist with all your cleaning needs. Fill out the form below to book a service or get in touch.
      </Typography>
    </Box>

      <Box sx={{ fontFamily: 'DM Sans, sans-serif', display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {/* Left Side: Contact Info */}
        <Box sx={{ flex: 1 }}>
  <Typography variant="h6" sx={{ color: '#2E8B57', fontWeight: 'bold', marginBottom: 2 }}>Contact Info</Typography>
  
  <TextField
    label="First Name"
    name="firstName"
    variant="outlined"
    fullWidth
    onChange={handleChange}
    value={formData.firstName}
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
      marginBottom: 2, // Add space below each input field
    }}
  />
  
  <TextField
    label="Last Name"
    name="lastName"
    variant="outlined"
    fullWidth
    onChange={handleChange}
    value={formData.lastName}
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
      marginBottom: 2, // Add space below each input field
    }}
  />
  
  <TextField
    label="Phone"
    name="phone"
    variant="outlined"
    fullWidth
    onChange={handleChange}
    value={formData.phone}
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
      marginBottom: 2, // Add space below each input field
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
      marginBottom: 2, // Add space below each input field
    }}
  />
  
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', ml: 2 }}>
                <IconButton>
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="mailto:contact@CleanCommerce.com" sx={{ color: 'white', ml: 2 }}>
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
</Box>

        {/* Right Side: Service & Property Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: '#2E8B57', fontWeight: 'bold' }} marginBottom={2}>Service Info</Typography>
          <FormControl fullWidth>
            <InputLabel>Property Type</InputLabel>
            <Select
              label="Property Type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
            </Select>
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('General Cleaning')} onChange={handleCheckboxChange} value="General Cleaning" />}
              label="General Cleaning"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('Window Cleaning')} onChange={handleCheckboxChange} value="Window Cleaning" />}
              label="Window Cleaning"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('Vacate Cleaning')} onChange={handleCheckboxChange} value="Vacate Cleaning" />}
              label="Vacate Cleaning"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('Deep Cleaning')} onChange={handleCheckboxChange} value="Deep Cleaning" />}
              label="Deep Cleaning"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('Carpet Cleaning')} onChange={handleCheckboxChange} value="Carpet Cleaning" />}
              label="Carpet Cleaning"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('Construction Cleaning')} onChange={handleCheckboxChange} value="Construction Cleaning" />}
              label="Construction Cleaning"
            />
          </FormGroup>

          <TextField
            label="Property Size"
            name="propertySize"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={formData.propertySize}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Additional Info"
            name="additionalInfo"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            onChange={handleChange}
            value={formData.additionalInfo}
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2E8B57',
              color: 'white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              padding: '12px 24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#248C48',
                boxShadow: '0 8px 14px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.3s ease',
            }}
            startIcon={<EmailIcon />}
            onClick={handleSubmit}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
