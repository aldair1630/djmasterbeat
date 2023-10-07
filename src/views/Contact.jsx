import React, { useState } from "react";
import Draggable from "react-draggable";
import { Box, TextField, Button, Grid } from "@mui/material";

function Contact() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const boxWidth = 500;
  const boxHeight = 550;

  const initialLeft = (windowWidth - boxWidth) / 2;
  const initialTop = (windowHeight - boxHeight) / 2;

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [pais, setPais] = useState("");
  const [correoError, setCorreoError] = useState(false);
  const [telefonoError, setTelefonoError] = useState(false);

  const validarCorreo = () => {
    const correoValido = /\S+@\S+\.\S+/;
    setCorreoError(!correoValido.test(correo));
  };

  const validarTelefono = () => {
    const telefonoValido = /^\d{10}$/;
    setTelefonoError(!telefonoValido.test(telefono));
  };

  return (
    <Draggable defaultPosition={{ x: initialLeft, y: initialTop }}>
      <Box
        sx={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          "&.tinted": {
            backgroundImage:
              'linear-gradient(0deg, rgba(255,255,255,.2), rgba(255,255,255,.2)), url("https://lh3.googleusercontent.com/-m8TxQMObg6c/U474EWu7Y9I/AAAAAAAAI2k/xkRGoIEC1iU/s1600/blur.jpg")',
          },
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "550px",
            maxHeight: "auto",
            position: "absolute",
            borderRadius: "5px",
            boxShadow: "0 20px 30px rgba(0,0,0,.6)",
            border: "1px solid rgba(255,255,255,.3)",
            padding: "20px",
            textAlign: "center",
            boxSizing: "border-box",
            textShadow: "0 1px 1px rgba(0,0,0,.4)",
            display: "flex",
            transition: "box-shadow .3s ease",
            "&:active": {
              cursor: "move",
              boxShadow: "0 20px 50px rgba(0,0,0,.9)",
            },
          }}
        >
          <Box sx={{ margin: "auto" }}>
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              inputProps={{ style: { color: "white" } }}
              sx={{ mb: 2 }}
            />
            <TextField
              id="apellido"
              label="Apellido"
              variant="outlined"
              fullWidth
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              inputProps={{ style: { color: "white" } }}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <TextField
                  id="pais"
                  label="País"
                  variant="outlined"
                  fullWidth
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  inputProps={{ style: { color: "white" } }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="telefono"
                  label="Número Telefónico"
                  variant="outlined"
                  fullWidth
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  onBlur={validarTelefono}
                  error={telefonoError}
                  helperText={telefonoError ? "Número no válido" : ""}
                  inputProps={{ style: { color: "white" } }}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <TextField
              id="correo"
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              onBlur={validarCorreo}
              error={correoError}
              helperText={correoError ? "Correo no válido" : ""}
              inputProps={{ style: { color: "white" } }}
              sx={{ mb: 2 }}
            />
            <TextField
              id="mensaje"
              label="Mensaje"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              inputProps={{ style: { color: "white" } }}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "transparent", color: "black" }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
}

export default Contact;
