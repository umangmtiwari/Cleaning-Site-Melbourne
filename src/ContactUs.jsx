import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import { Turnstile } from '@marsidev/react-turnstile';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [token, setToken] = useState('');
  const [showTurnstile, setShowTurnstile] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);


  // Handle change for all form fields
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleTurnstileSuccess = (token) => {
  setToken(token);
  // After token is stored, you could call a separate function to send data
  if (readyToSubmit) {
    handleSubmitFinal(token);
    setReadyToSubmit(false); // Reset the flag
  }
};
const handleSubmitFinal = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/bookingdetails.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, turnstileToken: token }),
    });

    const result = await response.json();

    if (result.success) {
      alert('Quote request sent successfully!');
      setFormData({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  propertyType: '',
  services: [],
  serviceType: '',
  serviceNeed: '',
  additionalInfo: '',
  bedroom: '',
  bathroom: '',
  kitchen: '',
});
setIsSubmitted(false);
      setToken('');
      setShowTurnstile(false);
    } else {
      alert('Failed to send quote: ' + (result.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};

  // Handle form submission (build the mailto link)
const handleSubmitClick = () => {
  setIsSubmitted(true);

  const requiredFields = [
    'firstName', 'lastName', 'phone', 'email', 'propertyType',
    'serviceType', 'serviceNeed', 'bedroom', 'bathroom', 'kitchen'
  ];

  const isFormValid = requiredFields.every(field =>
    formData[field] !== null &&
    formData[field] !== undefined &&
    String(formData[field]).trim() !== ''
  );

  if (!isFormValid) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!token) {
    alert('Please complete the Cloudflare verification.');
    return;
  }

  handleSubmitFinal(token);
};

const isFormValid = () => {
  const requiredFields = [
    'firstName', 'lastName', 'phone', 'email', 'propertyType',
    'serviceType', 'serviceNeed', 'bedroom', 'bathroom', 'kitchen'
  ];
  return requiredFields.every(field =>
    formData[field] !== null &&
    formData[field] !== undefined &&
    String(formData[field]).trim() !== ''
  );
};

  return (
<Container sx={{ mt: 5, mb: 5 }}>
  <Box
    sx={{
      mt: 5,
      mb: 5,
      backgroundImage: 'url(/clean3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px',
      }}
    />
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        color: 'white',
        zIndex: 1,
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      Get in Touch
    </Typography>
    <Typography
      variant="body1"
      paragraph
      sx={{
        color: '#f4f4f4',
        zIndex: 1,
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
      }}
    >
      We're here to assist with all your cleaning needs. Fill out the form below to book a service or get in touch.
    </Typography>
  </Box>

  <Box
    sx={{
      fontFamily: 'DM Sans, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      '@media (min-width: 600px)': {
        flexDirection: 'row',
      },
    }}
  >
    {/* Left Side: Contact Info */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h6"
        sx={{ color: '#006699', fontWeight: 'bold', marginBottom: 2 }}
      >
        Contact Info
      </Typography>

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
            '&:hover fieldset': { borderColor: '#006699' },
            '&.Mui-focused fieldset': { borderColor: '#006699' },
          },
          marginBottom: 2,
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
            '&:hover fieldset': { borderColor: '#006699' },
            '&.Mui-focused fieldset': { borderColor: '#006699' },
          },
          marginBottom: 2,
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
            '&:hover fieldset': { borderColor: '#006699' },
            '&.Mui-focused fieldset': { borderColor: '#006699' },
          },
          marginBottom: 2,
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
            '&:hover fieldset': { borderColor: '#006699' },
            '&.Mui-focused fieldset': { borderColor: '#006699' },
          },
          marginBottom: 2,
        }}
      />

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
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

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 3 }}>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
    alt="Instagram"
    style={{ width: 25, height: 25, cursor: 'pointer' }}
    onClick={() => window.open('https://www.instagram.com/clean_commerce/', '_blank')}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    alt="Facebook"
    style={{ width: 25, height: 25, cursor: 'pointer' }}
    onClick={() => window.open('https://www.facebook.com/people/Clean-Commerce/61579098015865/', '_blank')}
  />

  <img
    src="https://cdn-icons-png.flaticon.com/512/9810/9810022.png"
    alt="Email"
    style={{ width: 25, height: 25, cursor: 'pointer' }}
    onClick={() => (window.location.href = 'mailto:services@cleancommerce.com.au')}
  />

  <img
    src="https://pngimg.com/uploads/phone/phone_PNG48921.png"
    alt="Phone"
    style={{ width: 25, height: 25, cursor: 'pointer' }}
    onClick={() => (window.location.href = 'tel:+61403600961')}
  />
</Box>

    </Box>

    {/* Right Side: Service & Property Info */}
    <Box sx={{ flex: 1, marginTop: 5 }}>
      <FormControl fullWidth sx={{ marginBottom: 2}}>
        <InputLabel required>Type of Service</InputLabel>
        <Select
          label="Type of Service"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <MenuItem value="SuperClean">Super Clean</MenuItem>
          <MenuItem value="SpringClean">Spring Clean</MenuItem>
          <MenuItem value="EndOfLease">End of Lease (Empty)</MenuItem>
        </Select>
      </FormControl>
          
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
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
          
      <Typography variant="subtitle1" color="black" gutterBottom>
        Property Size
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap" marginBottom={2}>
        <FormControl fullWidth sx={{ maxWidth: 120 }}>
          <InputLabel required>Bedroom</InputLabel>
          <Select
            name="bedroom"
            value={formData.bedroom}
            label="Bedroom"
            onChange={handleChange}
            required
          >
            {Array.from({ length: 7 }, (_, i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ maxWidth: 120 }}>
          <InputLabel required>Bathroom</InputLabel>
          <Select
            name="bathroom"
            value={formData.bathroom}
            label="Bathroom"
            onChange={handleChange}
            required
          >
            {Array.from({ length: 7 }, (_, i) => (
              <MenuItem key={i} value={i}>{i}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ maxWidth: 120 }}>
          <InputLabel required>Kitchen</InputLabel>
          <Select
            name="kitchen"
            value={formData.kitchen}
            label="Kitchen"
            onChange={handleChange}
            required
          >
            {Array.from({ length: 7 }, (_, i) => (
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
<Box >
  <Turnstile
  siteKey="0x4AAAAAABsfYvULtHW6Zt9O"
  onSuccess={handleTurnstileSuccess}
  onExpire={() => {
    setToken('');
  }}
  theme="light"
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
  onClick={handleSubmitClick}
  disabled={!isFormValid() || !token} // 👈 Disable logic
>
  Contact Us
</Button>
      </Box>
    </Box>
  </Box>
</Container>

  );
};

export default ContactUs;
