// src/pages/MonumentsPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box, Skeleton } from '@mui/material';

const monuments = [
  {
    name: 'Statue of Unity',
    location: 'Kevadia, Gujarat',
    description: 'The world’s tallest statue, dedicated to Sardar Vallabhbhai Patel, standing at 182 meters.',
    image: 'https://visitsou.com/wp-content/uploads/15-The-Statue-of-Unity-A-Tribute-to-Unity-and-Heritage.jpg',
  },
  {
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    description: 'An iconic landmark in Mumbai, built during the 20th century in honor of King George V and Queen Mary’s visit to India.',
    image: 'https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Gateway-of-India.jpg.webp?VersionId=BBxisw7aW9Kz83zStkv29pnD8GMbviPB&itok=MEEZTfkO',
  },
  {
    name: 'India Gate',
    location: 'Delhi',
    description: 'A war memorial located in the heart of Delhi, honoring the soldiers who died during World War I.',
    image: 'https://media.istockphoto.com/id/1424840114/photo/most-visited-india-gate-at-rajpath-or-kartavya-path-of-renovated-of-central-vista-avenue.jpg?s=612x612&w=0&k=20&c=kQxq803MIb6qJyaziwKkqp3MwAohMEvCMYgkR4aQ9_w=',
  },
  {
    name: 'Charminar',
    location: 'Hyderabad, Telangana',
    description: 'A historical mosque with four grand arches, built in 1591, a symbol of Hyderabad’s rich heritage.',
    image: 'https://explorehyderabad.in/wp-content/uploads/2024/06/Charminar_Hyderabad.jpg',
  },
  {
    name: 'Lotus Temple',
    location: 'Delhi',
    description: 'A Baháʼí House of Worship, known for its lotus-shaped architecture, open to all religions.',
    image: 'https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/18/lotus-temple-0-1679466537.webp',
  },
  {
    name: 'Sanchi Stupa',
    location: 'Sanchi, Madhya Pradesh',
    description: 'An ancient Buddhist complex, famous for its well-preserved stupas, monasteries, and temples.',
    image: 'https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/2f9caa39-e69b-4c8a-bfc1-fce13ddcca9c-greatstupa-gallery-02-michaelturtle.jpg?w=1000&h=500&fit=crop&q=75',
  },
  {
    name: 'Jantar Mantar',
    location: 'Jaipur, Rajasthan',
    description: 'An astronomical observatory built by Maharaja Jai Singh II in the 18th century, featuring remarkable instruments.',
    image: 'https://live.staticflickr.com/5119/5808919229_621f16bd8a_b.jpg',
  },
  {
    name: 'Mysore Palace',
    location: 'Mysuru, Karnataka',
    description: 'A royal residence and a prime example of Indo-Saracenic architecture, once home to the Wodeyar dynasty.',
    image: 'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg',
  },
];

const MonumentsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a delay for loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ padding: 5, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Famous Monuments of India
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {monuments.map((monument, index) => (
          <Grid item xs={12} sm={6} md={3.5} key={index}>
            <Card 
              sx={{
                maxWidth: 350,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <CardContent>
                    <Skeleton variant="text" width="60%" height={30} sx={{ margin: '0 auto' }} />
                    <Skeleton variant="text" width="40%" sx={{ margin: '0 auto', mt: 1 }} />
                    <Skeleton variant="text" width="100%" sx={{ mt: 2 }} />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                  </CardContent>
                </>
              ) : (
                <>
                  <CardMedia
                    component="img"
                    height="200"
                    image={monument.image}
                    alt={monument.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {monument.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {monument.location}
                    </Typography>
                    <Typography variant="body1" align="justify">
                      {monument.description}
                    </Typography>
                  </CardContent>
                </>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MonumentsPage;
