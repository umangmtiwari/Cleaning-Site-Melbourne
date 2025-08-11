import React from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './App.css';

export default function WhyChooseUs() {
  return (
    <>
      {/* Why Choose Us Section */}
      <Container maxWidth="md" sx={{my: 6, textAlign: 'center' }}>
        <Typography color="black" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
  Why Choose Clean Commerce Services?
</Typography>
        <Typography color="textSecondary">
          We deliver top-tier home and bathroom cleaning with eco-friendly products, trained professionals,
          and flexible scheduling. Trust us for reliable, efficient, and spotless results every time.
        </Typography>
      </Container>

{/* Expertise and Experience Section */}
<Container maxWidth="lg" sx={{ my: 6 }}>
  <Grid container spacing={4} justifyContent="center">
    {/* Expertise and Experience Card */}
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          height: '300px',
          width: '450px',  // Keep original width for large screens
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
          '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up the card on hover
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow for emphasis
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/clean1.jpg"
          alt="Expertise and Experience"
          sx={{ objectFit: 'cover', height: '140px' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>Expertise and Experience</Typography>
          <Typography color="textSecondary">
            Our skilled team of cleaners in Melbourne has extensive experience in domestic, commercial, and NDIS cleaning, ensuring top-quality service tailored to your needs.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    {/* Eco-Friendly Solutions Card */}
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          height: '300px',
          width: '450px',  // Keep original width for large screens
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
          '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up the card on hover
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow for emphasis
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/clean2.jpg"
          alt="Eco-Friendly Solutions"
          sx={{ objectFit: 'cover', height: '140px' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>Eco-Friendly Solutions</Typography>
          <Typography color="textSecondary">
            Being a trusted cleaning agency, we use environmentally friendly products and practices, providing a safe and healthy environment for you and your loved ones.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    {/* Reliable and Trustworthy Card */}
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          height: '300px',
          width: '450px',  // Keep original width for large screens
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
          '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up the card on hover
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow for emphasis
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/clean3.jpg"
          alt="Reliable and Trustworthy"
          sx={{ objectFit: 'cover', height: '140px' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>Reliable and Trustworthy</Typography>
          <Typography color="textSecondary">
            We pride ourselves on our reliability and professionalism. You can count on us to be punctual, thorough, and respectful of your space.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    {/* Attention to Detail Card */}
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          height: '300px',
          width: '450px',  // Keep original width for large screens
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
          '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up the card on hover
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Add shadow for emphasis
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/clean4.jpg"
          alt="Attention to Detail"
          sx={{ objectFit: 'cover', height: '140px' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>Attention to Detail</Typography>
          <Typography color="textSecondary">
            We are committed to providing meticulous Melbourne-based cleaning service. Our attention to detail ensures a spotless and immaculate finish every time.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Container>

<>
  {/* New Booking Section */}
<Card
  sx={{
    fontFamily: 'DM Sans, sans-serif',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },  // Stack on small screens, row on medium and up
    bgcolor: '#2049A3',
    color: 'white',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '8px',
    marginBottom: 5,
    padding: 2,  // Add padding for smaller screens
  }}
>

  {/* Left Half: Text and Buttons */}
  <CardContent
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: { xs: 2, md: 4 },  // Less padding on smaller screens
      paddingRight: { xs: 2, md: 4 },
      paddingBottom: { xs: 4, md: 0 },  // Add more bottom padding for small screens
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },  // Adjust font size based on screen size
      }}
    >
      Not your average cleaning company
    </Typography>

    <Typography
      variant="h6"
      paragraph
      sx={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },  // Adjust font size
      }}
    >
      At Clean Commerce, cleaning isn’t just a job,it’s what we were made to do. We take genuine pride in transforming messy homes into sparkling spaces, and we’re not afraid to roll up our sleeves to make it happen.

      
We’re a Melbourne based team with a passion for excellence and a drive to innovate. In fact, we were the first local cleaning company to introduce a high-tech online booking platform, making it easier than ever for our clients to schedule a clean with just a few clicks.
That’s because we believe great service starts with convenience.

Whether it’s a one-off deep clean or regular upkeep, we bring energy, care, and attention to detail to every home we visit. We love what we do—and it shows in the results.

    </Typography>

    <Typography
      paragraph
      sx={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
      }}
    >
      In fact, we love what we do so much we revolutionised the way you book your house cleaning in Melbourne. We were the first local company to introduce a high-tech online booking platform, so we know what we’re doing and we’re always looking to improve.
    </Typography>

    {/* Modern Buttons */}
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #006699, #006699)',
            color: 'white',
            borderRadius: '30px',
            fontFamily: 'DM Sans, sans-serif',
            padding: { xs: '10px 20px', sm: '12px 24px' },  // Smaller padding on small screens
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem' },  // Adjust font size
            '&:hover': {
              background: 'linear-gradient(45deg, #006699, #006699)',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
          href="/pricing"
        >
          See our pricing
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #006699, #006699)',
            color: 'white',
            borderRadius: '30px',
            fontFamily: 'DM Sans, sans-serif',
            padding: { xs: '10px 20px', sm: '12px 24px' },
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            '&:hover': {
              background: 'linear-gradient(45deg, #006699, #006699)',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
          href="/contact-us"
        >
          Get a Quote
        </Button>
      </Grid>
    </Grid>
  </CardContent>

  {/* Right Half: Image */}
  <CardMedia
    component="img"
    sx={{
      width: { xs: '100%', md: '50%' },  // Full width on small screens, half on medium and up
      objectFit: 'contain',
      maxWidth: '350px',
      paddingRight: { xs: 0, md: 4 },  // Padding for medium and up
    }}
    image="/booking.png"
    alt="Booking"
  />
</Card>
</>

    </>
  );
}
