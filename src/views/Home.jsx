import React from "react";
/* import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; */
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Banner />
      <Carousel />
      {/* <Paper
        sx={{
          backgroundColor: "#231059ff",
          padding: (theme) => theme.spacing(4),
          marginRight: (theme) => theme.spacing(47),
          marginLeft: (theme) => theme.spacing(47),
          maxWidth: "xl",
          borderRadius: (theme) => theme.spacing(2),
          boxShadow: (theme) => theme.shadows[4],
          marginTop: (theme) => theme.spacing(20),
          marginBottom: (theme) => theme.spacing(20),
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: (theme) => theme.spacing(2),
            textAlign: "center",
            color: "white",
          }}
        >
          DJ Alex MasterBeat
        </Typography>
        <Typography sx={{ color: "white" }}>
          ¡Bienvenidos a la presentación de nuestra innovadora aplicación{" "}
          <strong style={{ color: "lightblue", fontWeight: "bold" }}>
            TransferManagement
          </strong>{" "}
          basada en la tecnología NFC (Near Field Communication)!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: (theme) => theme.spacing(2),
            marginTop: (theme) => theme.spacing(6),
            color: "white",
          }}
        >
          ¿Qué es NFC?
        </Typography>
        <Typography sx={{ color: "white" }}>
          <strong style={{ fontWeight: "bold", color: "white" }}>
            Near Field Communication (NFC)
          </strong>{" "}
          es una tecnología de comunicación inalámbrica de corto alcance que
          permite la transmisión de datos entre dispositivos compatibles cuando
          están muy cerca uno del otro.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: (theme) => theme.spacing(2),
            marginTop: (theme) => theme.spacing(6),
            color: "white",
          }}
        >
          Características Clave de TransferManagement
        </Typography>
        <List sx={{ pl: (theme) => theme.spacing(6) }}>
          <ListItem sx={{ color: "white" }}>
            <strong style={{ color: "lightblue", fontWeight: "bold" }}>
              Transferencia Rápida de Datos:
            </strong>{" "}
            Comparte datos e información con solo tocar tu dispositivo NFC.
          </ListItem>
          <ListItem sx={{ color: "white" }}>
            <strong style={{ color: "lightblue", fontWeight: "bold" }}>
              Seguridad de Nivel Empresarial:
            </strong>{" "}
            Protocolos avanzados de seguridad para proteger tus transferencias.
          </ListItem>
          <ListItem sx={{ color: "white" }}>
            <strong style={{ color: "lightblue", fontWeight: "bold" }}>
              Interfaz Intuitiva:
            </strong>{" "}
            Diseñada para ser fácil de usar por personas de todas las edades.
          </ListItem>
          <ListItem sx={{ color: "white" }}>
            <strong style={{ color: "lightblue", fontWeight: "bold" }}>
              Registro de Historial:
            </strong>{" "}
            Mantiene un registro de todas tus transferencias NFC anteriores.
          </ListItem>
        </List>
      </Paper> */}
      <Footer />
    </>
  );
}

export default Home;
