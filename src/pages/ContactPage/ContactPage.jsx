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
              <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}>
                START PLANNING
              </Typography>
              <Typography variant="h2" sx={{ color: '#1a1a1a', fontFamily: 'serif', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2, lineHeight: 1.2 }}>
                Tell us your dates — we'll send a draft itinerary within 24 hours
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.7 }}>
                No deposit to get a plan and a price. Share a rough idea of what you'd like to see and we'll do the rest.
              </Typography>
            </Box>

            <Stack spacing={2}>
              {[
                { icon: <WhatsAppIcon sx={{ color: '#0f3d39' }} />, label: 'WHATSAPP', text: '+94 77 412 8860' },
                { icon: <PhoneOutlinedIcon sx={{ color: '#0f3d39' }} />, label: 'CALL US', text: '+94 11 258 7734' },
                { icon: <EmailOutlinedIcon sx={{ color: '#0f3d39' }} />, label: 'EMAIL', text: 'hello@serendibjourneys.lk' }
              ].map((item, index) => (
                <Card key={index} elevation={0} sx={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '4px', p: 1 }}>
                  <CardContent sx={{ p: '16px !important', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(44, 94, 85, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mr: 3
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#1a1a1a', fontWeight: 600 }}>
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
            <Card elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 1 }}>
                    FULL NAME
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="Hannah Wexler" 
                    sx={{ backgroundColor: '#F9F8F6' }}
                    InputProps={{ sx: { borderRadius: '2px', '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' } } }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 1 }}>
                    EMAIL
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="you@example.com"
                    sx={{ backgroundColor: '#F9F8F6' }}
                    InputProps={{ sx: { borderRadius: '2px', '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' } } }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 1 }}>
                    ARRIVAL DATE
                  </Typography>
                  <TextField 
                    type="date"
                    fullWidth 
                    variant="outlined" 
                    sx={{ backgroundColor: '#F9F8F6', color: '#666' }}
                    InputProps={{ sx: { borderRadius: '2px', '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' }, color: '#666' } }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 1 }}>
                    DEPARTURE DATE
                  </Typography>
                  <TextField 
                    type="date"
                    fullWidth 
                    variant="outlined" 
                    sx={{ backgroundColor: '#F9F8F6' }}
                    InputProps={{ sx: { borderRadius: '2px', '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' }, color: '#666' } }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1.5, fontWeight: 600, display: 'block', mb: 1 }}>
                    WHAT WOULD YOU LIKE TO SEE?
                  </Typography>
                  <TextField 
                    multiline
                    rows={4}
                    fullWidth 
                    variant="outlined" 
                    placeholder="Two adults, first visit, keen on wildlife and the hill country train..."
                    sx={{ backgroundColor: '#F9F8F6' }}
                    InputProps={{ sx: { borderRadius: '2px', '& fieldset': { borderColor: 'rgba(0,0,0,0.08)' } } }}
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
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '4px',
                      boxShadow: 'none',
                      '&:hover': { backgroundColor: '#0a2a27', boxShadow: 'none' }
                    }}
                  >
                    Request My Itinerary
                  </MuiButton>
                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: '#888' }}>
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
