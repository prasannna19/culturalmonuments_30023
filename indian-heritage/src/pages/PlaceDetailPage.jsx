import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Skeleton } from '@mui/material';

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
        'https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg',
        'https://images.deccanherald.com/deccanherald/2024-09-18/lkkjeuh9/Hampi.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
        'https://i.ytimg.com/vi/CsHhoLKmhGs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAslyzP_Ws2rUN15KOUeaTkDGI36A',
        'https://indiatravel.app/wp-content/uploads/2024/02/best-tourist-spots-hampi-1024x585.jpg',
        'https://karnatakatourism.org/wp-content/uploads/2020/05/Elephant-Stables-Hampi-2.jpg'
      ]
    },
    { 
      name: 'Gateway of India', 
      place: 'Mumbai, Maharashtra', 
      description: 'An iconic archway built in honor of King George V’s visit to India, overlooking the Arabian Sea.',
      bestTime: 'October to March',
      mainImage: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_1208,w_3492,h_1968,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/theory9---premium-service-apts/mumbai_gateway_of_india',
      images: [
        'https://media.cntraveler.com/photos/598202d5b7a86962e8e27c47/master/pass/Gateway-Of-India-GettyImages-521926710.jpg',
        'https://media.gettyimages.com/id/552552051/photo/mumbai-gateway-of-india.jpg?s=612x612&w=gi&k=20&c=eg5JEJU34FxjkJ1mtdlR7JhR3XRohOJ-BSg5JKZZRnM=',
        'https://d1bb1mccaihlpl.cloudfront.net/variants/avf003qav3qt64qu35c8e1xqp039/5495488087431af32265aaaaa1b8a274541d70555aa4d7c01d8d0fed27e7c152',
        'https://media.istockphoto.com/id/512832839/photo/illuminated-gateway-of-india-mumbai.jpg?s=612x612&w=0&k=20&c=LF8ObAbZTk7ztaH1aMH0AE8G2CMuEtChWUMOVR2b6C8=',
        'https://www.shutterstock.com/image-photo/gateway-india-archmonument-built-early-260nw-2191949537.jpg'
      ]
    },
    { 
      name: 'Fatehpur Sikri', 
      place: 'Uttar Pradesh', 
      description: 'A UNESCO World Heritage site featuring the remains of the Mughal capital with stunning architecture and historical significance.',
      bestTime: 'October to March',
      mainImage: 'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Fatehphur-Sikri%20%20%20andbeyond--36708e.jpg',
      images: [
        'https://i0.wp.com/compass.rauias.com/wp-content/uploads/2024/02/image-74.png',
        'https://content3.jdmagicbox.com/comp/agra/r6/0562px562.x562.141213164417.d6r6/catalogue/panch-mahal-fatehpur-sikri-agra-tourist-attraction-9h0vyk.jpg',
        'https://agratourism.in/images/places-to-visit/headers/khwabgah-daulat-khana-fatehpur-sikri-agra-header-agra-tourism.jpg.jpg',
        'https://i.pinimg.com/736x/ac/24/99/ac24993e817a87de68d9ae408e1a4a69.jpg',
      ]
    },
    { 
      name: 'Khajuraho', 
      place: 'Madhya Pradesh', 
      description: 'Famous for its intricately carved temples and erotic sculptures, recognized as a UNESCO World Heritage site.',
      bestTime: 'October to March',
      mainImage: 'https://media.istockphoto.com/id/1195731546/photo/khajuraho-temple-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=89x48HneRE__XcgEK7udhzXnP7WpqYdIAvW0LLM74PQ=',
      images: [
        'https://media.istockphoto.com/id/836199704/photo/indian-religious-erotic-symbols-on-temples-in-khajuraho.jpg?s=612x612&w=0&k=20&c=lIcUJB2tshBeXnyQ9iCbwpOJycutubRlRLyMBL5VfN0=',
        'https://www.swantour.com/blogs/wp-content/uploads/2018/03/Khajuraho-Temples.jpg',
        'https://www.sahyogmantratours.com/images/blogs/khajuraho-dance-festival-blog-2-20241003142644-1_crop.jpg',
        'https://live.staticflickr.com/65535/14453034968_b25aa01b8a_b.jpg',
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
const PlaceDetailPage = () => {
  const { placeName } = useParams();
  const navigate = useNavigate();
  const place = places.find(p => p.name.toLowerCase() === placeName.toLowerCase());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading delay
    return () => clearTimeout(timer);
  }, []);

  if (!place && !loading) {
    return <Typography variant="h5" align="center" color="error">Place not found!</Typography>;
  }

  return (
    <Box sx={{ padding: { xs: 3, md: 5 }, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        {loading ? <Skeleton width="50%" /> : `${place.name} - ${place.place}`}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            {loading ? (
              <Skeleton variant="rectangular" height={300} />
            ) : (
              <CardMedia
                component="img"
                height="300"
                image={place.mainImage}
                alt={`Main image of ${place.name}`}
                sx={{ objectFit: 'cover' }}
              />
            )}
            <CardContent>
              {loading ? (
                <Skeleton width="60%" />
              ) : (
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
                  Best Time to Visit: <span style={{ fontWeight: 500 }}>{place.bestTime}</span>
                </Typography>
              )}
              {loading ? (
                <Skeleton variant="text" height={80} />
              ) : (
                <Typography variant="body1" color="text.primary" sx={{ mt: 2, textAlign: 'justify' }}>
                  {place.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom align="center">
            {loading ? <Skeleton width="30%" /> : "More Images"}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {loading
              ? Array(5).fill().map((_, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                ))
              : place.images.map((image, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={image}
                      alt={`${place.name} Image ${index + 1}`}
                      sx={{ objectFit: 'cover', borderRadius: 1 }}
                    />
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          {loading ? <Skeleton width={80} /> : "Back"}
        </Button>
      </Box>
    </Box>
  );
};

export default PlaceDetailPage;
