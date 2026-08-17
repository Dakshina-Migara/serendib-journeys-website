import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button as MuiButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CustomButton from '../Button/Button';

const defaultPages = [
  { label: 'Home', path: '#' },
  { label: 'About', path: '#about' },
  { label: 'Destinations', path: '#destinations' },
  { label: 'Tours', path: '#tours' },
  { label: 'Contact', path: '#contact' }
];

export default function NavBar({ pages = defaultPages, logoText = 'Serendib Journeys', logoSubText = 'SRI LANKA', actionButtonText = 'Plan Your Trip', actionButtonPath = '/plan', LogoIcon = ExploreOutlinedIcon, ...props }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const textColor = isScrolled ? '#2C5E55' : 'white';
  const subTextColor = isScrolled ? '#666' : 'rgba(255, 255, 255, 0.8)';
  const navItemColor = isScrolled ? '#2b2b2b' : 'white';
  const iconBorderColor = isScrolled ? 'rgba(44, 94, 85, 0.5)' : 'rgba(255, 255, 255, 0.5)';
  const navBgColor = isScrolled ? '#F4F1EA' : 'transparent';
  const boxShadow = isScrolled ? '0px 2px 4px -1px rgba(0,0,0,0.1)' : 'none';

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ border: '1px solid rgba(44, 94, 85, 0.5)', borderRadius: '50%', p: 0.5, mr: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogoIcon sx={{ color: '#2C5E55' }} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h6" component="a" href="/" sx={{ fontWeight: 700, lineHeight: 1, color: '#2C5E55', fontFamily: 'serif', textDecoration: 'none' }}>
            {logoText}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', fontSize: '0.6rem', letterSpacing: 2, color: '#666' }}>
            {logoSubText}
          </Typography>
        </Box>
      </Box>
      <nav aria-label="mobile navigation">
        <List>
          {pages.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component="a" href={item.path} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} sx={{ color: '#2b2b2b' }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CustomButton href={actionButtonPath}>{actionButtonText}</CustomButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <AppBar position="fixed" component="nav" sx={{ backgroundColor: navBgColor, boxShadow: boxShadow, transition: 'all 0.3s ease-in-out', pt: isScrolled ? 0 : 1, pb: isScrolled ? 0 : 1 }} {...props}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <Box sx={{ border: `1px solid ${iconBorderColor}`, borderRadius: '50%', p: 0.5, mr: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
              <LogoIcon sx={{ color: textColor, transition: 'all 0.3s' }} />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: 'block', fontFamily: 'serif', fontWeight: 700, letterSpacing: '.05rem', color: textColor, textDecoration: 'none', lineHeight: 1.2, transition: 'all 0.3s' }}>
                {logoText}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', fontSize: '0.65rem', letterSpacing: 2, color: subTextColor, lineHeight: 1, transition: 'all 0.3s' }}>
                {logoSubText}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ color: navItemColor, transition: 'all 0.3s' }}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>
            <Box sx={{ border: `1px solid ${iconBorderColor}`, borderRadius: '50%', p: 0.5, mr: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
              <LogoIcon sx={{ color: textColor, fontSize: '1.2rem', transition: 'all 0.3s' }} />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" noWrap component="a" href="/" sx={{ display: 'block', fontFamily: 'serif', fontWeight: 700, color: textColor, textDecoration: 'none', lineHeight: 1.1, transition: 'all 0.3s' }}>
                {logoText}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', fontSize: '0.55rem', letterSpacing: 1.5, color: subTextColor, lineHeight: 1, transition: 'all 0.3s' }}>
                {logoSubText}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 4 }}>
            {pages.map((page) => (
              <MuiButton key={page.label} component="a" href={page.path} sx={{ my: 2, color: navItemColor, display: 'block', textTransform: 'none', fontSize: { md: '0.95rem', lg: '1rem', xl: '1.1rem' }, mx: { md: 1, lg: 1.5, xl: 2 }, transition: 'all 0.3s', '&:hover': { color: '#EAB252', backgroundColor: 'transparent' } }}>
                {page.label}
              </MuiButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <CustomButton href={actionButtonPath}>{actionButtonText}</CustomButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 } }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}