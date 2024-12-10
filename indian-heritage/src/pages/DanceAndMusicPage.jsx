// src/pages/DanceAndMusicPage.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Skeleton } from '@mui/material';

const danceAndMusicForms = [
  { 
    name: 'Bharatanatyam', 
    origin: 'Tamil Nadu', 
    description: 'A classical dance form characterized by precise movements, expressions, and storytelling, often depicting themes from Hindu mythology.',
    image: 'https://talashruti.com/wp-content/uploads/2019/04/a437.jpg' 
  },
  { 
    name: 'Kathak', 
    origin: 'North India', 
    description: 'Known for its graceful spins and expressive footwork, Kathak tells stories through intricate gestures and facial expressions.',
    image: 'https://www.kathadance.org/wp-content/uploads/40.3-Historical-Repertory-Kathak-Yatra.jpg' 
  },
  { 
    name: 'Kathakali', 
    origin: 'Kerala', 
    description: 'A dance-drama style known for its elaborate costumes, vibrant makeup, and dramatization of epic stories like the Mahabharata and Ramayana.',
    image: 'https://www.thestatesman.com/wp-content/uploads/2022/01/Kathakali-1.jpg' 
  },
  { 
    name: 'Kuchipudi', 
    origin: 'Andhra Pradesh', 
    description: 'A classical dance-drama with elements of both dance and narration, typically using expressive eye movements and hand gestures.',
    image: 'https://cdn.yehaindia.com/wp-content/uploads/2020/08/1-main-1.jpg' 
  },
  { 
    name: 'Odissi', 
    origin: 'Odisha', 
    description: 'Recognized for its fluidity and grace, Odissi uses lyrical, rounded body movements and depicts stories from Hindu scriptures.',
    image: 'https://odishaconnect.com/wp-content/uploads/2023/07/DSC_3900.jpg' 
  },
  { 
    name: 'Manipuri Dance', 
    origin: 'Manipur', 
    description: 'Known for its gentle, flowing movements, Manipuri dance is closely related to the worship of Lord Krishna.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMC6h47612Ahd_qsQN42fkdKd4VA73U7JuoBPMZmfrToq4oW3arj62tOQBFvjXyONmJht7CjSAEXhfBH7TROMdccYx8sf56Yj9TikBG-gCjNgnC4k0rLMA1MEZ1YYpLNezO15rxarJZ8aM/s1600/Manipuri_Dance3__490544593.jpg' 
  },
  { 
    name: 'Mohiniyattam', 
    origin: 'Kerala', 
    description: 'A graceful dance style performed by women, known for its feminine movements and themes of love and devotion.',
    image: 'https://i.ytimg.com/vi/yY6ba7-Rl-o/maxresdefault.jpg' 
  },
  { 
    name: 'Sattriya Dance', 
    origin: 'Assam', 
    description: 'A classical dance-drama that originated in monasteries, depicting tales of Lord Krishna and other religious themes.',
    image: 'https://www.sattriyakristi.com/wp-content/uploads/2020/06/Sattriya-Dance-Krishnakshi-1-scaled.jpg' 
  },
  { 
    name: 'Dandiya Raas', 
    origin: 'Gujarat', 
    description: 'A folk dance performed with sticks during the festival of Navratri, symbolizing the playful dance of Lord Krishna.',
    image: 'https://www.hire4event.com/apppanel/assets/artistimage/16532914101.gif' 
  },
  { 
    name: 'Garba', 
    origin: 'Gujarat', 
    description: 'A circular dance performed during Navratri, with dancers clapping in rhythm to traditional music.',
    image: 'https://swarajya.gumlet.io/swarajya%2F2021-10%2F054eb728-fdd6-4ccd-8589-e6d28a234be5%2FNavratri.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100' 
  },
  { 
    name: 'Lavani', 
    origin: 'Maharashtra', 
    description: 'A vibrant folk dance with rhythmic footwork and quick body movements, known for its lively storytelling.',
    image: 'https://mazamaharashtrablog.files.wordpress.com/2017/08/lavani.jpg' 
  },
  { 
    name: 'Bhangra', 
    origin: 'Punjab', 
    description: 'An energetic folk dance performed during harvest festivals, often accompanied by the dhol drum.',
    image: 'https://hupups.com/wp-content/uploads/2024/03/IMG_0029.webp' 
  },
  { 
    name: 'Ghoomar', 
    origin: 'Rajasthan', 
    description: 'A traditional Rajasthani dance performed by women in colorful attire, marked by graceful spinning movements.',
    image: 'https://cdn.shopify.com/s/files/1/0562/8792/0217/t/7/assets/25padmavati1.jpg?v=1655289698' 
  },
  { 
    name: 'Yakshagana', 
    origin: 'Karnataka', 
    description: 'A form of theater dance that combines dance, music, and dialogue to narrate stories from Hindu epics.',
    image: 'https://uthishta.org/sites/default/files/portfolio-images/utsav%20Yakshagana%20-1.jpg' 
  },
  { 
    name: 'Thumri', 
    origin: 'North India', 
    description: 'A semi-classical vocal music style focusing on romantic and devotional themes, often performed with Kathak.',
    image: 'https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2017/10/25/Girija-Devi.jpg' 
  },
  { 
    name: 'Qawwali', 
    origin: 'Punjab (Sufi tradition)', 
    description: 'A devotional music form rooted in Sufism, involving repetitive verses in praise of God and the divine.',
    image: 'https://c.saavncdn.com/986/BC-Anthem-Qawwali-Hindi-2023-20230920092248-500x500.jpg' 
  },
  { 
    name: 'Carnatic Music', 
    origin: 'South India', 
    description: 'A classical music tradition based on a system of ragas and talas, emphasizing devotion and melody.',
    image: 'https://lh3.googleusercontent.com/eQnHNBkq2tFOAqbJASMX_GFeVCutcBsv8ZOHu1JfU6svp_CCBZqEhb7UKPSaHFkFVptumYxPTDeybDOzU_Een7btHg=s0' 
  },
  { 
    name: 'Hindustani Classical Music', 
    origin: 'North India', 
    description: 'A classical music system with an emphasis on improvisation, exploring emotions through ragas and talas.',
    image: 'https://artiumacademy.mo.cloudinary.net/v1n/blogs/Discover%20Divinity%20through%20Indian%20Classical%20Music.jpg' 
  },
  { 
    name: 'Baul Music', 
    origin: 'West Bengal', 
    description: 'A folk music form performed by wandering minstrels, known for its spiritual themes and simple, heartfelt lyrics.',
    image: 'https://baulfakiri.com/wp-content/uploads/2020/01/Armor-India-festival.jpg' 
  },
  { 
    name: 'Chhau Dance', 
    origin: 'Odisha, West Bengal, Jharkhand', 
    description: 'A tribal dance with martial, acrobatic movements and elaborate masks, often depicting themes from mythology.',
    image: 'https://media.istockphoto.com/id/505717022/photo/chhau-dance-indian-tribal-martial-dance-at-night-in-village.jpg?s=612x612&w=0&k=20&c=Cyb7gpp6bJEIdS5SV-VoXIdAWIY1xc_vOLkiSnwn2GM=' 
  },
];


const DanceAndMusicPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box p={3}>
      <Box mb={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          {loading ? <Skeleton width={200} /> : "Traditional Dance & Music"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {loading ? <Skeleton width="60%" /> : "Learn about the various dance and music forms that enrich Indian culture."}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {danceAndMusicForms.map((form, index) => (
          <Grid item xs={12} sm={6} md={5} lg={4} key={index} padding={5}>
            <Card sx={{ height: '100%' }}>
              {loading ? (
                <Skeleton variant="rectangular" height={240} />
              ) : (
                <CardMedia component="img" height="240" image={form.image} alt={form.name} />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {loading ? <Skeleton width="80%" /> : form.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {loading ? <Skeleton width="50%" /> : `Origin: ${form.origin}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {loading ? <Skeleton width="90%" /> : form.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DanceAndMusicPage;
