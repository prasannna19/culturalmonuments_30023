// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <Box>
      {/* Button to toggle the sidebar */}
      <IconButton onClick={toggleDrawer} color="inherit" sx={{ position: 'relative', top: 16, left: 16, zIndex: 100,marginTop:'-20px' }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer with Fixed Position */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        variant="persistent"
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            position: 'fixed',
            top: 0,
            height: '100vh',
          },
        }}
      >
        <Box role="presentation" sx={{ width: 250, mt: 8 }}>
          <List>
            <ListItem button component={Link} to="/" onClick={handleLinkClick}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/historical-sites" onClick={handleLinkClick}>
              <ListItemText primary="Historical Sites" />
            </ListItem>
            <ListItem button component={Link} to="/monuments" onClick={handleLinkClick}>
              <ListItemText primary="Monuments" />
            </ListItem>
            <ListItem button component={Link} to="/festivals" onClick={handleLinkClick}>
              <ListItemText primary="Festivals" />
            </ListItem>
            <ListItem button component={Link} to="/virtual-tours" onClick={handleLinkClick}>
              <ListItemText primary="Virtual Tours" />
            </ListItem>
            <ListItem button component={Link} to="/art-and-craft" onClick={handleLinkClick}>
              <ListItemText primary="Art & Craft" />
            </ListItem>
            <ListItem button component={Link} to="/cuisine" onClick={handleLinkClick}>
              <ListItemText primary="Cuisine" />
            </ListItem>
            <ListItem button component={Link} to="/dance-and-music" onClick={handleLinkClick}>
              <ListItemText primary="Dance & Music" />
            </ListItem>
            <ListItem button component={Link} to="/cultural-facts" onClick={handleLinkClick}>
              <ListItemText primary="Cultural Facts" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={handleLinkClick}>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
