import React from 'react';
import { Box, Container, Typography, Grid, Stack, Divider, IconButton } from '@mui/material';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#0f3d39', color: 'white', pt: { xs: 8, md: 10 }, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mb: { xs: 6, md: 8 }, justifyContent: 'space-between' }}>
          {/* Column 1: Brand & Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '50%', p: 0.5, mr: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ExploreOutlinedIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
              </Box>
              <Typography variant="h6" sx={{ fontFamily: 'serif', fontWeight: 700, letterSpacing: '.05rem', color: 'white' }}>
                Serendib Journeys
              </Typography>
            </Box>
            
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, mb: 4, maxWidth: { md: '90%' } }}>
              A family-run travel agency in Colombo crafting private, driver-guided journeys across Sri Lanka since 2011. Licensed by the Sri Lanka Tourism Development Authority.
            </Typography>
            
            <Stack direction="row" spacing={1.5}>
              <IconButton size="small" sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
          
          {/* Column 2: Explore Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 3 }}>
              EXPLORE
            </Typography>
            <Stack spacing={2}>
              {['Tours', 'Destinations', 'About', 'Contact'].map((link) => (
                <Typography 
                  key={link} 
                  component="a" 
                  href={`#${link.toLowerCase()}`} 
                  variant="body2" 
                  sx={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', '&:hover': { color: 'white' }, transition: 'color 0.2s', width: 'fit-content' }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="overline" sx={{ color: '#EAB252', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 3 }}>
              CONTACT
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneOutlinedIcon sx={{ color: '#EAB252', fontSize: '1.1rem', mr: 2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>+94 77 412 8860</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailOutlinedIcon sx={{ color: '#EAB252', fontSize: '1.1rem', mr: 2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>hello@serendibjourneys.lk</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PlaceOutlinedIcon sx={{ color: '#EAB252', fontSize: '1.1rem', mr: 2, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>42 Galle Road, Colombo 03, Sri Lanka</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: { xs: 1, md: 0 } }}>
            &copy; 2026 Serendib Journeys (Pvt) Ltd. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Colombo &bull; Kandy &bull; Galle
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
