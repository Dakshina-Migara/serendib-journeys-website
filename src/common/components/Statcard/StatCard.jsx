import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';
export default function StatCard({ title = 'Day Tours', description = 'Single-day excursions from Colombo, Kandy, Ella or Galle — temples, waterfalls, tea factories and city walks.', linkText = 'Learn More', linkUrl = '/tours', sx = {}, ...props }) {
  return (
    <Card component="article" sx={{ borderRadius: '8px', border: '1px solid #eaeaec', boxShadow: 'none', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }, ...sx }} {...props}>
      <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, fontFamily: 'serif', color: '#002828', mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem', xl: '1.75rem' } }}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: '#555', lineHeight: 1.6, mb: 4, flexGrow: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          {description}
        </Typography>
        {linkUrl && (
          <Link href={linkUrl} underline="none" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: '#004d40', fontSize: '0.95rem', width: 'fit-content', '&:hover': { color: '#002828' } }}>
            {linkText}
          </Link>
        )}
      </CardContent>
    </Card>
  );
}