import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Slide,
  // Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dj1 from "../assets/images/dj1.jpg";
import dj2 from "../assets/images/dj2.jpg";
import dj3 from "../assets/images/dj3.jpg";
import dj4 from "../assets/images/dj4.jpg";
import dj5 from "../assets/images/dj5.jpg";
import dj6 from "../assets/images/dj6.jpg";

function Carousel() {
  const images = [dj1, dj2, dj3, dj4, dj5, dj6];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para cambiar automáticamente la imagen cada 2 minutos
  const autoChangeSlide = () => {
    handleNextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoChangeSlide, 20000); // 20 segundos en milisegundos
    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Paper
        component="div"
        elevation={3}
        sx={{
          position: "relative",
          height: { xs: 300, md: 600 },
          overflow: "hidden",
          borderRadius: "16px",
          marginTop: "160px",
        }}
      >
        {images.map((image, index) => (
          <Slide
            key={index}
            in={index === activeIndex}
            direction={index === activeIndex ? "left" : "right"}
            timeout={{ enter: 500, exit: 500 }}
            mountOnEnter
            unmountOnExit
          >
            <Box
              component="img"
              src={image}
              alt={`Slide ${index + 1}`}
              sx={{
                position: "absolute",
                top: "0%",
                left: "0%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.5s ease-in-out",
                opacity: index === activeIndex ? 1 : 0,
              }}
            />
          </Slide>
        ))}
      </Paper>
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {images.map((_, index) => (
          <Button
            key={index}
            variant="outlined"
            size="small"
            sx={{
              width: "16px",
              height: "16px",
              borderRadius: "8px",
              padding: 0,
              backgroundColor:
                index === activeIndex ? "primary.main" : "transparent",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
      <Button
        onClick={handlePrevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "16px",
          transform: "translateY(-50%)",
        }}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={handleNextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
        }}
      >
        <ChevronRightIcon />
      </Button>
    </Container>
  );
}

export default Carousel;
