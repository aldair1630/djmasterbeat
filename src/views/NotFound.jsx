import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import MusicOffIcon from '@mui/icons-material/MusicOff';

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: 15,
        background: 'var(--bg-dark)',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            mb: 4
          }}
        >
          <MusicOffIcon 
            sx={{ 
              fontSize: { xs: 100, md: 150 }, 
              color: 'var(--primary)',
              filter: 'drop-shadow(0 0 20px var(--primary))',
              animation: 'pulse 2s infinite'
            }} 
          />
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: { xs: '5rem', md: '8rem' },
              fontWeight: 900,
              opacity: 0.1,
              color: 'white',
              zIndex: -1,
              fontFamily: 'var(--font-display)'
            }}
          >
            404
          </Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '3.5rem' },
            mb: 2,
            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ¡EL DISCO SE RAYÓ!
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            mb: 6,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Parece que la pista que buscas no está en nuestra playlist. 
          Vuelve al inicio para seguir disfrutando del mejor beat.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            bgcolor: 'var(--primary)',
            color: 'black',
            fontWeight: 800,
            px: 6,
            py: 2,
            borderRadius: '50px',
            fontSize: '1.1rem',
            '&:hover': {
              bgcolor: 'var(--secondary)',
              transform: 'scale(1.05)',
              boxShadow: '0 0 30px var(--secondary)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          VOLVER AL SHOW
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
