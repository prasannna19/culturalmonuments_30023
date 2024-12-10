// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaInput: '',
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput === captcha) {
      // Redirect to the home page upon successful login
      navigate('/');
      setError('');
    } else {
      setError('Invalid CAPTCHA. Please try again.');
      setCaptcha(generateCaptcha());
      setFormData({ ...formData, captchaInput: '' });
    }
  };

  const handleCaptchaClick = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          textAlign: 'center',
          my: 4,
          p: 4,
          border: '1px solid #ccc', // Add a border around the form
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
          />

          {/* CAPTCHA */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#f0f0f0',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                userSelect: 'none',
                mr: 2,
              }}
              onClick={handleCaptchaClick}
            >
              {captcha}
            </Typography>
            <TextField
              label="Enter CAPTCHA"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>

          {/* Error Message */}
          {error && (
            <Typography variant="body2" color="error" sx={{ my: 1 }}>
              {error}
            </Typography>
          )}

          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>

          {/* Link to Register page */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link href="/register" color="primary" sx={{ textDecoration: 'none' }}>
              Register here
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
