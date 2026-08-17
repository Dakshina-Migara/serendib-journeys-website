import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import aboutImg from '../../assets/images (9).jfif';

export default function AboutPage() {
  return (
    <Box id="about" sx={{ backgroundColor: '#F4F1EA', py: { xs: 8, md: 12 }, width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 8, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={aboutImg}
                alt="Chauffeur guide with van"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  maxHeight: { xs: '400px', md: '600px' },
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                }}
              />
              
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -20, sm: -30 },
                  right: { xs: 10, sm: -20, md: -30 },
                  backgroundColor: 'rgba(15, 61, 57, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  px: { xs: 3, md: 5 },
                  py: { xs: 2, md: 3 },
                  borderRadius: '16px',
                  boxShadow: '0 15px 40px rgba(15, 61, 57, 0.2)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <Typography variant="h5" sx={{ fontFamily: 'serif', fontWeight: 600, mb: 0.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  Colombo-born
                </Typography>
                <Typography variant="caption" sx={{ color: '#86B3A8', letterSpacing: 1.5, fontWeight: 600, fontSize: { xs: '0.6rem', md: '0.7rem' } }}>
                  FAMILY RUN, LOCALLY OWNED
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { md: 4, lg: 6 }, mt: { xs: 4, md: 0 } }}>
              <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 2 }}>
                OUR STORY
              </Typography>
              
              <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, mb: 4, lineHeight: 1.2, fontSize: { xs: '2rem', sm: '2.5rem', lg: '3rem' } }}>
                We grew up on these roads, and we still drive them ourselves
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#555', mb: 3, fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
                Serendib Journeys began in 2011 with one van, one driver and a simple belief: the best way to see Sri Lanka is slowly, with someone who knows which turn-off leads to the better view. Today our small team of chauffeur-guides — all licensed by the Sri Lanka Tourism Development Authority — hosts travellers from more than forty countries.
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#555', mb: 4, fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
                We plan every itinerary by hand around your pace and interests, book the guesthouses and boutique hotels we'd stay in ourselves, and stay reachable on WhatsApp for every mile of the trip.
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer', color: '#0f3d39', width: 'fit-content', '&:hover': { color: '#EAB252' }, transition: 'color 0.3s' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Talk to our team
                </Typography>
                <EastIcon fontSize="small" />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
