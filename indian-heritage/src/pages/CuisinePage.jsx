import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Skeleton } from '@mui/material';

// Dish data with placeholders for images (replace with actual image URLs)
const dishes = [
  { 
    name: 'Butter Chicken (Murgh Makhani)', 
    place: 'Delhi', 
    description: 'A creamy, tomato-based curry with tender pieces of chicken, originating from Delhi.',
    image: 'https://littlespicejar.com/wp-content/uploads/2016/02/Finger-Lickin-Butter-Chicken-14-735x1103.jpg' 
  },
  { 
    name: 'Biryani', 
    place: 'Hyderabad, Lucknow, and Kolkata', 
    description: 'Fragrant, spiced rice layered with marinated meat (usually chicken or mutton) and slow-cooked.',
    image: 'https://www.paradiseindianfood.co.nz/media/m4uhmhrl/biryani.jpg' 
  },
  { 
    name: 'Masala Dosa', 
    place: 'South India', 
    description: 'A crispy rice pancake filled with a spiced potato filling, served with chutney and sambar.',
    image: 'https://www.efghfoods.com/wp-content/uploads/2020/11/Blog-2-min.jpg' 
  },
  { 
    name: 'Rogan Josh', 
    place: 'Kashmir', 
    description: 'A rich lamb curry made with yogurt, garlic, and aromatic spices.',
    image: 'https://www.recipetineats.com/tachyon/2020/02/Rogan-Josh_4.jpg' 
  },
  { 
    name: 'Chole Bhature', 
    place: 'North India', 
    description: 'Spicy chickpea curry served with deep-fried, fluffy bread.',
    image: 'https://www.nehascookbook.com/wp-content/uploads/2023/07/Chole-puri-thali-WS.jpg' 
  },
  { 
    name: 'Paneer Butter Masala', 
    place: 'North India', 
    description: 'Soft paneer cubes in a creamy tomato sauce, similar to butter chicken but without the meat.',
    image: 'https://speakingaloud.in/wp-content/uploads/2020/04/Paneer-Butter-Masala-Recipe.jpg' 
  },
  { 
    name: 'Vada Pav', 
    place: 'Mumbai', 
    description: 'Known as the "Indian burger," this street food features a spicy potato filling in a bun.',
    image: 'https://i.ytimg.com/vi/atsGQroxcuc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDa3IjSri8D5c1R8E7z7Zqlbace0A' 
  },
  { 
    name: 'Dhokla', 
    place: 'Gujarat', 
    description: 'A light, spongy snack made from fermented rice and chickpea batter, often steamed.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Dhokla_on_Gujrart.jpg' 
  },
  { 
    name: 'Rajma Chawal', 
    place: 'North India', 
    description: 'Comfort food made of red kidney beans cooked in spices and served over rice.',
    image: 'https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg' 
  },
  { 
    name: 'Pani Puri (Golgappa)', 
    place: 'Across India', 
    description: 'Crispy, hollow puris filled with spiced water, potatoes, and chutneys.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-285IoIJ2Tm9QNpjp6aoG3rg7wkn7dgYMRhb1J5uMbdGyzl7CcVHtcMb6QlzAuLqwCnbiWilo0qQA1o7gpc1nk8aee1X_3KQLkzudXBr-9ciUdP15mM5ENK6Efo7auwbd_i76hUqDgqk/s1600/DSC04004.JPG' 
  },
  { 
    name: 'Hyderabadi Haleem', 
    place: 'Hyderabad', 
    description: 'A slow-cooked stew of meat, lentils, and wheat, enjoyed during Ramadan.',
    image: 'https://i.ytimg.com/vi/2kMZA1W4Sn8/maxresdefault.jpg' 
  },
  { 
    name: 'Samosa', 
    place: 'Across India', 
    description: 'A deep-fried pastry filled with spiced potatoes and peas, served with chutneys.',
    image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenSamosa.webp' 
  },
  { 
    name: 'Mutton Keema', 
    place: 'Across India', 
    description: 'Minced meat cooked with spices, commonly served with pav (bread) or rice.',
    image: 'https://static.toiimg.com/thumb/75532977.cms?imgsize=1897034&width=800&height=800' 
  },
  { 
    name: 'Pongal', 
    place: 'South India', 
    description: 'A dish made from rice and lentils, tempered with ghee, black pepper, and cumin.',
    image: 'https://i.pinimg.com/736x/e9/bd/1d/e9bd1d72950e3aa98445c15c4bcb74e9.jpg' 
  },
  { 
    name: 'Prawn Curry (Goan Style)', 
    place: 'Goa', 
    description: 'A coconut-based prawn curry seasoned with spices, showcasing Goan flavors.',
    image: 'https://s3-eu-west-1.amazonaws.com/s3-gousto-production-media/cms/mood-image/1871---Goan-Prawn-Balchao-Curry-With-Basmati-Rice-1598621491518.jpg' 
  },
  { 
    name: 'Palak Paneer', 
    place: 'Across India', 
    description: 'Spinach and paneer cooked in a spiced, creamy sauce.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvHbKulqRrkOPblTsy4KmB9DgbDiqXskwOg&s' 
  },
];

const CuisinePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time to simulate the loading delay
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Indian Cuisine
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Explore the rich and diverse flavors of Indian cuisine from different regions.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {loading ? (
          // Skeleton Loader for each dish card
          Array.from(new Array(12)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3.5} key={index}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Skeleton variant="rectangular" height={240} />
                <CardContent>
                  <Skeleton width="80%" height={20} />
                  <Skeleton width="60%" height={15} />
                  <Skeleton width="100%" height={15} />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          // Display actual dish cards once loading is complete
          dishes.map((dish, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3.5} key={index}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={dish.image}
                  alt={dish.name}
                />
                <CardContent>
                  <Box display="flex" flexDirection="column" height="100%" justifyContent="space-between">
                    <Typography variant="h6" component="div" gutterBottom>
                      {dish.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Famous in: {dish.place}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {dish.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default CuisinePage;
