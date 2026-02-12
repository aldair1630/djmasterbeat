import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Paper,
  InputAdornment
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TikTokIcon } from "../components/TikTokIcon";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.nombre) tempErrors.nombre = "El nombre es obligatorio";
    if (!formData.correo) {
      tempErrors.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      tempErrors.correo = "Correo inválido";
    }
    if (formData.telefono && !/^\d{10}$/.test(formData.telefono)) {
      tempErrors.telefono = "Debe tener 10 dígitos";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", formData);
      alert("¡Mensaje enviado con éxito! (Simulación)");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 12, md: 15 },
        pb: { xs: 8, md: 10 },
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: { xs: "30px", md: "40px" },
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                background: "linear-gradient(45deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
                mb: 2
              }}
            >
              CONTACTO
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "0.9rem", md: "1rem" } }}>
              ¿Tienes un evento en mente? Hablemos y hagámoslo realidad.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="nombre"
                  label="Nombre"
                  variant="filled"
                  value={formData.nombre}
                  onChange={handleChange}
                  error={!!errors.nombre}
                  helperText={errors.nombre}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "var(--primary)" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="apellido"
                  label="Apellido"
                  variant="filled"
                  value={formData.apellido}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "var(--primary)" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="correo"
                  label="Correo Electrónico"
                  variant="filled"
                  value={formData.correo}
                  onChange={handleChange}
                  error={!!errors.correo}
                  helperText={errors.correo}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "var(--primary)" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="telefono"
                  label="Teléfono"
                  variant="filled"
                  value={formData.telefono}
                  onChange={handleChange}
                  error={!!errors.telefono}
                  helperText={errors.telefono}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "var(--primary)" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="mensaje"
                  label="Tu Mensaje"
                  variant="filled"
                  value={formData.mensaje}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon sx={{ color: "var(--primary)", mt: -10 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: "12px" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: "50px",
                    bgcolor: "var(--primary)",
                    color: "black",
                    fontWeight: 800,
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "var(--secondary)",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0, 242, 255, 0.4)"
                    }
                  }}
                >
                  ENVIAR MENSAJE
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ mt: 6, pt: 6, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "white", mb: 3, fontWeight: 700 }}>
              O contáctame directamente
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/573128022330"
                target="_blank"
                sx={{
                  color: "#25D366",
                  borderColor: "#25D366",
                  borderRadius: "15px",
                  "&:hover": { borderColor: "#128C7E", bgcolor: "rgba(37, 211, 102, 0.1)" }
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/mastterbeat"
                target="_blank"
                sx={{
                  color: "#E4405F",
                  borderColor: "#E4405F",
                  borderRadius: "15px",
                  "&:hover": { borderColor: "#D62976", bgcolor: "rgba(228, 64, 95, 0.1)" }
                }}
              >
                Instagram
              </Button>
              <Button
                variant="outlined"
                startIcon={<TikTokIcon />}
                href="https://www.tiktok.com/@mastterbeat"
                target="_blank"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "15px",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" }
                }}
              >
                TikTok
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "var(--primary)" }} />
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                djalexmasterbeat2021@gmail.com
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;
