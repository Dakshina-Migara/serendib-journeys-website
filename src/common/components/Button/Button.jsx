import React from 'react';
import { Button as MuiButton } from '@mui/material';

/**
 * A highly reusable, responsive, and SEO-friendly Button.
 * Built strictly using MUI's native Button component to keep it simple.
 */
const Button = ({ 
  children, 
  variant = 'contained', // MUI uses 'contained' for solid backgrounds
  href, 
  sx = {},
  ...props 
}) => {
  return (
    <MuiButton
      variant={variant}
      // SEO: Passing 'href' automatically tells MUI to render an HTML <a> tag
      href={href}
      sx={{
        borderRadius: '30px',
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: 'none',
        
        // Responsive sizing across all devices (Mobile to 4K)
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1.2 },
        fontSize: { xs: '0.875rem', sm: '1rem', xl: '1.125rem' },
        
        // Styling for the Amber solid button
        ...(variant === 'contained' && {
          backgroundColor: '#EAB252',
          color: '#2b2b2b',
          '&:hover': {
            backgroundColor: '#d9a349',
            boxShadow: 'none',
          },
        }),
        
        // Styling for the Transparent outlined button
        ...(variant === 'outlined' && {
          borderColor: 'rgba(255, 255, 255, 0.6)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#ffffff',
          },
        }),
        
        // Apply any extra custom styles passed from the parent
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
