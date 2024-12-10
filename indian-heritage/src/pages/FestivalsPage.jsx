// src/pages/FestivalsPage.js
import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Skeleton, CardMedia } from '@mui/material';

const festivals = [
  { 
    name: 'Diwali', 
    description: 'Festival of Lights, celebrated with lights, sweets, and fireworks.',
    popularPlace: 'Andhra Pradesh,Ayodhya, Varanasi, Delhi', 
    religion: 'Hinduism',
    image: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-1832870,resizemode-75,msid-114497310/wealth/save/diwali-long-weekend-banks-closed-for-up-to-4-days-in-these-states-for-diwali-2024-check-full-list/diwaali.jpg',
  },
  { 
    name: 'Holi', 
    description: 'Festival of Colors, celebrated by throwing colors and enjoying music and dance.',
    popularPlace: 'Mathura, Vrindavan, Jaipur', 
    religion: 'Hinduism',
    image: 'https://media.licdn.com/dms/image/D5612AQH-a_IKlfLK7A/article-cover_image-shrink_720_1280/0/1711094102622?e=2147483647&v=beta&t=M2dVjP6-QP0GLhqYXr5Ov15ss9-g2FhXP4f-xIU2Y3o',
  },
  { 
    name: 'Dussehra', 
    description: 'Celebration of victory of good over evil, with effigies of Ravana burnt.',
    popularPlace: 'Mysuru, Kullu, Kolkata,Andhra Pradesh', 
    religion: 'Hinduism',
    image: 'https://t4.ftcdn.net/jpg/08/55/36/07/360_F_855360720_sqYn8KGYuE4mMs4WBwA1l96dWmfuuzpj.jpg',
  },
  { 
    name: 'Eid-ul-Fitr', 
    description: 'Celebration marking the end of Ramadan, with prayers and feasts.',
    popularPlace: 'Lucknow, Hyderabad, Delhi', 
    religion: 'Islam',
    image: 'https://i0.wp.com/enewsroom.in/wp-content/uploads/2024/04/pngtree-eid-al-fitr-min.jpg?resize=700%2C470&ssl=1',
  },
  { 
    name: 'Eid-ul-Adha', 
    description: 'Festival of Sacrifice, commemorating the willingness of Ibrahim to sacrifice his son.',
    popularPlace: 'Delhi, Mumbai, Kolkata', 
    religion: 'Islam',
    image: 'https://i0.wp.com/globeestatebuilders.com/wp-content/uploads/2024/06/Celebrating-Eid-ul-Adha-2024.jpg',
  },
  { 
    name: 'Navratri', 
    description: 'Nine-night festival worshipping the goddess Durga.',
    popularPlace: 'Gujarat, Maharashtra, Kolkata', 
    religion: 'Hinduism',
    image: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Articles/What-is-Navratri-Festival-(Meaning).jpg',
  },
  { 
    name: 'Durga Puja', 
    description: 'Celebration of the goddess Durga’s victory over Mahishasura.',
    popularPlace: 'Kolkata, Assam, Tripura', 
    religion: 'Hinduism',
    image: 'https://cdn.shopify.com/s/files/1/0679/2560/6720/files/When_is_Durga_Puja_2024_1024x1024.jpg?v=1719819100',
  },
  { 
    name: 'Ganesh Chaturthi', 
    description: 'Celebration of Lord Ganesha’s birth, marked by processions and idols.',
    popularPlace: 'Andhra Pradesh, Mumbai, Pune, Hyderabad', 
    religion: 'Hinduism',
    image: 'https://assets.thehansindia.com/h-upload/2024/08/22/1473672-ganresh.jpg',
  },
  { 
    name: 'Makar Sankranti', 
    description: 'Festival marking the transition of the sun into Capricorn.',
    popularPlace: 'Punjab, Gujarat, Rajasthan', 
    religion: 'Hinduism',
    image: 'https://pbs.twimg.com/media/ErmckUFVEAEn6iN.jpg:large',
  },
  { 
    name: 'Onam', 
    description: 'Harvest festival of Kerala, celebrated with boat races and cultural programs.',
    popularPlace: 'Kerala', 
    religion: 'Hinduism',
    image: 'https://www.vedantu.com/seo/content-images/bbd10063-4e9d-4e38-aa7f-e28113f5397d_Onasadya.png',
  },
  { 
    name: 'Lohri', 
    description: 'Harvest festival celebrated with bonfires and traditional songs.',
    popularPlace: 'Punjab, Haryana', 
    religion: 'Hinduism',
    image: 'https://cdnjs.angroos.com/wp-content/uploads/2024/01/Lohri-wishes.jpg',
  },
  { 
    name: 'Raksha Bandhan', 
    description: 'Festival celebrating the bond between brothers and sisters.',
    popularPlace: 'North India, Rajasthan, Maharashtra', 
    religion: 'Hinduism',
    image: 'https://images.tv9hindi.com/wp-content/uploads/2024/08/raksha-bandhan-rakhi.jpg',
  },
  { 
    name: 'Karva Chauth', 
    description: 'Festival where women fast for the well-being of their husbands.',
    popularPlace: 'North India, Maharashtra', 
    religion: 'Hinduism',
    image: 'https://cdnjs.angroos.com/wp-content/uploads/2024/09/karwa-chauth-wishes.jpg',
  },
  { 
    name: 'Baisakhi', 
    description: 'Harvest festival marking the beginning of the harvest season.',
    popularPlace: 'Punjab, Haryana', 
    religion: 'Sikhism, Hinduism',
    image: 'https://as1.ftcdn.net/v2/jpg/06/09/68/98/1000_F_609689898_3N5CfdwBbXOo0FGw61jlfWGbDxXo1vdC.jpg',
  },
  { 
    name: 'Ugadi', 
    description: 'Telugu and Kannada New Year festival.',
    popularPlace: 'Andhra Pradesh,Telangana, Andhra Pradesh, Karnataka', 
    religion: 'Hinduism',
    image: 'https://images.news18.com/ibnlive/uploads/2021/04/1618284443_ugadi.jpg',
  },
  { 
    name: 'Maha Shivaratri', 
    description: 'Night-long worship of Lord Shiva.',
    popularPlace: 'Andhra Pradesh,Varanasi, Somnath, Kedarnath', 
    religion: 'Hinduism',
    image: 'https://i.pinimg.com/736x/4e/21/99/4e21993464abff520baaee59a786ea10.jpg',
  },
  { 
    name: 'Janmashtami', 
    description: 'Celebration of the birth of Lord Krishna.',
    popularPlace: 'Mathura, Dwarka, Vrindavan', 
    religion: 'Hinduism',
    image: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Articles/what-is-janmashtami-2.jpg',
  },
  { 
    name: 'Buddha Purnima', 
    description: 'Celebration of the birth, enlightenment, and death of Buddha.',
    popularPlace: 'Bodh Gaya, Sarnath, Lumbini', 
    religion: 'Buddhism',
    image: 'https://cdn.zeebiz.com/hindi/sites/default/files/2023/05/05/136111-buddha-purnima-freepik.png?im=FitAndFill=(1200,900)',
  },
  { 
    name: 'Christmas', 
    description: 'Celebration of the birth of Jesus Christ.',
    popularPlace: 'Goa, Kerala, North East India', 
    religion: 'Christianity',
    image: 'https://guideposts.org/wp-content/uploads/2022/12/Nativity-set-showing-the-history-of-Christmas-1024x576.jpg.optimal.jpg',
  },
  { 
    name: 'Pongal', 
    description: 'Harvest festival of Tamil Nadu, celebrated with family feasts and prayers.',
    popularPlace: 'Tamil Nadu, Karnataka', 
    religion: 'Hinduism',
    image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/aaa1a0e4-acdd-4977-9941-4c115acfb70f/890ef270-b187-4ff0-a394-584f92f32e67.png',
  }
];

const FestivalsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate an API call delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ padding: 5, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cultural Festivals of India
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {festivals.map((festival, index) => (
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
                    image={festival.image}
                    alt={festival.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {festival.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {festival.popularPlace}
                    </Typography>
                    <Typography variant="body1" align="justify">
                      {festival.description}
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

export default FestivalsPage;
