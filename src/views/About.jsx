import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import StarIcon from "@mui/icons-material/Star";
import SpeakerIcon from "@mui/icons-material/Speaker";
import EventIcon from "@mui/icons-material/Event";
import djAbout from "../assets/images/dj1.jpg"; // Using an existing image as profile

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stats = [
    { label: "Años Exp.", value: "10+", icon: <StarIcon /> },
    { label: "Eventos", value: "500+", icon: <EventIcon /> },
    { label: "Mixes", value: "100+", icon: <MusicNoteIcon /> },
    { label: "Equipos", value: "Pro", icon: <SpeakerIcon /> }
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Side: Image with effects */}
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                position: "relative",
                maxWidth: { xs: "280px", sm: "400px", md: "100%" },
                mx: "auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: { xs: -10, md: -20 },
                  left: { xs: -10, md: -20 },
                  right: { xs: 10, md: 20 },
                  bottom: { xs: 10, md: 20 },
                  border: "2px solid var(--primary)",
                  borderRadius: { xs: "20px", md: "40px" },
                  zIndex: 0
                }
              }}
            >
              <Paper
                elevation={24}
                sx={{
                  position: "relative",
                  borderRadius: { xs: "20px", md: "40px" },
                  overflow: "hidden",
                  zIndex: 1,
                  boxShadow: "0 0 40px rgba(0, 242, 255, 0.3)"
                }}
              >
                <img 
                  src={djAbout} 
                  alt="DJ Master Beat" 
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </Paper>
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={7}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontFamily: "var(--font-display)", 
                fontWeight: 800,
                background: "linear-gradient(45deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 3,
                textAlign: { xs: "center", md: "left" }
              }}
            >
              SOBRE MÍ
            </Typography>
            
            <Typography variant="h5" sx={{ color: "white", mb: 3, fontWeight: 600, textAlign: { xs: "center", md: "left" }, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
              Pasión por el ritmo, dedicación al espectáculo.
            </Typography>
            
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 4, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" }, textAlign: { xs: "center", md: "left" } }}>
              Con más de una década en la escena musical, Master Beat ha transformado cada presentación en un viaje sensorial. Especializado en mezclar ritmos electrónicos con tendencias urbanas, mi objetivo es crear la atmósfera perfecta para que cada invitado se pierda en la música.
              <br /><br />
              No solo toco música, construyo experiencias. Desde bodas elegantes hasta festivales masivos, cada set es cuidadosamente seleccionado para vibrar con la energía de la audiencia.
            </Typography>

            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: "center",
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "var(--primary)"
                      }
                    }}
                  >
                    <Box sx={{ color: "var(--primary)", mb: 1 }}>{stat.icon}</Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: 800, fontSize: { xs: "1rem", md: "1.25rem" } }}>{stat.value}</Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontSize: { xs: "0.65rem", md: "0.75rem" } }}>{stat.label}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Equipment Section */}
        <Box sx={{ mt: { xs: 8, md: 15 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: "center", 
              fontFamily: "var(--font-display)", 
              color: "white", 
              mb: { xs: 4, md: 8 },
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            MI GEAR <span style={{ color: "var(--primary)" }}>PROFESIONAL</span>
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {[
              { title: "Controladores", desc: "Pioneer DJ DDJ-1000 de última generación." },
              { title: "Audio", desc: "Sistemas de sonido JBL Professional & EV." },
              { title: "Producción", desc: "FL Studio, Sound Forge & Ableton Live." },
              { title: "Software DJ", desc: "Deejaysystem Video DJ, Rekordbox & Serato." }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box 
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    borderRadius: { xs: "20px", md: "30px" }, 
                    background: "rgba(255,255,255,0.02)", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    height: "100%",
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  <Typography variant="h6" sx={{ color: "var(--secondary)", mb: 2, fontWeight: 700, fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mt: { xs: 8, md: 15 } }} className="reveal reveal-fade-up">
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: "center", 
              fontFamily: "var(--font-display)", 
              color: "white", 
              mb: { xs: 4, md: 8 },
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            PREGUNTAS <span style={{ color: "var(--primary)" }}>FRECUENTES</span>
          </Typography>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            {[
              {
                q: "¿Llevas tu propio equipo de sonido e iluminación?",
                a: "Sí, cuento con sistemas profesionales de audio (JBL, EV) e iluminación robótica controlada por DMX para adaptarme a cualquier tamaño de evento."
              },
              {
                q: "¿Puedes tocar géneros específicos a pedido?",
                a: "¡Absolutamente! Mi trabajo es crear la atmósfera que deseas. Coordinamos el setlist previamente para asegurar que tus géneros favoritos sean los protagonistas."
              },
              {
                q: "¿Trabajas fuera de la ciudad?",
                a: "Sí, realizo presentaciones a nivel nacional e internacional. Los costos de traslado se cotizan de forma independiente según la ubicación."
              },
              {
                q: "¿Con cuánta anticipación debo reservar?",
                a: "Recomiendo reservar con al menos 2 a 4 semanas de anticipación para asegurar la fecha, especialmente en temporadas altas de eventos."
              }
            ].map((faq, index) => (
              <Accordion 
                key={index}
                sx={{ 
                  background: "rgba(255,255,255,0.02)", 
                  color: "white",
                  mb: 2,
                  borderRadius: "15px !important",
                  border: "1px solid rgba(255,255,255,0.05)",
                  "&::before": { display: "none" },
                  "&:hover": { borderColor: "var(--primary)" }
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon sx={{ color: "var(--primary)" }} />}
                  sx={{ py: 1 }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: 3 }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
