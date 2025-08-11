import React from 'react';
import { Divider, Box, Container, Grid, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './App.css';
import DiscountSection from './DiscountSection';
export default function CleaningRates() {
  return (
    <>
<DiscountSection />
          <Box sx={{ backgroundColor: '#0099CC', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="white"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          Super Cleaning Rate
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { size: '1 Bedroom', price: 169 },
            { size: '2 Bedrooms', price: 189 },
            { size: '3 Bedrooms', price: 219 },
            { size: '4 Bedrooms', price: 259 },
            { size: '5 Bedrooms', price: 309 },
            { size: '6 Bedrooms', price: 339 }
          ].map((item, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Box
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                <Typography variant="h6" color="white">
                  {item.size}
                </Typography>
                <Typography variant="h5" color="white">
                  ${item.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Line Separator */}
        <Divider
          sx={{
            borderColor: 'white',
            marginY: 3, // Space above and below the line
            width: '50%', // Adjust the width as needed
            marginLeft: 'auto', // Center align the line horizontally
            marginRight: 'auto', // Center align the line horizontally
          }}
        />

          <Typography
          variant="h4"
          align="center"
          color="white"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          Spring Clean Rate
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { size: '1 Bedroom', price: 189},
            { size: '2 Bedrooms', price: 219},
            { size: '3 Bedrooms', price: 259},
            { size: '4 Bedrooms', price: 309},
            { size: '5 Bedrooms', price: 339},
            { size: '6 Bedrooms', price: 369}
          ].map((item, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Box
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                <Typography variant="h6" color="white">
                  {item.size}
                </Typography>
                <Typography variant="h5" color="white">
                  ${item.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Line Separator */}
        <Divider
          sx={{
            borderColor: 'white',
            marginY: 3, // Space above and below the line
            width: '50%', // Adjust the width as needed
            marginLeft: 'auto', // Center align the line horizontally
            marginRight: 'auto', // Center align the line horizontally
          }}
        />

          <Typography
          variant="h4"
          align="center"
          color="white"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          End of Lease Rate
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { size: '1 Bedroom', price: 219 },
            { size: '2 Bedrooms', price: 259 },
            { size: '3 Bedrooms', price: 309 },
            { size: '4 Bedrooms', price: 339 },
            { size: '5 Bedrooms', price: 369 },
            { size: '6 Bedrooms', price: 399 }
          ].map((item, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Box
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                <Typography variant="h6" color="white">
                  {item.size}
                </Typography>
                <Typography variant="h5" color="white">
                  ${item.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Line Separator */}
        <Divider
          sx={{
            borderColor: 'white',
            marginY: 3, // Space above and below the line
            width: '50%', // Adjust the width as needed
            marginLeft: 'auto', // Center align the line horizontally
            marginRight: 'auto', // Center align the line horizontally
          }}
        />

<Typography
          variant="h5"
          align="center"
          color="white"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          Here's what's included
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              justifyContent:'center',
            }}
          >
We offer a comprehensive cleaning service tailored to your home. Pricing is based on the number of bedrooms, bathrooms, and studies, and includes a full general clean following our detailed checklists. Each quote covers up to two bathrooms per home.

If your home hasn’t had a deep clean in over a month, we recommend selecting our Spring Clean option to ensure a more thorough service.

Additional services and pricing are listed below the checklist of what’s included in our full house clean.
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              marginTop: 2,
              marginBottom: 1,
            }}
          >
            All Price are GST Inclusive
          </Typography>
        </Box>
      </Container>
    </Box>

      {/* Additional Services Table */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" color="#006699" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: 4 }}>Additional Services</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1ca0af4d' }}>
                <TableCell>Service</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Bathroom Cleaning', '$50/Bathroom'],
                ['Inside Oven', '$75'],
                ['Inside Fridge', '$39'],
                ['Inside Drawers/Cabinets', '$35-119'],
                ['Balcony', '$39'],
                ['Inside Windows', '$79-135'],
                ['Laundry', '$39/load'],
                ['Bed Changing', '$15/bed'],
                ['Ironing', '$50/30 mins'],
                ['Wall Cleaning', '$29 per wall (T&C apply)'],
                ['Steam Cleaning', '$55/bedroom'],
                ['Dish Washing', '$39'],
                ['Wet Wiping Blinds', '$29/blind']
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': { backgroundColor: '#1ca0af2a' }, // Light background on hover
                  }}
                >
                  {row.map((cell, i) => <TableCell key={i}>{cell}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      
      {/* Service Checklist Table */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" color="#006699" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Service Checklist</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1ca0af4d' }}>
                <TableCell>Service</TableCell>
                <TableCell>Super Cleaning Rate</TableCell>
                <TableCell>Spring Clean Rate</TableCell>
                <TableCell>End of Lease (Empty)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Light Tidy Up', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Extensive Tidy Up (Max 30 mins)', <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Cobweb Removal', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Empty Bins', <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Dust Skirting Boards/Window Sills/Doors', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Wipe Skirting Boards/Window Sills/Doors', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Dust/Clean Doors', <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Clean Accessible Light Switches/Power Points', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Dust All Reachable Surfaces', <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Dust/Clean Mirrors', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Air Freshen/Deodorise (optional)', <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Vacuum/Clean Soft Furnishing', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Vacuum Accessible Areas Under Beds/Couches/Furniture', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Walls', <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Clean Ceilings', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Lightly Dust Blinds', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Vacuum/Wipe Visible Window Tracks/Sills', <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />],
                ['Inside All Drawers/Cabinets', <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />, <CancelIcon sx={{ color: '#E53935' }} />],
                ['Garages', <CancelIcon sx={{ color: '#E53935' }} />, <CancelIcon sx={{ color: '#E53935' }} />, <CheckCircleIcon sx={{ color: '#2E8B57' }} />]
                // You can continue adding more rows as needed
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': { backgroundColor: '#1ca0af2a' }, // Light background on hover
                  }}
                >
                  {row.map((cell, i) => <TableCell key={i}>{cell}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
