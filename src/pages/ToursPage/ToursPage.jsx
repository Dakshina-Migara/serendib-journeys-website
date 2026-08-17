import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EastIcon from '@mui/icons-material/East';

const toursData = [
  {
    icon: <MapOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Round Tours',
    description: 'Multi-day loops of 5 to 16 nights covering the Cultural Triangle, hill country, national parks and the south coast.'
  },
  {
    icon: <WbSunnyOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Day Tours',
    description: 'Single-day excursions from Colombo, Kandy, Ella or Galle — temples, waterfalls, tea factories and city walks.'
  },
  {
    icon: <VisibilityOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Wildlife Safaris',
    description: 'Dawn and dusk jeep safaris in Yala, Udawalawe, Wilpattu and Minneriya with experienced spotters.'
  },
  {
    icon: <FlightOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Airport Transfers',
    description: 'Meet-and-greet at Bandaranaike International, flight tracking and fixed fares to any hotel on the island.'
  },
  {
    icon: <DirectionsCarOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Private Transportation',
    description: 'Air-conditioned cars, vans and mini-coaches with an English-speaking chauffeur, by the day or the week.'
  },
  {
    icon: <ExploreOutlinedIcon fontSize="small" sx={{ color: '#2C5E55' }} />,
    title: 'Custom Packages',
    description: 'Honeymoons, family holidays, Ayurveda retreats and photography trips built around your dates and budget.'
  }
];

export default function ToursPage() {
  return (
    <Box id="tours" component="section" sx={{ backgroundColor: '#F4F1EA', py: { xs: 8, md: 12 }, width: '100%' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: { xs: '100%', md: '50%' } }}>
          <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}>
            WHAT WE DO
          </Typography>
          <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' }, mb: 2 }}>
            Journeys built around how you like to travel
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 }}>
            Pick a ready-made route or let us shape one from scratch — every option comes with your own vehicle, driver-guide and a flexible day-by-day plan.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {toursData.map((tour, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(44, 94, 85, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    {tour.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontFamily: 'serif', fontWeight: 700, color: '#1a1a1a', mb: 2 }}>
                    {tour.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, mb: 4 }}>
                    {tour.description}
                  </Typography>
                  
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer', color: '#0f3d39', mt: 'auto', '&:hover': { color: '#EAB252' }, transition: 'color 0.3s', width: 'fit-content' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Learn More
                    </Typography>
                    <EastIcon fontSize="small" />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}