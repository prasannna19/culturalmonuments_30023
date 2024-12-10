// src/pages/HistoricalSitesPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box, Skeleton } from '@mui/material';

const historicalSites = [
  {
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    description: 'A stunning marble mausoleum and one of the Seven Wonders of the World, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
    image: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg',
  },
  {
    name: 'Red Fort',
    location: 'Delhi',
    description: 'A historic fort in the city of Delhi, built by Emperor Shah Jahan, representing the peak of Mughal architecture.',
    image: 'https://static.toiimg.com/photo/65666850.cms',
  },
  {
    name: 'Hawa Mahal',
    location: 'Jaipur, Rajasthan',
    description: 'Also known as the "Palace of Winds", this five-story palace was built in 1799 by Maharaja Sawai Pratap Singh.',
    image: 'https://www.thegrandindianroute.com/wp-content/uploads/2024/03/Untitled-design-12.jpg',
  },
  {
    name: 'Qutub Minar',
    location: 'Delhi',
    description: 'A UNESCO World Heritage Site, it is the tallest brick minaret in the world, built by Qutb-ud-din Aibak in 1193.',
    image: 'https://sagahotels.in/wp-content/uploads/2024/02/image_2024_02_23T09_03_14_113Z.png',
  },
  {
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    description: 'An iconic landmark in Mumbai, built during the 20th century in honor of King George V and Queen Mary’s visit to India.',
    image: 'https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Gateway-of-India.jpg.webp?VersionId=BBxisw7aW9Kz83zStkv29pnD8GMbviPB&itok=MEEZTfkO',
  },
  {
    name: 'Victoria Memorial',
    location: 'Kolkata, West Bengal',
    description: 'A grand marble building built in memory of Queen Victoria, now a museum and one of the most iconic landmarks in Kolkata.',
    image: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/334d2224233bdfdd63a5d8ccc98cc0c7_1000x1000.jpg',
  },
  {
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    description: 'A 13th-century temple dedicated to the Sun God, renowned for its architectural magnificence and intricate carvings.',
    image: 'https://www.alonereaders.com/Images/Article/Img_202484_14724_987.png',
  },
  {
    name: 'Mysore Palace',
    location: 'Mysuru, Karnataka',
    description: 'A royal residence and a prime example of Indo-Saracenic architecture, once home to the Wodeyar dynasty.',
    image: 'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg',
  },
  {
    name: 'Fatehpur Sikri',
    location: 'Agra, Uttar Pradesh',
    description: 'A UNESCO World Heritage Site, it was the capital of the Mughal Empire for a short period, featuring a blend of Persian, Indian, and Mughal architecture.',
    image: 'https://thrillingtravel.in/wp-content/uploads/2023/09/tomb-salim-chisti-fatehpur-sikri.jpg',
  },
];

const HistoricalSitesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ padding: 5, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Historical Sites of India
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {historicalSites.map((site, index) => (
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
                    image={site.image}
                    alt={site.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {site.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {site.location}
                    </Typography>
                    <Typography variant="body1" align="justify">
                      {site.description}
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

export default HistoricalSitesPage;
