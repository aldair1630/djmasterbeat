import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos Rodríguez",
      role: "Novio (Boda en la Playa)",
      text: "¡Increíble! Master Beat mantuvo la pista llena toda la noche. Su capacidad para leer al público es de otro nivel. La iluminación y el sonido fueron impecables.",
      rating: 5,
      avatar: "C"
    },
    {
      name: "Elena Martínez",
      role: "Organizadora de Eventos Corp.",
      text: "Un profesional en toda la extensión de la palabra. Puntual, con equipo de primera y una selección musical que encantó a todos los directivos. 100% recomendado.",
      rating: 5,
      avatar: "E"
    },
    {
      name: "DJ Spark",
      role: "Productor Colega",
      text: "He colaborado con Master Beat en varios festivales y su técnica de mezcla y conocimiento de FL Studio son impresionantes. Un referente en la escena local.",
      rating: 5,
      avatar: "S"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              mb: 2
            }}
          >
            LO QUE DICEN <span style={{ color: 'white', WebkitTextFillColor: 'white' }}>DE MÍ</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', mx: 'auto' }}>
            La satisfacción de quienes han vivido la experiencia Master Beat es mi mejor carta de presentación.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'var(--primary)'
                  }
                }}
              >
                <FormatQuoteIcon 
                  sx={{ 
                    position: 'absolute', 
                    top: 20, 
                    right: 20, 
                    fontSize: 40, 
                    color: 'rgba(0, 242, 255, 0.1)' 
                  }} 
                />
                
                <Box sx={{ mb: 3 }}>
                  <Rating value={review.rating} readOnly size="small" sx={{ color: 'var(--primary)' }} />
                </Box>

                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', mb: 4, lineHeight: 1.7 }}>
                  "{review.text}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'var(--primary)', 
                      color: 'black', 
                      fontWeight: 800,
                      boxShadow: '0 0 15px var(--primary)'
                    }}
                  >
                    {review.avatar}
                  </Avatar>
                  <Box>
                    <Typography sx={{ color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                      {review.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {review.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
