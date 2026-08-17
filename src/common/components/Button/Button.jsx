import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function Button({ children, variant = 'contained', href, sx = {}, ...props }) {

  return (
    <MuiButton
      variant={variant}
      href={href}
      sx={{
        borderRadius: '30px',
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: 'none',
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1.2 },
        fontSize: { xs: '0.875rem', sm: '1rem', xl: '1.125rem' },
        ...(variant === 'contained' && {
          backgroundColor: '#EAB252',
          color: '#2b2b2b',
          '&:hover': {
            backgroundColor: '#d9a349',
            boxShadow: 'none',
          },
        }),
        ...(variant === 'outlined' && {
          borderColor: 'rgba(255, 255, 255, 0.6)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#ffffff',
          },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};