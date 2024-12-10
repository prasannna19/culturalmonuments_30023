// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Container, Card, CardContent, CardActions, Skeleton } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FestivalIcon from '@mui/icons-material/Festival';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the skeleton loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#e8f5e9', minHeight: '100vh', py: 8,marginTop:'-15px'}}>
      <Container maxWidth="lg">
        
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            p: 4,
            backgroundColor: '#ffffff',
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          {loading ? (
            <>
              <Skeleton variant="text" width="60%" height={70} sx={{ mx: 'auto', mb: 2 }} />
              <Skeleton variant="text" width="80%" height={40} sx={{ mx: 'auto', mb: 4 }} />
              <Skeleton variant="rectangular" width={200} height={50} sx={{ mx: 'auto' }} />
            </>
          ) : (
            <>
              <Typography variant="h2" gutterBottom>
                Discover the Heritage of India
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem', mb: 4 }}>
                Dive into the rich cultural history of India through our interactive platform, exploring sites, festivals, and more.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: 2, textTransform: 'none', px: 4 }}
                href="/virtual-tours"
              >
                Start Your Journey
              </Button>
            </>
          )}
        </Box>

        {/* Feature Section with Larger Cards */}
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', minHeight: 300, boxShadow: 3, p: 2 }}>
                {loading ? (
                  <>
                    <Skeleton variant="circular" width={60} height={60} sx={{ mx: 'auto', my: 3 }} />
                    <Skeleton variant="text" width="60%" height={30} sx={{ mx: 'auto', mb: 1 }} />
                    <Skeleton variant="text" width="80%" height={20} sx={{ mx: 'auto', mb: 4 }} />
                    <Skeleton variant="rectangular" width={120} height={40} sx={{ mx: 'auto' }} />
                  </>
                ) : (
                  <>
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      {index === 0 && <AccountBalanceIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />}
                      {index === 1 && <CameraAltIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />}
                      {index === 2 && <FestivalIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />}
                      <Typography variant="h5" gutterBottom>
                        {index === 0 && 'Historical Sites'}
                        {index === 1 && 'Virtual Tours'}
                        {index === 2 && 'Cultural Festivals'}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {index === 0 && "Explore India's most renowned historical landmarks and discover their stories."}
                        {index === 1 && "Experience India's heritage through immersive virtual tours of iconic sites."}
                        {index === 2 && "Learn about the colorful and vibrant festivals celebrated throughout India."}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                      <Button variant="outlined" color="primary" href={
                        index === 0 ? "/historical-sites" :
                        index === 1 ? "/virtual-tours" :
                        "/festivals"
                      }>
                        {index === 0 && 'Learn More'}
                        {index === 1 && 'Start Tour'}
                        {index === 2 && 'Explore Festivals'}
                      </Button>
                    </CardActions>
                  </>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
