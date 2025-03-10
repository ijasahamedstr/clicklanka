import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp } from '@mui/icons-material';

const Topbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '10px 20px', sm: '10px 60px' },
        backgroundColor: '#1c2833',
        color: 'white',
        flexWrap: 'wrap',
        fontFamily: '"Changa", sans-serif',
      }}
    >
      {/* Contact Information */}
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap', fontFamily: '"Changa", sans-serif' }}>
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: '"Changa", sans-serif',
            '&:hover': { color: '#ff5d1b' },
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          <Phone sx={{ marginRight: 1, fontSize: '1.2rem' }} /> (+94) 770683809
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: '"Changa", sans-serif',
            '&:hover': { color: '#ff5d1b' },
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          <Email sx={{ marginRight: 1, fontSize: '1.2rem' }} /> Clicklanka97@gmail.com
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: '"Changa", sans-serif',
            '&:hover': { color: '#ff5d1b' },
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          <LocationOn sx={{ marginRight: 1, fontSize: '1.2rem' }} /> 55/1 Mathavan Road Kalmunai-03
        </Typography>
      </Box>

      {/* Social Media Icons - Hidden on Mobile Devices and Visible Only on Desktop */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }, // Hides icons on mobile (xs) and displays on desktop (md and up)
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}
      >
        {[Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp].map((Icon, index) => (
          <IconButton
            key={index}
            color="inherit"
            sx={{
              color: 'white',
              '&:hover': { color: '#ff5d1b' },
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              padding: '5px',
            }}
            component="a"
            href="#"
            target="_blank"
          >
            <Icon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Topbar;
