import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  Container,
  Stack,
  Link
} from '@mui/material';
import { Facebook, Instagram, Email, Phone, Star } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2049A3',
        color: '#fff',
        py: { xs: 4, sm: 6 },  // Less padding on mobile
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
            ml: { xs: 0, sm: -11 },  // Adjust for mobile
          }}
        >
          <Grid
            container
            spacing={4}
            maxWidth="1000px"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },  // Stack on small screens
              textAlign: { xs: 'center', sm: 'left' },  // Center text on mobile
            }}
          >
            {/* Left Column */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Why Choose Clean Commerce?
              </Typography>
              <Stack spacing={1} alignItems="center" sx={{ textAlign: 'left' }}>
                <Typography variant="body2">✓ Trusted Cleaning Professionals</Typography>
                <Typography variant="body2">✓ Eco-Friendly & Safe Products</Typography>
                <Typography variant="body2">✓ 100% Satisfaction Guarantee</Typography>
                <Typography variant="body2">✓ Transparent & Affordable Pricing</Typography>
              </Stack>
            </Grid>

            {/* Center Column */}
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center', pl:2 }}>
              <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
                <Link href="https://www.instagram.com/clean_commerce/" target="_blank" rel="noopener" color="inherit">
                  <IconButton color="inherit"><Instagram /></IconButton>
                </Link>
                <Link href="https://www.facebook.com/people/Clean-Commerce/61579098015865/" target="_blank" rel="noopener" color="inherit">
                  <IconButton color="inherit"><Facebook /></IconButton>
                </Link>

                <Link href="mailto:services@cleancommerce.com.au" color="inherit">
                  <IconButton color="inherit"><Email /></IconButton>
                </Link>
                <Link href="tel:+61403600961" color="inherit">
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
                href="/contact-us"
                sx={{
                  backgroundColor: '#006699',
                  borderRadius: 30,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#006699',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Get a Quote
              </Button>

              <Box mt={3}>
                <Typography variant="body2">Phone: +61403600961</Typography>
                <Typography variant="body2">
                  <LocationOnOutlinedIcon sx={{ fontSize: 12 }} />
                  Suite 5, Building C4, 2 Main Street <br></br>Point Cook VIC 3030
                </Typography>
                <Typography variant="body2">ABN: 95279464367</Typography>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, pl:10 }}>
                Quick Links
              </Typography>
              <Stack spacing={1} alignItems="center" sx={{ textAlign: 'left', pl:10 }}>
                {['Pricing', 'About Us', 'Contact Us'].map((text) => (
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
