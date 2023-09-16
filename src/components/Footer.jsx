import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#231059",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="h3">Sigueme</Typography>
      <Typography variant="body1">
        Mantente al día con las últimas mezclas y eventos.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <IconButton
          href="https://github.com/tudj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/tudj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/tudj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Tu DJ. Todos los derechos reservados.
        </Typography>
        <Link href="/politica-de-privacidad" variant="body2">
          Política de privacidad
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
