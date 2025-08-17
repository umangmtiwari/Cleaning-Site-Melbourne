import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Avatar, Box, Rating, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; // Import arrow icons

// Updated testimonialsData with profile pictures
const testimonialsData = [
  { 
    name: 'Emma', 
    rating: 5, 
    review: "Clean Commerce gave my home a top-notch clean! Super professional and efficient – I couldn’t be happier. Highly recommend to anyone looking for a reliable team.", 
    profilePic: 'https://ui-avatars.com/api/?name=Emma&background=random'
  },
  { 
    name: 'Raj', 
    rating: 4, 
    review: "Really impressed with their attention to detail. The service was spot on, and my place has never looked better. Will definitely book again.", 
    profilePic: 'https://ui-avatars.com/api/?name=Raj&background=random'
  },
  { 
    name: 'Sophie', 
    rating: 5, 
    review: "Absolutely stoked with the clean! The team was friendly, quick, and left my house sparkling. Couldn’t ask for more.", 
    profilePic: 'https://ui-avatars.com/api/?name=Sophie&background=random'
  },
  { 
    name: 'Liam', 
    rating: 4, 
    review: "Great overall service. Scheduling could be a bit smoother, but the cleaners did an excellent job. Would definitely recommend.", 
    profilePic: 'https://ui-avatars.com/api/?name=Liam&background=random'
  },
  { 
    name: 'Olivia', 
    rating: 5, 
    review: "Hands down the best cleaning service I’ve used! On time, professional, and my home looks incredible. Worth every cent.", 
    profilePic: 'https://ui-avatars.com/api/?name=Olivia&background=random'
  },
  { 
    name: 'Noah', 
    rating: 4, 
    review: "Very happy with the service. Just a couple of minor things that could improve, but overall a fantastic clean and friendly team.", 
    profilePic: 'https://ui-avatars.com/api/?name=Noah&background=random'
  },
  { 
    name: 'Ava', 
    rating: 5, 
    review: "Really impressed with how fresh and tidy my place is now. This service is a real game-changer. Highly recommend to Aussies who want a quality clean.", 
    profilePic: 'https://ui-avatars.com/api/?name=Ava&background=random'
  },
  { 
    name: 'Jack', 
    rating: 5, 
    review: "The team at Clean Commerce are legends! Punctual, thorough, and left my home spotless. I’ll be booking regularly for sure.", 
    profilePic: 'https://ui-avatars.com/api/?name=Jack&background=random'
  },
  { 
    name: 'Mia', 
    rating: 5, 
    review: "Fantastic service from start to finish. The cleaners were friendly, respectful, and did a brilliant job. My home feels brand new!", 
    profilePic: 'https://ui-avatars.com/api/?name=Mia&background=random'
  },
];


function Testimony() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // true if screen is small/mobile

  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const testimonialsPerView = 1;

  const nextTestimonial = () => {
    if (currentTestimonial < testimonialsData.length - 1) {
      setCurrentTestimonial((prevIndex) => prevIndex + testimonialsPerView);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial((prevIndex) => prevIndex - testimonialsPerView);
    }
  };

  // On mobile: show only the current testimonial
  // On desktop: show 3 centered testimonials
  const visibleTestimonials = isMobile 
    ? testimonialsData.slice(currentTestimonial, currentTestimonial + 1)
    : testimonialsData.slice(
        Math.max(0, currentTestimonial - 1), 
        Math.min(testimonialsData.length - 1, currentTestimonial + 1) + 1
      );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : 0
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    return index === currentTestimonial ? 'center' : 'other';
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h5" textAlign="center" color="#2049A3" gutterBottom paddingBottom={3}>
        Customer Testimonials
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>

        {/* Left Navigation Button */}
        <IconButton
          onClick={prevTestimonial}
          sx={{
            position: 'absolute',
            left: { xs: '10px', md: '-50px' },
            zIndex: 1,
            color: '#006699',
            opacity: { xs: 1, sm: 0.8, md: 1 },
          }}
        >
          <ChevronLeft />
        </IconButton>

        {/* Testimonials Container */}
        <Box
          display="flex"
          sx={{
            overflow: 'hidden',
            width: '100%',
            justifyContent: 'center',
            paddingX: { xs: '10px', md: '0' }, // smaller padding on mobile
          }}
        >
          {visibleTestimonials.map((testimonial, idx) => {
            // index relative to all testimonials for getClassName
            const absoluteIndex = isMobile ? currentTestimonial : Math.max(0, currentTestimonial - 1) + idx;
            return (
              <Card
                key={absoluteIndex}
                sx={{
                  width: { xs: '90%', sm: '220px', md: '280px' },
                  margin: { xs: '0 5px', sm: '0 15px' },
                  boxShadow: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 4,
                  },
                  ...(getClassName(absoluteIndex) === 'center' && {
                    border: '2px solid #006699',
                    transform: 'scale(1.1)',
                    boxShadow: '0px 4px 20px rgba(1, 158, 255, 0.3)',
                  }),
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar sx={{ width: 40, height: 40 }} src={testimonial.profilePic} />
                    <Typography variant="subtitle2" color="#006699" sx={{ ml: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      - {testimonial.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontStyle="italic"
                    sx={{
                      whiteSpace: 'normal',
                      lineHeight: 1.5,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    "{testimonial.review}"
                  </Typography>
                  <Box mt={1}>
                    <Rating value={testimonial.rating} readOnly sx={{ color: '#FFD700', fontSize: { xs: 18, md: 20 } }} />
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Right Navigation Button */}
        <IconButton
          onClick={nextTestimonial}
          sx={{
            position: 'absolute',
            right: { xs: '10px', md: '-50px' },
            zIndex: 1,
            color: '#2049A3',
            opacity: { xs: 1, sm: 0.8, md: 1 },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Testimony;