import React from 'react';
import { Box, Typography, TextField as MuiTextField } from '@mui/material';

export default function TextField({ label, placeholder, id, sx = {}, ...props }) {

    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', ...sx }}>
            {label && (
                <Typography component="label" htmlFor={inputId} sx={{ mb: 1, fontSize: '0.8rem', fontWeight: 600, letterSpacing: 1.2, color: '#2C5E55', textTransform: 'uppercase' }}>
                    {label}
                </Typography>
            )}
            <MuiTextField id={inputId} placeholder={placeholder} variant="outlined" fullWidth InputProps={{ sx: { backgroundColor: '#fcfaf5', borderRadius: '6px', color: '#2C5E55', '& fieldset': { borderColor: '#e8e4d9' }, '&:hover fieldset': { borderColor: '#d3ccb8' }, '&.Mui-focused fieldset': { borderColor: '#2C5E55' } } }} {...props} />
        </Box>
    );
}