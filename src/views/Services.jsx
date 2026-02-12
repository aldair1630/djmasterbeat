import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Icon,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SpeakerIcon from "@mui/icons-material/Speaker";
import RadioIcon from "@mui/icons-material/Radio";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import HeadsetIcon from "@mui/icons-material/Headset";
import CelebrationIcon from "@mui/icons-material/Celebration";

function Services() {
  const services = [
    {
      title: "DJ para Eventos",
      desc: "Mezclas en vivo para bodas, fiestas privadas, corporativos y festivales. Un setlist personalizado para cada ocasión.",
      icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #00f2ff 0%, #0072ff 100%)",
    },
    {
      title: "Producción Musical",
      desc: "Creación de pistas originales, remixes y arreglos profesionales. Transformo tus ideas en hits listos para sonar.",
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #7000ff 0%, #d100ff 100%)",
    },
    {
      title: "Audio Profesional",
      desc: "Alquiler y montaje de sistemas de sonido de alta fidelidad (JBL, EV) para garantizar la mejor acústica.",
      icon: <SpeakerIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #ff007a 0%, #ff5e00 100%)",
    },
    {
      title: "Streaming y Radio",
      desc: "Transmisiones en vivo de alta calidad y producción de contenido para estaciones de radio y plataformas digitales.",
      icon: <RadioIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)",
    },
    {
      title: "Grabación de Voces",
      desc: "Captura de voces con equipos de estudio premium, ideal para locuciones, podcasts y producciones musicales.",
      icon: <MicExternalOnIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Asesoría Artística",
      desc: "Consultoría para nuevos talentos sobre equipo, software y técnica de mezcla para llevar tu carrera al siguiente nivel.",
      icon: <HeadsetIcon sx={{ fontSize: 40 }} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            textAlign: "center",
            mb: 2,
            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}
        >
          MIS SERVICIOS
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            mb: { xs: 6, md: 10 },
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            fontWeight: 400,
          }}
        >
          Ofrezco soluciones integrales en música y sonido, combinando tecnología de vanguardia con años de experiencia en la industria.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "30px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderColor: "var(--primary)",
                    "& .service-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      filter: "drop-shadow(0 0 10px var(--primary))",
                    },
                  },
                }}
              >
                <Box
                  className="service-icon"
                  sx={{
                    mb: 3,
                    color: "var(--primary)",
                    transition: "all 0.4s ease",
                    display: "inline-block",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.desc}
                </Typography>
                
                {/* Decorative background circle */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: service.gradient,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
