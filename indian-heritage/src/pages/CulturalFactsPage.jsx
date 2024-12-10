// src/pages/CulturalFactsPage.js
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, Skeleton } from '@mui/material';

// Array of cultural facts data
const culturalFacts = [
  {
    title: "India Has the Largest Democracy in the World",
    description: "With over 1.4 billion people, India is the world's largest democracy, holding the biggest elections globally every five years.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ScfqS1pB7xY84ryg3H6VbpgGTCIEf3yWnkVs9lAJkv0r3_K69dg6GWCUXNXtGZuDx_10UEKQ6uZdNXDzLt5fStn3MuI2cNw0gothGryEGj2XE5WV0rPwYwfJb4P6x3voivZ7seu1nokW/s690/incredible-india.jpg"
  },
  {
    title: "India is the Birthplace of Four Major Religions",
    description: "India is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism, making it a significant hub for world religions.",
    imageUrl: "https://easterncrescent.in/Admin/ArticleImages/Religion.jpeg"
  },
  {
    title: "India Has 22 Official Languages",
    description: "India recognizes 22 languages under the Eighth Schedule of the Constitution, including Hindi, Bengali, Telugu, and Tamil.",
    imageUrl: "https://img.jagranjosh.com/images/2021/November/23112021/official%20languages%20of%20India.jpg"
  },
  {
    title: "The Kumbh Mela is the Largest Religious Gathering",
    description: "The Kumbh Mela is held every 12 years and attracts millions of people, making it the largest religious gathering in the world.",
    imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/190115113716-kumbh-mela-1076542612.jpg?q=x_0,y_0,h_900,w_1599,c_fill/w_1280"
  },
  {
    title: "India's National Animal is the Bengal Tiger",
    description: "The Bengal Tiger is India's national animal, symbolizing strength, power, and grace.",
    imageUrl: "https://jgi-design-live.s3.amazonaws.com/knowledgeumacademy.in/uploads/blog/55e37478edc496f2b3a490fe1dd965a2.jpg"
  },
  {
    title: "Yoga Originated in India",
    description: "The practice of yoga, which promotes physical, mental, and spiritual well-being, has its origins in ancient India.",
    imageUrl: "https://blogstudio.s3.theshoppad.net/muselot-india/222eb66c3872bb7648716e7d2f92dbc7.jpg"
  },
  {
    title: "India is Home to the Oldest Known Civilization",
    description: "The Indus Valley Civilization, one of the oldest in the world, existed around 3300 BCE in what is now modern-day India and Pakistan.",
    imageUrl: "https://i.ytimg.com/vi/kdqmUQ2SjG8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMkzhFZnbfx1L0klPnW0zByC6j5w"
  },
  {
    title: "India’s Festivals are World-Renowned",
    description: "India is known for its vibrant festivals, including Diwali, Holi, Eid, Christmas, and Durga Puja, celebrated with immense enthusiasm across the country.",
    imageUrl: "https://img.paisawapas.com/ovz3vew9pw/2023/11/02132446/Important-festivals-of-india.jpg"
  },
  {
    title: "Indian Cuisine is Famous for Its Spices",
    description: "Indian food is known for its rich and diverse use of spices. The country is the world's largest producer and consumer of spices.",
    imageUrl: "https://www.efghfoods.com/wp-content/uploads/2024/05/efgh1...jpg"
  },
  {
    title: "India Has the World’s Largest Film Industry",
    description: "Known as Bollywood, India's film industry produces over 1,500 films annually, more than any other country in the world.",
    imageUrl: "https://www.businessoutreach.in/wp-content/uploads/2024/03/Sandalwood-Film-Industry.webp"
  },
  {
    title: "The Taj Mahal is a Symbol of Love",
    description: "The Taj Mahal, a UNESCO World Heritage Site, is an iconic symbol of love and one of the Seven Wonders of the World.",
    imageUrl: "https://jaipursightseeing.wordpress.com/wp-content/uploads/2011/11/taj-mahal.png"
  },
  {
    title: "India Has a Rich Textile Tradition",
    description: "India is known for its traditional textiles like silk, cotton, and wool, with famous fabrics such as khadi, pashmina, and Banarasi silk.",
    imageUrl: "https://samunnativentures.com/wp-content/uploads/2023/09/Textile.jpeg"
  },
  {
    title: "Chess was Invented in India",
    description: "The game of chess, originally known as 'Chaturanga', was invented in India around the 6th century AD.",
    imageUrl: "https://images.prismic.io/fiftytwo/58855e93-9157-4e0b-b6fd-9d5405de7822_Fiftytwo-Blog-invented-chess-2.jpg?auto=compress,format&rect=0,375,6000,3250&w=1200&h=650"
  },
  {
    title: "India is the World's Largest Producer of Milk",
    description: "India produces more milk than any other country, surpassing even the United States and China.",
    imageUrl: "https://static.businessworld.in/milk-production_20240601090243_ogImage_24.jpg"
  },
  {
    title: "India is the Only Country Where All Major Religions Live in Harmony",
    description: "India is home to followers of Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism, all living side by side in a unique display of tolerance.",
    imageUrl: "https://media.licdn.com/dms/image/D4E12AQGk0B2LeCfMRw/article-cover_image-shrink_600_2000/0/1711291143230?e=2147483647&v=beta&t=27MqD7qJgk9Olpj175CXZdNfOHVDf0QGd92X5pjOyNE"
  }
];
const CulturalFactsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Interesting Cultural Facts
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Read some fun and intriguing facts about India’s cultural diversity and heritage.
        </Typography>
      </Box>

      {/* Grid Layout to display cards */}
      <Grid container spacing={4} alignItems="stretch" marginLeft={'50px'}>
        {culturalFacts.map((fact, index) => (
          <Grid item xs={12} sm={6} md={3.5} key={index}>
            {/* Card Skeleton Loader */}
            {isLoading ? (
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Skeleton variant="rectangular" height={240} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Skeleton variant="rectangular" width="40%" height={36} sx={{ marginTop: 'auto' }} />
                </CardContent>
              </Card>
            ) : (
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={fact.imageUrl}
                  alt={fact.title}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div>
                    <Typography variant="h6">{fact.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{fact.description}</Typography>
                  </div>
                  {/* Learn More button */}
                  <Button variant="outlined" sx={{ alignSelf: 'center', marginTop: 'auto' }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CulturalFactsPage;
