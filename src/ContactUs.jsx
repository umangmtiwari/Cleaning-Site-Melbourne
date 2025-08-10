import React, { useState } from 'react';
import { IconButton, Box, TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Email, Phone, Star } from '@mui/icons-material';

const ContactUs = () => {
  // Initializing state with empty default values for the fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyType: '',  // Empty string as default
    services: [],
    serviceType: '',  // Empty string as default
    serviceNeed: '',  // Empty string as default
    additionalInfo: '',
  });

  // Handle change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes (for services)
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      services: formData.services.includes(value)
        ? formData.services.filter(service => service !== value)
        : [...formData.services, value],
    });
  };

  // Handle form submission (build the mailto link)
  const handleSubmit = () => {
    const subject = encodeURIComponent("Service Booking Request");
    const body = encodeURIComponent(`
      Name: ${formData.firstName} ${formData.lastName}
      Contact: ${formData.phone}
      Email: ${formData.email}
      Property Type: ${formData.propertyType}
      Services: ${formData.services.join(', ')}
      Frequency: ${formData.serviceNeed}
      Additional Info: ${formData.additionalInfo}
    `);

    window.location.href = `mailto:services@cleancommerce.com.au?subject=${subject}&body=${body}`;
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
  <Typography variant="h6" sx={{ color: '#006699', fontWeight: 'bold', marginBottom: 2 }}>Contact Info</Typography>
  
<TextField
  required
  label="First Name"
  name="firstName"
  variant="outlined"
  fullWidth
  onChange={handleChange}
  value={formData.firstName}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#006699',
      },
      '&:hover fieldset': {
        borderColor: '#006699',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#006699',
      },
    },
    marginBottom: 2, // Add space below each input field
  }}
/>

<TextField
  required
  label="Last Name"
  name="lastName"
  variant="outlined"
  fullWidth
  onChange={handleChange}
  value={formData.lastName}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#006699',
      },
      '&:hover fieldset': {
        borderColor: '#006699',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#006699',
      },
    },
    marginBottom: 2, // Add space below each input field
  }}
/>

<TextField
  required
  label="Phone"
  name="phone"
  variant="outlined"
  fullWidth
  onChange={handleChange}
  value={formData.phone}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#006699',
      },
      '&:hover fieldset': {
        borderColor: '#006699',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#006699',
      },
    },
    marginBottom: 2, // Add space below each input field
  }}
/>

<TextField
  required
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
        borderColor: '#006699',
      },
      '&:hover fieldset': {
        borderColor: '#006699',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#006699',
      },
    },
    marginBottom: 2, // Add space below each input field
  }}
/>

{/* Property Type */}
          <FormControl fullWidth sx={{ marginBottom: 2 }} error={formData.propertyType === ''}>
            <InputLabel required>Property Type</InputLabel>
            <Select
              label="Property Type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Unit">Unit</MenuItem>
            </Select>
          </FormControl>

          {/* Type of Service */}
          <FormControl fullWidth sx={{ marginBottom: 2 }} error={formData.serviceType === ''}>
            <InputLabel required>Type of Service</InputLabel>
            <Select
              label="Type of Service"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <MenuItem value="FlatRate">Flat Rate</MenuItem>
              <MenuItem value="SpringClean">Spring Clean</MenuItem>
              <MenuItem value="EndOfLease">End of Lease</MenuItem>
            </Select>
          </FormControl>


        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', ml: 2 }}>
                <IconButton>
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" sx={{ color: 'white', ml: 2 }}>
              <IconButton>
                <Facebook/>
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
        <Box sx={{ flex: 1, marginTop: 5 }}>
          
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={formData.services.includes('General Cleaning')} onChange={handleCheckboxChange} value="General Cleaning" />}
              label="General Cleaning"
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
          </FormGroup>
          
{/* Service Frequency */}
          <FormControl fullWidth sx={{ marginBottom: 2 }} error={formData.serviceNeed === ''}>
            <InputLabel required>How often do you need this service?</InputLabel>
            <Select
              label="Service Need"
              name="serviceNeed"
              value={formData.serviceNeed}
              onChange={handleChange}
              required
            >
              <MenuItem value="OnceOff">Once-Off</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Fortnightly">Fortnightly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Quarterly">Quarterly</MenuItem>
              <MenuItem value="BiAnnually">Bi-Annually</MenuItem>
            </Select>
          </FormControl>
          
          <Typography variant="subtitle1" gutterBottom>
  Property Size
</Typography>

<Box display="flex" gap={2} flexWrap="wrap" marginBottom={2}>
  {/* Bedroom */}
  <FormControl fullWidth sx={{ maxWidth: 120 }} error={formData.bedroom === ''}>
    <InputLabel required>Bedroom</InputLabel>
    <Select
      name="bedroom"
      value={formData.bedroom}
      label="Bedroom"
      onChange={handleChange}
      required
    >
      {Array.from({ length: 6 }, (_, i) => (
        <MenuItem key={i} value={i}>{i}</MenuItem>
      ))}
    </Select>
  </FormControl>

  {/* Bathroom */}
  <FormControl fullWidth sx={{ maxWidth: 120 }} error={formData.bathroom === ''}>
    <InputLabel required>Bathroom</InputLabel>
    <Select
      name="bathroom"
      value={formData.bathroom}
      label="Bathroom"
      onChange={handleChange}
      required
    >
      {Array.from({ length: 6 }, (_, i) => (
        <MenuItem key={i} value={i}>{i}</MenuItem>
      ))}
    </Select>
  </FormControl>

  {/* Kitchen */}
  <FormControl fullWidth sx={{ maxWidth: 120 }} error={formData.kitchen === ''}>
    <InputLabel required>Kitchen</InputLabel>
    <Select
      name="kitchen"
      value={formData.kitchen}
      label="Kitchen"
      onChange={handleChange}
      required
    >
      {Array.from({ length: 6 }, (_, i) => (
        <MenuItem key={i} value={i}>{i}</MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>


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
              backgroundColor: '#006699',
              color: 'white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              padding: '12px 24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#006699',
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
