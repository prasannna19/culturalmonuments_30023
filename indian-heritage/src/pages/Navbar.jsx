// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0D47A1',height:'60px' }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/f5bf0052552001.Y3JvcCw1NjMsNDQwLDQxNCwyMjg.jpg" // Replace with your logo path
            alt="Logo"
            style={{ height: 50, marginRight: 10,borderRadius:'25px' }}
          />
          <Typography variant="h6" component="div">
            Indian Heritage
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <Typography
            variant="subtitle1"
            sx={{
              whiteSpace: 'wrap',
              display: 'inline-block',
              animation: 'marquee 15s linear infinite',
              fontSize:'25px',
              fontFamily:'cursive',
              color:'InactiveCaption',
              '@keyframes marquee': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            }}
          >
            Discover the timeless beauty and vibrant culture of India, one click at a time.
          </Typography>
        </Box>

        {/* User Icon with Dropdown */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Button href="/login" color="inherit">
              Login
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button href="/register" color="inherit">
              Register
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
