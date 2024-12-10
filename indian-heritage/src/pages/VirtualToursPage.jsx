import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, CardMedia, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const places = [
  { 
    name: 'Jaipur', 
    place: 'Rajasthan', 
    description: 'Known as the "Pink City," famous for its vibrant architecture, including Amer Fort, Hawa Mahal, and City Palace.',
    bestTime: 'October to March',
    mainImage: 'https://s3.india.com/wp-content/uploads/2024/08/Explore-The-Top-Spiritual-Getaways-Near-Jaipur-For-Cultural-Divine-Experience.jpg',
  images: [
    'https://www.trawell.in/admin/images/upload/307070180Udaipur_Main.jpg',
    'https://indiator.com/tourist-places/wp-content/uploads/2016/12/rajasthan3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCvrolG6IFolWbOpi0vROXMXlvcCqKjr16w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCvrolG6IFolWbOpi0vROXMXlvcCqKjr16w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCvrolG6IFolWbOpi0vROXMXlvcCqKjr16w&s'
  ]
  },
  { 
    name: 'Hampi', 
    place: 'Karnataka', 
    description: 'A UNESCO World Heritage site with ancient ruins from the Vijayanagar Empire, surrounded by boulders and scenic landscapes.',
    bestTime: 'October to March',
    mainImage: 'https://www.holidify.com/images/bgImages/HAMPI.jpg',
    images: [
      'https://example.com/hampi1.jpg',
      'https://example.com/hampi2.jpg',
      'https://example.com/hampi3.jpg',
      'https://example.com/hampi4.jpg',
      'https://example.com/hampi5.jpg'
    ]
  },
  { 
    name: 'Gateway of India', 
    place: 'Mumbai, Maharashtra', 
    description: 'An iconic archway built in honor of King George V’s visit to India, overlooking the Arabian Sea.',
    bestTime: 'October to March',
    mainImage: 'https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg',
    images: [
      'https://example.com/gateway1.jpg',
      'https://example.com/gateway2.jpg',
      'https://example.com/gateway3.jpg',
      'https://example.com/gateway4.jpg',
      'https://example.com/gateway5.jpg'
    ]
  },
  { 
    name: 'Fatehpur Sikri', 
    place: 'Uttar Pradesh', 
    description: 'A UNESCO World Heritage site featuring the remains of the Mughal capital with stunning architecture and historical significance.',
    bestTime: 'October to March',
    mainImage: 'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Fatehphur-Sikri%20%20%20andbeyond--36708e.jpg',
    images: [
      'https://example.com/fatehpur1.jpg',
      'https://example.com/fatehpur2.jpg',
      'https://example.com/fatehpur3.jpg',
      'https://example.com/fatehpur4.jpg',
      'https://example.com/fatehpur5.jpg'
    ]
  },
  { 
    name: 'Khajuraho', 
    place: 'Madhya Pradesh', 
    description: 'Famous for its intricately carved temples and erotic sculptures, recognized as a UNESCO World Heritage site.',
    bestTime: 'October to March',
    mainImage: 'https://indiatravel.com/wp-content/uploads/2022/03/khajuraho-slider-imggg-3.jpg',
    images: [
      'https://example.com/khajuraho1.jpg',
      'https://example.com/khajuraho2.jpg',
      'https://example.com/khajuraho3.jpg',
      'https://example.com/khajuraho4.jpg',
      'https://example.com/khajuraho5.jpg'
    ]
  },
  { 
    name: 'Backwaters of Kerala', 
    place: 'Alleppey, Kumarakom', 
    description: 'Serene waterways surrounded by lush green landscapes, popular for houseboats and tranquil boat rides.',
    bestTime: 'November to February',
    mainImage: 'https://example.com/kerala1.jpg',
    images: [
      'https://example.com/kerala1.jpg',
      'https://example.com/kerala2.jpg',
      'https://example.com/kerala3.jpg',
      'https://example.com/kerala4.jpg',
      'https://example.com/kerala5.jpg'
    ]
  },
  { 
    name: 'Munnar', 
    place: 'Kerala', 
    description: 'A hill station renowned for its lush tea plantations, scenic valleys, and pleasant weather.',
    bestTime: 'September to May',
    mainImage: 'https://example.com/munnar1.jpg',
    images: [
      'https://example.com/munnar1.jpg',
      'https://example.com/munnar2.jpg',
      'https://example.com/munnar3.jpg',
      'https://example.com/munnar4.jpg',
      'https://example.com/munnar5.jpg'
    ]
  },
  { 
    name: 'Coorg', 
    place: 'Karnataka', 
    description: 'Known for its coffee plantations, picturesque hills, and the famous Abbey Falls.',
    bestTime: 'October to March',
    mainImage: 'https://example.com/coorg1.jpg',
    images: [
      'https://example.com/coorg1.jpg',
      'https://example.com/coorg2.jpg',
      'https://example.com/coorg3.jpg',
      'https://example.com/coorg4.jpg',
      'https://example.com/coorg5.jpg'
    ]
  },
  { 
    name: 'Manali', 
    place: 'Himachal Pradesh', 
    description: 'A popular hill station with snow-capped mountains, adventure sports, and the famous Solang Valley.',
    bestTime: 'November to February',
    mainImage: 'https://example.com/manali1.jpg',
    images: [
      'https://example.com/manali1.jpg',
      'https://example.com/manali2.jpg',
      'https://example.com/manali3.jpg',
      'https://example.com/manali4.jpg',
      'https://example.com/manali5.jpg'
    ]
  },
  { 
    name: 'Leh-Ladakh', 
    place: 'Jammu & Kashmir', 
    description: 'A high-altitude desert known for its rugged landscapes, Buddhist monasteries, and trekking routes.',
    bestTime: 'June to September',
    mainImage: 'https://example.com/leh1.jpg',
    images: [
      'https://example.com/leh1.jpg',
      'https://example.com/leh2.jpg',
      'https://example.com/leh3.jpg',
      'https://example.com/leh4.jpg',
      'https://example.com/leh5.jpg'
    ]
  },
  { 
    name: 'Nainital', 
    place: 'Uttarakhand', 
    description: 'A charming hill station centered around Naini Lake, surrounded by scenic hills and forests.',
    bestTime: 'March to June, September to December',
    mainImage: 'https://example.com/nainital1.jpg',
    images: [
      'https://example.com/nainital1.jpg',
      'https://example.com/nainital2.jpg',
      'https://example.com/nainital3.jpg',
      'https://example.com/nainital4.jpg',
      'https://example.com/nainital5.jpg'
    ]
  },
  { 
    name: 'Darjeeling', 
    place: 'West Bengal', 
    description: 'Famous for its tea plantations, toy train ride, and stunning views of Mount Kanchenjunga.',
    bestTime: 'March to May, September to December',
    mainImage: 'https://example.com/darjeeling1.jpg',
    images: [
      'https://example.com/darjeeling1.jpg',
      'https://example.com/darjeeling2.jpg',
      'https://example.com/darjeeling3.jpg',
      'https://example.com/darjeeling4.jpg',
      'https://example.com/darjeeling5.jpg'
    ]
  },
 
];


const VirtualToursPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewMore = (placeName) => {
    navigate(`/place/${placeName}`);
  };

  return (
    <Box sx={{ padding: 5, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Virtual Tours of Famous Indian Heritage Sites
      </Typography>
      
      <Grid container spacing={3.5} justifyContent="center">
        {loading
          ? Array.from(new Array(8)).map((_, index) => (
              <Grid item xs={12} sm={6} md={3.5} key={index}>
                <Card sx={{ maxWidth: 350, height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="90%" />
                    <Skeleton variant="text" width="70%" sx={{ mt: 2 }} />
                    <Skeleton variant="rectangular" width="50%" height={36} sx={{ mt: 2 }} />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : places.map((place, index) => (
              <Grid item xs={12} sm={6} md={3.5} key={index}>
                <Card sx={{ maxWidth: 350, height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={place.mainImage}
                    alt={`Main image of ${place.name}`}
                  />
                  <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography gutterBottom variant="h5" component="div" align="center">
                        {place.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {place.place}
                      </Typography>
                      <Typography variant="body1" color="text.primary" paragraph sx={{ mt: 2 }}>
                        {place.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Best time to visit: {place.bestTime}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handleViewMore(place.name)}
                      >
                        View More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default VirtualToursPage;
