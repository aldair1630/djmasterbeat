import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Container,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTransition, animated } from "react-spring";

import dj1 from "../assets/images/dj1.jpg";
import dj2 from "../assets/images/dj2.jpg";
import dj3 from "../assets/images/dj3.jpg";
import dj4 from "../assets/images/dj4.jpg";
import dj5 from "../assets/images/dj5.jpg";
import dj6 from "../assets/images/dj6.jpg";

function Carousel() {
  const images = [dj1, dj2, dj3, dj4, dj5, dj6];
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'scale(1.1) translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'scale(1) translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'scale(0.9) translate3d(-50%,0,0)' },
    config: { tension: 280, friction: 60 },
  });

  const next = () => setIndex((state) => (state + 1) % images.length);
  const prev = () => setIndex((state) => (state - 1 + images.length) % images.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ my: { xs: 8, md: 15 }, position: "relative" }}>
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: "var(--font-display)", 
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", md: "3.5rem" }
          }}
        >
          GALLERY
        </Typography>
        <Box sx={{ width: "60px", height: "4px", background: "var(--primary)", mx: "auto", borderRadius: "2px" }} />
      </Box>

      <Box 
        sx={{ 
          position: "relative", 
          height: { xs: "300px", sm: "450px", md: "700px" }, 
          width: "100%", 
          overflow: "hidden",
          borderRadius: { xs: "20px", md: "30px" },
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        {transitions((style, i) => (
          <animated.div
            style={{
              ...style,
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${images[i]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Gradient Overlay */}
            <Box 
              sx={{ 
                width: "100%", 
                height: "100%", 
                background: "linear-gradient(to top, rgba(10,10,12,0.8) 0%, transparent 40%)" 
              }} 
            />
          </animated.div>
        ))}

        {/* Navigation Controls */}
        <Box 
          sx={{ 
            position: "absolute", 
            top: "50%", 
            width: "100%", 
            display: "flex", 
            justifyContent: "space-between", 
            px: 3,
            transform: "translateY(-50%)",
            zIndex: 2
          }}
        >
          <IconButton 
            onClick={prev}
            sx={{ 
              bgcolor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(10px)",
              color: "white",
              "&:hover": { bgcolor: "var(--primary)", color: "black" }
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton 
            onClick={next}
            sx={{ 
              bgcolor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(10px)",
              color: "white",
              "&:hover": { bgcolor: "var(--primary)", color: "black" }
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Indicators */}
        <Box 
          sx={{ 
            position: "absolute", 
            bottom: 30, 
            left: "50%", 
            transform: "translateX(-50%)", 
            display: "flex", 
            gap: 1.5,
            zIndex: 2 
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: i === index ? "40px" : "12px",
                height: "12px",
                borderRadius: "6px",
                bgcolor: i === index ? "var(--primary)" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: i === index ? "0 0 10px var(--primary)" : "none"
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Carousel;
