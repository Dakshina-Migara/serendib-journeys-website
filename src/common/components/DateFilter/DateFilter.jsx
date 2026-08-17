import React from 'react';
import { Box, Typography, TextField as MuiTextField } from '@mui/material';

export default function DateFilter({ label = 'Arrival Date', id, sx = {}, ...props }) {

    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', ...sx }}>
            {label && (
                <Typography component="label" htmlFor={inputId} sx={{ mb: 1, fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1.5, color: '#1A3631', textTransform: 'uppercase', ml: 0.5 }}>
                    {label}
                </Typography>
            )}
            <MuiTextField id={inputId} type="date" variant="outlined" fullWidth InputProps={{ sx: { backgroundColor: '#ffffff', borderRadius: '12px', color: '#2b2b2b', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.3s ease', '& fieldset': { borderColor: '#E8E8E8', transition: 'all 0.3s ease' }, '&:hover': { boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }, '&:hover fieldset': { borderColor: '#D0D0D0' }, '&.Mui-focused': { backgroundColor: '#ffffff', boxShadow: '0 0 0 4px rgba(44, 94, 85, 0.12)' }, '&.Mui-focused fieldset': { borderColor: '#2C5E55', borderWidth: '1px' }, '& input': { py: 1.6, px: 2, fontSize: '0.95rem', fontFamily: 'inherit' }, '& input::-webkit-calendar-picker-indicator': { cursor: 'pointer', opacity: 0.4, transition: '0.2s', padding: '4px', '&:hover': { opacity: 0.9, transform: 'scale(1.1)' } } } }} {...props} />
        </Box>
    );
}