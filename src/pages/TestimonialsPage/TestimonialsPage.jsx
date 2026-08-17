import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonialsData = [
  {
    quote: "Twelve days from Negombo to Mirissa and not one wasted hour. Nuwan read our energy perfectly — an extra morning in Ella when we were tired, an early start when the light was good.",
    name: "Hannah Wexler",
    country: "AUSTRALIA"
  },
  {
    quote: "We travelled with two small children and it never felt hard. Car seats waiting at the airport, shaded stops, and a guide who kept the kids entertained through the Yala safari.",
    name: "Thomas Brandt",
    country: "GERMANY"
  },
  {
    quote: "They rebuilt our whole itinerary in a day when monsoon rain hit the south. New hotels, same budget, better trip than the one we'd planned.",
    name: "Priya Raghunathan",
    country: "SINGAPORE"
  }
];

export default function TestimonialsPage() {
  return (
    <Box id="testimonials" component="section" sx={{ backgroundColor: '#F4F1EA', py: { xs: 8, md: 12 }, width: '100%' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}>
            GUEST STORIES
          </Typography>
          <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' }, mb: 2 }}>
            What travellers tell us after
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonialsData.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '4px',
                  boxShadow: index === 1 ? '0 15px 40px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  },
                  p: { xs: 1, md: 2 }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={0.5} sx={{ mb: 3 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} sx={{ color: '#EAB252', fontSize: '1.3rem' }} />
                    ))}
                  </Stack>
                  
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', mb: 4, flexGrow: 1 }}>
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.08)' }} />
                  
                  <Typography variant="subtitle1" sx={{ fontFamily: 'serif', fontWeight: 700, color: '#1a1a1a', mb: 0.5 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600 }}>
                    {testimonial.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
