import React from "react";
import { Box, Typography, IconButton, Container, Grid, Divider, Link as MuiLink, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { TikTokIcon } from "./TikTokIcon";
import logo from "../assets/img/logo.webp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(10, 10, 12, 0.95)",
        backdropFilter: "blur(10px)",
        color: "white",
        pt: 10,
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3, textAlign: { xs: "center", md: "left" }, display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
              <Avatar
                src={logo}
                alt="Logo"
                sx={{
                  width: "80px",
                  height: "80px",
                  mb: 2,
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
                }}
              />
              <Typography variant="h5" sx={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: 2, mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                MASTER BEAT
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: { xs: "100%", md: "300px" }, mx: { xs: "auto", md: 0 } }}>
                Creando experiencias sonoras únicas y atmósferas inolvidables. Tu evento, mi ritmo.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "var(--primary)", textAlign: { xs: "center", md: "left" } }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: { xs: "center", md: "flex-start" } }}>
              {[
                { text: "Inicio", path: "/" },
                { text: "Servicios", path: "/services" },
                { text: "Sobre Mí", path: "/about" }
              ].map((item) => (
                <MuiLink
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "var(--primary)" }
                  }}
                >
                  {item.text}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "var(--primary)", textAlign: { xs: "center", md: "left" } }}>
              Sígueme
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 3, textAlign: { xs: "center", md: "left" } }}>
              Mantente al día con las últimas mezclas y eventos en mis redes sociales.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}>
              {[
                { icon: <FacebookIcon />, color: "#1877F2", url: "https://www.facebook.com/profile.php?id=61561577709534" },
                { icon: <InstagramIcon />, color: "#E4405F", url: "https://www.instagram.com/mastterbeat" },
                { icon: <YouTubeIcon />, color: "#FF0000", url: "https://www.youtube.com/@DJAlexMasterBeat" },
                { icon: <TikTokIcon />, color: "#000000", url: "https://www.tiktok.com/@mastterbeat" },
                { icon: <WhatsAppIcon />, color: "#25D366", url: "https://wa.me/573128022330" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: social.color,
                      transform: "translateY(-5px)",
                      boxShadow: `0 5px 15px ${social.color}88`
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" } }}>
              <EmailIcon sx={{ color: "var(--primary)" }} />
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                djalexmasterbeat2021@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.05)" }} />

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", gap: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)", width: { xs: "100%", md: "auto" } }}>
            © {new Date().getFullYear()} MASTER BEAT. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", gap: 4, justifyContent: "center", width: { xs: "100%", md: "auto" } }}>
            <Link href="#" sx={{ color: "rgba(255,255,255,0.4)", variant: "body2", textDecoration: "none", "&:hover": { color: "white" } }}>
              Política de Privacidad
            </Link>
            <Link href="#" sx={{ color: "rgba(255,255,255,0.4)", variant: "body2", textDecoration: "none", "&:hover": { color: "white" } }}>
              Términos de Uso
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
