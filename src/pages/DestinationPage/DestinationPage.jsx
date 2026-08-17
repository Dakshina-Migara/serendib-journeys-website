import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Button from '../../common/components/Button/Button';

import img1 from '../../assets/ambuluwawa-tower-is-the.jpg';
import img2 from '../../assets/images (8).jfif';
import img3 from '../../assets/images (1).jfif';
import img4 from '../../assets/images (2).jfif';
import img5 from '../../assets/images (3).jfif';
import img6 from '../../assets/images (4).jfif';
import img7 from '../../assets/images (5).jfif';
import img8 from '../../assets/images (6).jfif';
import img9 from '../../assets/images (7).jfif';

const destinations = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
];

export default function DestinationPage() {
  return (
    <Box id="destinations" sx={{ backgroundColor: '#ffffff', py: { xs: 8, md: 12 }, width: '100%' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}>
            DISCOVER SRI LANKA
          </Typography>
          <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' } }}>
            Popular Destinations
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {destinations.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '250px', sm: '280px', md: '300px' },
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                  },
                  '&:hover img': {
                    transform: 'scale(1.08)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt="Sri Lanka Destination"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 6, md: 8 } }}>
          <Button 
            variant="outlined" 
            sx={{ 
              borderColor: '#2C5E55', 
              color: '#2C5E55', 
              borderRadius: '12px',
              padding: '12px 32px',
              fontWeight: 600,
              borderWidth: '2px',
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: '#2C5E55', 
                color: 'white',
                borderColor: '#2C5E55',
                boxShadow: '0 8px 20px rgba(44, 94, 85, 0.2)',
                transform: 'translateY(-2px)'
              } 
            }}
          >
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
