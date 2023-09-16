import { Box } from "@mui/material";
import React from "react";
import Draggable from "react-draggable";

function Contact() {
  // Calcula las coordenadas iniciales para centrar el cuadro
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const boxWidth = 500;
  const boxHeight = 300;
  const initialLeft = (windowWidth - boxWidth) / 2;
  const initialTop = (windowHeight - boxHeight) / 2;

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
            height: "300px",
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
            {/* <h1 sx={{ color: "white", fontWeight: 100 }}>Blurred Background</h1>
            <h2 sx={{ fontSize: "14px" }}>
              By{" "}
              <a
                href="http://ariona.net"
                rel="follow"
                target="_blank"
                sx={{ fontWeight: 700, textDecoration: "none", color: "black" }}
              >
                Ariona, Rian
              </a>
            </h2>
            <p sx={{ margin: "20px" }}>Drag this box to move around</p>
            <p
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#444",
              }}
            >
              See also:{" "}
              <a
                href="https://codepen.io/ariona/details/LVZLGP/"
                target="_blank"
                sx={{
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#444",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Staged Dropdown Animation
              </a>
            </p> */}
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
}

export default Contact;
