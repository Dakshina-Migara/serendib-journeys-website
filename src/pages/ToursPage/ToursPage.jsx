import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EastIcon from '@mui/icons-material/East';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';

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
    <>
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
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.02)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
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
                    
                    <Stack 
                      component="a" 
                      href="#contact"
                      direction="row" 
                      alignItems="center" 
                      spacing={1} 
                      sx={{ 
                        textDecoration: 'none',
                        cursor: 'pointer', 
                        color: '#0f3d39', 
                        mt: 'auto', 
                        '&:hover': { color: '#EAB252' }, 
                        transition: 'color 0.3s', 
                        width: 'fit-content' 
                      }}
                    >
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

      <Box sx={{ backgroundColor: '#0f3d39', py: { xs: 8, md: 12 }, width: '100%', color: 'white' }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}>
              WHY CHOOSE US
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, lineHeight: 1.2 }}>
              Small enough to care, experienced enough to get it right
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 2 }}>
            {[
              {
                icon: <PeopleOutlinedIcon sx={{ color: '#EAB252' }} />,
                title: 'Local Expertise',
                description: 'Sri Lankan guides who know the shortcuts, the quiet hours at Sigiriya and where lunch is worth stopping for.'
              },
              {
                icon: <VerifiedUserOutlinedIcon sx={{ color: '#EAB252' }} />,
                title: 'Private Drivers',
                description: 'Licensed, insured chauffeur-guides and a vehicle that stays with you for the whole journey.'
              },
              {
                icon: <ScheduleOutlinedIcon sx={{ color: '#EAB252' }} />,
                title: '24/7 Support',
                description: 'A real person on WhatsApp at any hour, from your first enquiry to your departure gate.'
              },
              {
                icon: <RouteOutlinedIcon sx={{ color: '#EAB252' }} />,
                title: 'Custom Itineraries',
                description: 'Nothing off the shelf — routes, hotels and pacing adjusted until the plan feels like yours.'
              }
            ].map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={{ 
                  height: '100%', 
                  p: { xs: 0, md: 3 }, 
                  borderRight: { md: index !== 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' },
                  borderBottom: { xs: index !== 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none', sm: 'none' },
                  pb: { xs: index !== 3 ? 4 : 0, sm: 0 },
                  pl: { md: index === 0 ? 0 : 3 }
                }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontFamily: 'serif', fontWeight: 700, mb: 1.5, fontSize: '1.2rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}