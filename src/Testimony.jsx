import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Avatar, Box, Rating, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; // Import arrow icons

// Updated testimonialsData with profile pictures
const testimonialsData = [
  { 
    name: 'Emma', 
    rating: 5, 
    review: "MelbourneClean transformed my home! So professional and efficient. Highly recommend.", 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg' // Example profile pic URL
  },
  { 
    name: 'Raj', 
    rating: 4, 
    review: "The service was great, with fantastic attention to detail. Very happy with the results.", 
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg' // Example profile pic URL
  },
  { 
    name: 'Sophie', 
    rating: 5, 
    review: "Absolutely amazing! My house looks spotless. The team was friendly and fast!", 
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg' // Example profile pic URL
  },
  { 
    name: 'Liam', 
    rating: 4, 
    review: "Great service, but I think they could improve the scheduling process a bit. Still a great experience!", 
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg' // Example profile pic URL
  },
  { 
    name: 'Olivia', 
    rating: 5, 
    review: "Best cleaning service ever! On time, professional, and my house looks incredible.", 
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg' // Example profile pic URL
  },
  { 
    name: 'Noah', 
    rating: 4, 
    review: "Very good service! A few minor things to improve, but overall, it was an excellent experience.", 
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg' // Example profile pic URL
  },
  { 
    name: 'Ava', 
    rating: 5, 
    review: "Totally impressed with the results. This is a game-changer for home cleaning. Highly recommend.", 
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg' // Example profile pic URL
  },
];

function Testimony() {
  const [currentTestimonial, setCurrentTestimonial] = useState(1); // Start with the second testimonial in the center

  const testimonialsPerView = 1; // We want to display 1 testimonial per navigation click

  const nextTestimonial = () => {
    if (currentTestimonial < testimonialsData.length - 1) { // Ensure we do not go past the last testimonial
      setCurrentTestimonial((prevIndex) => prevIndex + testimonialsPerView);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial((prevIndex) => prevIndex - testimonialsPerView);
    }
  };

  // Calculate the start and end index for the three testimonials to display
  const startIndex = Math.max(0, currentTestimonial - 1);
  const endIndex = Math.min(testimonialsData.length - 1, currentTestimonial + 1);

  const getClassName = (index) => {
    return index === currentTestimonial ? 'center' : 'other';
  };

  return (
<Container maxWidth="md" sx={{ my: 4 }}>
  <Typography variant="h5" textAlign="center" color="#2E8B57" gutterBottom paddingBottom={3}>
    Customer Testimonials
  </Typography>

  <Box display="flex" justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>

    {/* Left Navigation Button */}
    <IconButton
      onClick={prevTestimonial}
      sx={{
        position: 'absolute',
        left: { xs: '10px', md: '-50px' }, // For mobile, move button closer, for large screens, keep it away from cards
        zIndex: 1,
        color: '#2E8B57',
        display: { xs: 'block', md: 'block' }, // Show on all screens
        opacity: { xs: 1, sm: 0.8, md: 1 }, // Slightly transparent on smaller screens for better viewability
      }}
    >
      <ChevronLeft />
    </IconButton>

    {/* Display Testimonials */}
    <Box
      display="flex"
      sx={{
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'center', // Ensure cards are aligned centrally
        paddingLeft: { xs: '40px', sm: '50px', md: '0' }, // Add padding on the left for mobile to avoid the button overlapping
        paddingRight: { xs: '40px', sm: '50px', md: '0' }, // Add padding on the right for mobile
      }}
    >
      {testimonialsData.slice(startIndex, endIndex + 1).map((testimonial, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: '80%', sm: '200px', md: '280px' }, // Adjust width for smaller screens
            margin: { xs: '0 8px', sm: '0 15px' }, // Adjust margins for smaller screens
            boxShadow: 2,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 4,
            },
            ...(getClassName(startIndex + index) === 'center' && {
              border: '2px solid #2E8B57', // Highlight the middle card with color
              transform: 'scale(1.1)', // Make the middle testimonial slightly larger
              boxShadow: '0px 4px 20px rgba(0, 123, 73, 0.3)', // Add a soft shadow for emphasis
            }),
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" mb={1}>
              {/* Profile Picture */}
              <Avatar sx={{ width: 50, height: 50 }} src={testimonial.profilePic} />
              <Typography variant="subtitle2" color="#2E8B57" sx={{ ml: 2 }}>
                - {testimonial.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              fontStyle="italic"
              sx={{
                display: 'block', // Allow text to take full width and not be constrained
                whiteSpace: 'normal', // Ensure the text can wrap properly
                overflow: 'visible', // Make sure it's visible without clipping
                lineHeight: '1.5',
              }}
            >
              "{testimonial.review}"
            </Typography>
            <Box mt={1}>
              <Rating value={testimonial.rating} readOnly sx={{ color: '#2E8B57' }} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>

    {/* Right Navigation Button */}
    <IconButton
      onClick={nextTestimonial}
      sx={{
        position: 'absolute',
        right: { xs: '10px', md: '-50px' }, // Same as left button for mobile positioning
        zIndex: 1,
        color: '#2E8B57',
        display: { xs: 'block', md: 'block' }, // Show on all screens
        opacity: { xs: 1, sm: 0.8, md: 1 }, // Slightly transparent on smaller screens for better viewability
      }}
    >
      <ChevronRight />
    </IconButton>
  </Box>
</Container>

  );
}

export default Testimony;
