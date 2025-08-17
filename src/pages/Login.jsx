// src/pages/Login.jsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleLogin = () => {
  const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/admin');
  } else {
    setError('Invalid email or password.');
  }
};

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 8 }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb:4 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
