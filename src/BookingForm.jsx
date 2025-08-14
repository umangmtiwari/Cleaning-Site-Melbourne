import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', contact: '', email: '' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images for the slideshow
  const images = [
    '/home1.jpg', 
    '/home2.jpg', 
    '/home3.jpg', 
    '/home4.jpg', 
    '/home5.jpg'
  ];

  // Change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [images.length]); // Include images.length as a dependency

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
  if (validateForm()) {
    const subject = encodeURIComponent("Service Booking Request");
    const body = encodeURIComponent(`Name: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}`);
    window.location.href = `mailto:services@CleanCommerce.com?subject=${subject}&body=${body}`;
  }
};


  const [errors, setErrors] = useState({ name: '', contact: '', email: '' });

const validateForm = () => {
  let formIsValid = true;
  let newErrors = { name: '', contact: '', email: '' };

  // Name field is required
  if (!formData.name) {
    formIsValid = false;
    newErrors.name = 'Name is required';
  }

  // Contact No field with regex check for a 10-digit number
  const contactRegex = /^[0-9]{10}$/;
  if (!formData.contact) {
    formIsValid = false;
    newErrors.contact = 'Contact number is required';
  } else if (!contactRegex.test(formData.contact)) {
    formIsValid = false;
    newErrors.contact = 'Please enter a valid 10-digit contact number';
  }

  // Email field with regex check for a valid email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!formData.email) {
    formIsValid = false;
    newErrors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    formIsValid = false;
    newErrors.email = 'Please enter a valid email address';
  }

  setErrors(newErrors);
  return formIsValid;
};


  return (
    <>
      {/* Booking Form Section with Slideshow */}
      <Box
        sx={{
            fontFamily: 'DM Sans, sans-serif',
          py: 20, // Increased padding to make the image taller
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          backgroundImage: `url(${images[currentImageIndex]})`, // Dynamically changing image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease', // Smooth transition between images
          position: 'relative', // To position the overlay
        }}
      >
        {/* Overlay for better text visibility */}
        <Box
          sx={{
            fontFamily: 'DM Sans, sans-serif',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
            zIndex: 1,
          }}
        />

        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'white', 
            position: 'relative', 
            zIndex: 2, // Ensure text is above the overlay
          }}
        >
          Sparkling Clean Homes Start Here
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          sx={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'white', 
            position: 'relative', 
            zIndex: 2, // Ensure text is above the overlay
          }}
        >
          Book your professional home, bathroom, or kitchen cleaning service today with Clean Commerce.
        </Typography>
      </Box>

      {/* Booking Form */}
<Container maxWidth="md" sx={{ my: 5 }}>
  <Typography variant="h5" sx={{ textAlign: 'center', color: '#006699' }} gutterBottom>
    Get a Quote
  </Typography>

  <Box sx={{
    fontFamily: 'DM Sans, sans-serif',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile, row on larger screens
    gap: 2,
    alignItems: { xs: 'center', sm: 'flex-start' } // Center text fields on mobile
  }}>
    <TextField
      label="Name"
      name="name"
      variant="outlined"
      fullWidth
      onChange={handleChange}
      value={formData.name}
      error={Boolean(errors.name)}
      helperText={errors.name}
      sx={{
        fontFamily: 'DM Sans, sans-serif',
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
      }}
    />
    <TextField
      label="Contact No"
      name="contact"
      variant="outlined"
      fullWidth
      onChange={handleChange}
      value={formData.contact}
      error={Boolean(errors.contact)}
      helperText={errors.contact}
      sx={{
        fontFamily: 'DM Sans, sans-serif',
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
      }}
    />
    <TextField
      label="Email"
      name="email"
      variant="outlined"
      fullWidth
      onChange={handleChange}
      value={formData.email}
      error={Boolean(errors.email)}
      helperText={errors.email}
      sx={{
        fontFamily: 'DM Sans, sans-serif',
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
      }}
    />
  </Box>

  <Box sx={{
    fontFamily: 'DM Sans, sans-serif',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile, row on larger screens
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    mt: 2
  }}>
    <Typography variant="body2" sx={{ color: '#006699', display: 'flex', alignItems: 'center' }}>
      <ShieldIcon fontSize="small" />
      200% Guarantee
    </Typography>
    <Typography variant="body2" sx={{ color: '#006699', display: 'flex', alignItems: 'center' }}>
      <CheckCircleIcon fontSize="small" />
      Fully Insured
    </Typography>
    <Typography variant="body2" sx={{ color: '#006699', display: 'flex', alignItems: 'center' }}>
      <StarIcon fontSize="small" />
      5 Star Rated Service
    </Typography>
  </Box>

  <Box sx={{
    fontFamily: 'DM Sans, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    mt: 3
  }}>
    <Button
      variant="contained"
      sx={{
        fontFamily: 'DM Sans, sans-serif',
        backgroundColor: '#006699', // Green button color
        color: 'white',
        borderRadius: '50px', // Rounded corners for a modern look
        fontSize: '1.1rem', // Slightly larger text for better readability
        fontWeight: 'bold', // Bold text for more emphasis
        padding: '12px 24px', // More padding for a comfortable click area
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        '&:hover': {
          backgroundColor: '#006699', // Darker green on hover
          boxShadow: '0 8px 14px rgba(0, 0, 0, 0.2)', // Shadow becomes stronger on hover
          transform: 'translateY(-3px)', // Slight lift effect when hovered
        },
        transition: 'all 0.3s ease', // Smooth transition for all effects
      }}
      startIcon={<EmailIcon />}
      onClick={handleSubmit}
    >
      Get a Quote
    </Button>
  </Box>
</Container>

    </>
  );
}
