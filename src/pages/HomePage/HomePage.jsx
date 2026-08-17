import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import Button from '../../common/components/Button/Button';
import NavBar from '../../common/components/NavBar/NavBar';
import sigiriyaImg from '../../assets/sigiriya1.jpg';

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${sigiriyaImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      
      <Container 
        maxWidth="xl" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          pb: { xs: 4, md: 8 },
          pt: { xs: 4, md: 0 }
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '75%', lg: '60%' } }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#EAB252', 
              fontWeight: 600, 
              letterSpacing: 2, 
              display: 'block',
              mb: 1
            }}
          >
            PRIVATE, DRIVER-GUIDED TRAVEL
          </Typography>
          
          <Typography 
            variant="h1" 
            sx={{ 
              color: 'white', 
              fontFamily: 'serif', 
              fontWeight: 700,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '5.5rem' },
              lineHeight: 1.1,
              mb: 3
            }}
          >
            Sri Lanka, unhurried and seen through local eyes
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              mb: 4,
              maxWidth: '90%'
            }}
          >
            Ancient rock fortresses, misty tea country, leopard trails and the southern coast — shaped into one seamless itinerary with your own driver-guide from arrival to departure.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" href="#contact">
              Plan Your Trip
            </Button>
            <Button variant="outlined" href="#tours">
              View Tours
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
