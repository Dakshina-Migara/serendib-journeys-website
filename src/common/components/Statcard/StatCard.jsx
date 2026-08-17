import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * A highly reusable, responsive, and SEO-friendly Card component.
 * Built strictly using native MUI components.
 */
const StatCard = ({
  icon = <WbSunnyOutlinedIcon sx={{ color: '#003333' }} />,
  title = 'Day Tours',
  description = 'Single-day excursions from Colombo, Kandy, Ella or Galle — temples, waterfalls, tea factories and city walks.',
  linkText = 'Learn More',
  linkUrl = '/tours',
  sx = {},
  ...props
}) => {
  return (
    // SEO: component="article" creates semantic HTML for a self-contained widget
    <Card 
      component="article"
      sx={{
        borderRadius: '8px',
        border: '1px solid #eaeaec', // Subtle border from design
        boxShadow: 'none',
        height: '100%', // Ensures uniform height in flex/grid layouts
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
        ...sx
      }}
      {...props}
    >
      <CardContent 
        sx={{ 
          // Responsive padding across devices
          p: { xs: 3, sm: 4 }, 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        {/* Circular Icon Container */}
        <Box 
          sx={{ 
            backgroundColor: '#eef3f2', 
            borderRadius: '50%', 
            width: 52, 
            height: 52, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 3
          }}
        >
          {icon}
        </Box>

        {/* SEO: component="h3" for proper heading hierarchy structure */}
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            fontFamily: 'serif', 
            color: '#002828',
            mb: 2,
            // Responsive font sizing
            fontSize: { xs: '1.25rem', md: '1.5rem', xl: '1.75rem' } 
          }}
        >
          {title}
        </Typography>

        {/* SEO: component="p" for paragraph semantic HTML */}
        <Typography 
          variant="body1" 
          component="p"
          sx={{ 
            color: '#555', 
            lineHeight: 1.6,
            mb: 4,
            flexGrow: 1, // Automatically pushes the link to the bottom
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          {description}
        </Typography>

        {/* SEO: Render an actual <a> tag for Google crawlers */}
        {linkUrl && (
          <Link 
            href={linkUrl}
            underline="none"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              fontWeight: 600, 
              color: '#004d40',
              fontSize: '0.95rem',
              width: 'fit-content', // Only hoverable on the text
              '&:hover': {
                color: '#002828',
                // Add a subtle animation to the arrow on hover!
                '& .MuiSvgIcon-root': {
                  transform: 'translateX(4px)'
                }
              }
            }}
          >
            {linkText}
            <ArrowForwardIcon 
              sx={{ 
                ml: 1, 
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease'
              }} 
            />
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
