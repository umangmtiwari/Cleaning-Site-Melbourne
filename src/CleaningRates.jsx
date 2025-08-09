import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './App.css';

export default function CleaningRates() {
  return (
    <>
      {/* Cleaning Rates Table */}
      <Container maxWidth="md" sx={{ mb: 6, mt: 6 }}>
        <Typography variant="h5" color="#2E8B57" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Our Cleaning Rates </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3fdf3ff' }}>
                <TableCell>Service</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Home Cleaning', '2 Hours', '$80'],
                ['Bathroom Cleaning', '1 Hour', '$50'],
                ['Kitchen Deep Clean', '1.5 Hours', '$70']
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': { backgroundColor: '#e0f7fa' }, // Light background on hover
                  }}
                >
                  {row.map((cell, i) => <TableCell key={i}>{cell}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Hourly Rate & Flat Rate Table */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" color="#2E8B57" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Hourly Rate & Flat Rate</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3fdf3ff' }}>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Hourly Rate - One Off', '$70'],
                ['Hourly Rate - Weekly', '$63'],
                ['Hourly Rate - Fortnightly', '$63'],
                ['Hourly Rate - 3 or 4 Weekly', '$66.5'],
                ['Flat Rate - 1 Bedroom House/Apartment', '$169'],
                ['Flat Rate - 2 Bedroom House/Apartment', '$189'],
                ['Flat Rate - 3 Bedroom House', '$219'],
                ['Flat Rate - 4 Bedroom House', '$259'],
                ['Flat Rate - 5 Bedroom House', '$309'],
                ['Flat Rate - 6 Bedroom House', '$339']
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': { backgroundColor: '#e0f7fa' }, // Light background on hover
                  }}
                >
                  {row.map((cell, i) => <TableCell key={i}>{cell}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Additional Services Table */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" color="#2E8B57" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Additional Services</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3fdf3ff' }}>
                <TableCell>Service</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ['Spring Clean', '$60-100'],
                ['End of Lease', 'From $418+'],
                ['Inside Oven', '$75'],
                ['Inside Fridge', '$39'],
                ['Inside Drawers/Cabinets', '$35-119'],
                ['Balcony', '$39'],
                ['Green Supplies', '$5'],
                ['Inside Windows', '$79-135'],
                ['Laundry', '$39/load'],
                ['Bed Changing', '$15/bed'],
                ['Ironing', '$50/30 mins'],
                ['Wall Cleaning', '$29 per wall'],
                ['Steam Cleaning', '$55/bedroom'],
                ['Dish Washing', '$39'],
                ['Wet Wiping Blinds', '$29/blind']
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': { backgroundColor: '#e0f7fa' }, // Light background on hover
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
        <Typography variant="h5" color="#2E8B57" gutterBottom sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Service Checklist</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3fdf3ff' }}>
                <TableCell>Service</TableCell>
                <TableCell>Flat Rate</TableCell>
                <TableCell>Spring Clean</TableCell>
                <TableCell>End of Lease</TableCell>
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
                    '&:hover': { backgroundColor: '#e0f7fa' }, // Light background on hover
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
