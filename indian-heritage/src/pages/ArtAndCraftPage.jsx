// src/pages/ArtAndCraftPage.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Skeleton } from '@mui/material';

// Art and Craft data with image URLs
const artAndCrafts = [
  { 
    name: 'Madhubani Painting', 
    origin: 'Bihar', 
    description: 'A folk art form characterized by intricate patterns and vibrant colors, often depicting mythological themes, nature, and religious motifs.',
    image: 'https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/04/Madhubani-painting-Kirty-Manjari-14.jpeg'
  },
  { 
    name: 'Warli Art', 
    origin: 'Maharashtra', 
    description: 'A tribal art form known for its geometric patterns and depictions of daily life, nature, and animals.',
    image: 'https://m.media-amazon.com/images/I/91n0ZcjPHyL._AC_UF1000,1000_QL80_.jpg'
  },
  { 
    name: 'Pattachitra Painting', 
    origin: 'Odisha and West Bengal', 
    description: 'A traditional style of painting on cloth or dried palm leaves, famous for its intricate detailing and mythological stories.',
    image: 'https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2023/04/Pattachitra-painting-Somnath-Nayak-09.jpg'
  },
  { 
    name: 'Kalamkari Art', 
    origin: 'Andhra Pradesh and Telangana', 
    description: 'A hand-painting technique using natural dyes, depicting religious themes and epics like Ramayana and Mahabharata.',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcXw9wKhRecU1xRSTFq30ISCSbjj9nFu07jzBiBFPSD4XNXK7p-CP30i8Bi7YKv5lHI9ZQ5UlJQCpxwjhSpycc7lwGTKiOVRmJxukv9n4&usqp=CAE'
  },
  { 
    name: 'Tanjore Painting', 
    origin: 'Tamil Nadu', 
    description: 'Known for its surface richness and compact composition, often featuring gods and goddesses in vibrant colors, with added embellishments like gold foil.',
    image: 'https://img1.wsimg.com/isteam/ip/bd95d888-15fd-4e22-9514-3b3e7856faa7/ols/3x2%20frame-0002.jpg/:/rs=w:1200,h:1200'
  },
  { 
    name: 'Miniature Paintings', 
    origin: 'Rajasthan, Mughal Empire, Pahari Region', 
    description: 'Detailed and vibrant paintings, often depicting historical events, royal portraits, and court scenes.',
    image: 'https://www.artattheheartcic.org/wp-content/uploads/2021/08/Minassian-Collection-1024x1024.jpg'
  },
  { 
    name: 'Channapatna Toys', 
    origin: 'Karnataka', 
    description: 'Traditional wooden toys made using a special craft technique, often brightly colored and made of locally sourced wood.',
    image: 'https://static.toiimg.com/photo/90932880.cms'
  },
  { 
    name: 'Pashmina Shawls', 
    origin: 'Kashmir', 
    description: 'Luxurious woolen shawls made from the fine wool of the Pashmina goat, known for their softness and warmth.',
    image: 'https://www.pashwrap.com/cdn/shop/articles/homegrown_2022-11_a5417e62-c817-4483-b7ff-cbc397c8f3b1_Untitled_design__98.webp?v=1695367066'
  },
  { 
    name: 'Banarasi Silk Weaving', 
    origin: 'Varanasi, Uttar Pradesh', 
    description: 'Known for its opulent designs, intricate weaving, and luxurious feel, often used in wedding sarees and ceremonial attire.',
    image: 'https://i.ytimg.com/vi/U6GODMgahG8/maxresdefault.jpg'
  },
  
  { 
    name: 'Stone Carving', 
    origin: 'Various regions, particularly Odisha, Rajasthan, and Tamil Nadu', 
    description: 'An ancient craft involving the sculpting of stone to create intricate architectural designs and statues.',
    image: 'https://img.freepik.com/premium-photo/wooden-carving-two-statues-with-name-god-it_1077535-14735.jpg'
  },
  
  
  { 
    name: 'Lacquerware', 
    origin: 'Rajasthan, Uttar Pradesh', 
    description: 'Crafts made from the sap of the lac tree, often used to make bangles, decorative pieces, and household items.',
    image: 'https://www.kikkoman.com/en/culture/foodforum/japanese-style/img/31-3_im01.jpg'
  },
  { 
    name: 'Terracotta Art', 
    origin: 'West Bengal, Gujarat, Tamil Nadu', 
    description: 'Clay sculptures and pottery used in architecture, religious items, and decorative figurines.',
    image: 'https://t3.ftcdn.net/jpg/05/66/45/68/360_F_566456856_V9EI5Kq59EMAklBeRQvOcyldv6oMQNIZ.jpg'
  },
  { 
    name: 'Mosaic Work', 
    origin: 'Rajasthan', 
    description: 'Involves creating patterns by arranging small pieces of glass, stones, or tiles, often seen in palaces and temples.',
    image: 'https://bigbangmosaics.com/uploads/3/4/5/5/34552822/human-nature-sm_orig.jpeg'
  },
 
  
  { 
    name: 'Jute Craft', 
    origin: 'West Bengal and Odisha', 
    description: 'Craft made from jute fibers, including bags, carpets, and decorative items, popular for their eco-friendly nature.',
    image: 'https://i.ytimg.com/vi/GrXMIGGUKxE/maxresdefault.jpg'
  },
];

const ArtAndCraftPage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after fetching data
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Indian Art & Craft
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Discover the traditional art forms and crafts that define India’s cultural identity.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {(loading ? Array.from(new Array(artAndCrafts.length)) : artAndCrafts).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3.5} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              {loading ? (
                <Skeleton variant="rectangular" height={350} />
              ) : (
                <CardMedia
                  component="img"
                  height="350"
                  image={item.image}
                  alt={item.name}
                />
              )}
              <CardContent>
                {loading ? (
                  <>
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                    <Skeleton width="90%" />
                  </>
                ) : (
                  <>
                    <Typography variant="h6" component="div" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Origin: {item.origin}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ArtAndCraftPage;
