import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#231059",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        minHeight: "calc(100vh - 64px)", // Ajusta esto según tu diseño para evitar problemas de superposición con el encabezado
      }}
    >
      <Typography variant="h4">Política de Privacidad</Typography>
      <Box
        sx={{
          marginTop: "2rem",
          textAlign: "left",
        }}
      >
        <Typography variant="h6">Información que recopilamos</Typography>
        <Typography variant="body1">
          En DJ Alex Master Beat, valoramos tu privacidad y solo recopilamos
          información necesaria para proporcionar nuestros servicios. Esto puede
          incluir tu nombre, dirección de correo electrónico y preferencias de
          música.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          Cómo utilizamos tu información
        </Typography>
        <Typography variant="body1">
          Utilizamos la información recopilada para personalizar tu experiencia
          musical, enviar actualizaciones sobre eventos y mejorar nuestros
          servicios. Nunca compartiremos tu información con terceros sin tu
          consentimiento.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          Cookies
        </Typography>
        <Typography variant="body1">
          Utilizamos cookies para rastrear tu actividad en nuestro sitio web y
          mejorar tu experiencia. Puedes configurar tu navegador para bloquear
          las cookies si lo deseas.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          Cambios en la política de privacidad
        </Typography>
        <Typography variant="body1">
          Nos reservamos el derecho de modificar esta política de privacidad en
          cualquier momento. Cualquier cambio se publicará en esta página.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          Preguntas y Contacto
        </Typography>
        <Typography variant="body1">
          Si tienes alguna pregunta o inquietud acerca de nuestra política de
          privacidad, por favor contáctanos a través de{" "}
          <a href="mailto:info@djalexmasterbeat.com">
            info@djalexmasterbeat.com
          </a>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
