import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  Container,
  Stack,
  Link,
} from '@mui/material';
import { Instagram, Email, Phone, Star } from '@mui/icons-material';

export default function Footer() {
  return (
            <Box
      component="footer"
      sx={{
        backgroundColor: '#1b4332',
        color: '#fff',
        py: 6,
        fontFamily: 'DM Sans, sans-serif',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Parent container to center-align inner Grid */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            ml:-11,
          }}
        >
          <Grid
            container
            spacing={4}
            maxWidth="1000px"
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* Left Column */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Why Choose Clean Commerce?
              </Typography>
              <Stack spacing={1} alignItems="center">
                <Typography variant="body2">✓ Trusted Cleaning Professionals</Typography>
                <Typography variant="body2">✓ Eco-Friendly & Safe Products</Typography>
                <Typography variant="body2">✓ 100% Satisfaction Guarantee</Typography>
                <Typography variant="body2">✓ Transparent & Affordable Pricing</Typography>
              </Stack>
            </Grid>

            {/* Center Column */}
            <Grid item xs={12} md={4} ml={5}>
              <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
                <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit">
                  <IconButton color="inherit"><Instagram /></IconButton>
                </Link>
                <Link href="mailto:contact@CleanCommerce.com" color="inherit">
                  <IconButton color="inherit"><Email /></IconButton>
                </Link>
                <Link href="tel:+61383917026" color="inherit">
                  <IconButton color="inherit"><Phone /></IconButton>
                </Link>
              </Stack>

              <Typography variant="h6" fontWeight={700} mb={1}>
                Excellent Service Every Time
              </Typography>
              <Box mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} sx={{ color: 'gold', fontSize: 26 }} />
                ))}
              </Box>

              <Button
                variant="contained"
                href="/"
                sx={{
                  backgroundColor: '#2D6A4F',
                  borderRadius: 30,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#40916C',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Book Now
              </Button>

              <Box mt={3}>
                <Typography variant="body2">Phone: +61 400 123 456</Typography>
                <Typography variant="body2">123 Clean Street, Melbourne, VIC 3000</Typography>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4} ml={5}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Quick Links
              </Typography>
              <Stack spacing={1} alignItems="center">
                {['Services', 'Pricing', 'About Us', 'Contact Us'].map((text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                    underline="hover"
                    color="inherit"
                    variant="body2"
                  >
                    {text}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar */}
        <Box mt={6} pt={3} borderTop="1px solid rgba(255,255,255,0.2)">
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} Clean Commerce. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
