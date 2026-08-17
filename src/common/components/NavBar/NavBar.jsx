import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button as MuiButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CustomButton from '../Button/Button';

// Default navigation links
const defaultPages = [
  { label: 'Home', path: '/' },
  { label: 'Tours', path: '/tours' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

/**
 * A reusable, responsive, and SEO-friendly NavBar component.
 * 
 * @param {Array} pages - Array of objects { label, path } for navigation links
 * @param {string} logoText - Main text for the logo
 * @param {string} logoSubText - Subtitle text for the logo
 * @param {string} actionButtonText - Text for the main call-to-action button
 * @param {string} actionButtonPath - URL for the call-to-action button
 * @param {React.ReactNode} LogoIcon - Icon component to display next to the logo
 */
function NavBar({
  pages = defaultPages,
  logoText = 'Serendib Journeys',
  logoSubText = 'SRI LANKA',
  actionButtonText = 'Plan Your Trip',
  actionButtonPath = '/plan',
  LogoIcon = ExploreOutlinedIcon,
  ...props
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ 
          border: '1px solid rgba(44, 94, 85, 0.5)', 
          borderRadius: '50%', 
          p: 0.5, 
          mr: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <LogoIcon sx={{ color: '#2C5E55' }} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          {/* SEO: Link on mobile logo */}
          <Typography variant="h6" component="a" href="/" sx={{ fontWeight: 700, lineHeight: 1, color: '#2C5E55', fontFamily: 'serif', textDecoration: 'none' }}>
            {logoText}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', fontSize: '0.6rem', letterSpacing: 2, color: '#666' }}>
            {logoSubText}
          </Typography>
        </Box>
      </Box>
      
      {/* SEO: Using <nav> tag for semantic HTML */}
      <nav aria-label="mobile navigation">
        <List>
          {pages.map((item) => (
            <ListItem key={item.label} disablePadding>
              {/* SEO: Using component="a" and href for crawler indexing */}
              <ListItemButton component="a" href={item.path} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} sx={{ color: '#2b2b2b' }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CustomButton href={actionButtonPath}>
              {actionButtonText}
            </CustomButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    // SEO: Wrapping in semantic component="nav"
    <AppBar position="static" component="nav" sx={{ backgroundColor: 'rgba(35, 75, 68, 0.95)', boxShadow: 'none' }} {...props}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* DESKTOP LOGO */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <Box sx={{ 
              border: '1px solid rgba(255, 255, 255, 0.5)', 
              borderRadius: '50%', 
              p: 0.5, 
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LogoIcon sx={{ color: 'white' }} />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              {/* SEO: Logo acts as a link to home */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: 'block',
                  fontFamily: 'serif',
                  fontWeight: 700,
                  letterSpacing: '.05rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  lineHeight: 1.2
                }}
              >
                {logoText}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', fontSize: '0.65rem', letterSpacing: 2, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1 }}>
                {logoSubText}
              </Typography>
            </Box>
          </Box>

          {/* MOBILE MENU ICON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* MOBILE LOGO */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>
             <Box sx={{ 
              border: '1px solid rgba(255, 255, 255, 0.5)', 
              borderRadius: '50%', 
              p: 0.5, 
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LogoIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="subtitle1"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: 'block',
                  fontFamily: 'serif',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  lineHeight: 1.1
                }}
              >
                {logoText}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', fontSize: '0.55rem', letterSpacing: 1.5, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1 }}>
                {logoSubText}
              </Typography>
            </Box>
          </Box>

          {/* DESKTOP LINKS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 4 }}>
            {pages.map((page) => (
              <MuiButton
                key={page.label}
                component="a"
                href={page.path}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  textTransform: 'none', 
                  // Responsive font sizes for desktop/laptop/4k
                  fontSize: { md: '0.95rem', lg: '1rem', xl: '1.1rem' }, 
                  mx: { md: 1, lg: 1.5, xl: 2 },
                  '&:hover': {
                    color: '#EAB252',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {page.label}
              </MuiButton>
            ))}
          </Box>

          {/* DESKTOP BUTTON */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {/* Reusing our custom Button component */}
            <CustomButton href={actionButtonPath}>
              {actionButtonText}
            </CustomButton>
          </Box>
        </Toolbar>
      </Container>
      
      {/* MOBILE DRAWER */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
