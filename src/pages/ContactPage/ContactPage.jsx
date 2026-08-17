import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, TextField, Button as MuiButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function ContactPage() {
  return (
    <Box id="contact" component="section" sx={{ backgroundColor: '#F4F1EA', py: { xs: 8, md: 12 }, width: '100%' }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 5 }}>
              <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1.5 }}>
                START PLANNING
              </Typography>
              <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' }, mb: 2.5, lineHeight: 1.1 }}>
                Tell us your dates — we'll send a draft itinerary within 24 hours
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                No deposit to get a plan and a price. Share a rough idea of what you'd like to see and we'll do the rest.
              </Typography>
            </Box>

            <Stack spacing={2.5}>
              {[
                { icon: <WhatsAppIcon sx={{ color: '#0f3d39' }} />, label: 'WHATSAPP', text: '+94 77 412 8860' },
                { icon: <PhoneOutlinedIcon sx={{ color: '#0f3d39' }} />, label: 'CALL US', text: '+94 11 258 7734' },
                { icon: <EmailOutlinedIcon sx={{ color: '#0f3d39' }} />, label: 'EMAIL', text: 'hello@serendibjourneys.lk' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  elevation={0} 
                  sx={{ 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                      backgroundColor: 'rgba(255,255,255,1)'
                    }
                  }}
                >
                  <CardContent sx={{ p: '20px 24px !important', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                      width: 52, 
                      height: 52, 
                      borderRadius: '14px', 
                      backgroundColor: 'rgba(44, 94, 85, 0.06)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mr: 3
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 700, display: 'block', mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#1a1a1a', fontWeight: 600, fontSize: '1.1rem' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right Column (Form) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ 
              p: { xs: 4, md: 6 }, 
              borderRadius: '24px', 
              boxShadow: '0 20px 80px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.04)'
            }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, fontWeight: 600, display: 'block', mb: 1 }}>
                    FULL NAME
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="Hannah Wexler" 
                    InputProps={{ 
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: '#fbfbfb',
                        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15) !important' }
                      } 
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, fontWeight: 600, display: 'block', mb: 1 }}>
                    EMAIL
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="you@example.com"
                    InputProps={{ 
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: '#fbfbfb',
                        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15) !important' }
                      } 
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, fontWeight: 600, display: 'block', mb: 1 }}>
                    ARRIVAL DATE
                  </Typography>
                  <TextField 
                    type="date"
                    fullWidth 
                    variant="outlined" 
                    InputProps={{ 
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: '#fbfbfb',
                        color: '#666',
                        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15) !important' }
                      } 
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, fontWeight: 600, display: 'block', mb: 1 }}>
                    DEPARTURE DATE
                  </Typography>
                  <TextField 
                    type="date"
                    fullWidth 
                    variant="outlined" 
                    InputProps={{ 
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: '#fbfbfb',
                        color: '#666',
                        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15) !important' }
                      } 
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption" sx={{ color: '#666', letterSpacing: 1, fontWeight: 600, display: 'block', mb: 1 }}>
                    WHAT WOULD YOU LIKE TO SEE?
                  </Typography>
                  <TextField 
                    multiline
                    rows={4}
                    fullWidth 
                    variant="outlined" 
                    placeholder="Two adults, first visit, keen on wildlife and the hill country train..."
                    InputProps={{ 
                      sx: { 
                        borderRadius: '16px', 
                        backgroundColor: '#fbfbfb',
                        '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15) !important' }
                      } 
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <MuiButton 
                    fullWidth
                    variant="contained"
                    sx={{ 
                      backgroundColor: '#0f3d39', 
                      color: 'white', 
                      py: 2, 
                      mt: 2,
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 8px 20px rgba(15, 61, 57, 0.2)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                      '&:hover': { 
                        backgroundColor: '#0a2a27', 
                        boxShadow: '0 12px 25px rgba(15, 61, 57, 0.3)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Request My Itinerary
                  </MuiButton>
                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 3, color: '#888', fontWeight: 500 }}>
                    We reply from Colombo, usually the same day.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
