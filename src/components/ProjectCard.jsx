import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        "&:hover .overlay": { opacity: 1 },
        "&:hover .content": { transform: "translateY(0)" },
        "&:hover img": { transform: "scale(1.1)" }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.5s ease",
          cursor: "pointer",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.06)",
            borderColor: "rgba(0, 242, 255, 0.3)",
          }
        }}
      >
        {/* Image Container */}
        <Box sx={{ position: "relative", height: "250px", minHeight: "250px", overflow: "hidden" }}>
          <img 
            src={imgUrl} 
            alt={title} 
            loading="lazy"
            decoding="async"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              transition: "transform 0.6s ease"
            }} 
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800'; // Fallback a una imagen de DJ genérica si falla la carga
            }}
          />

          {/* Overlay on Hover */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to top, rgba(10,10,12,0.95) 0%, rgba(0,242,255,0.4) 100%)",
              opacity: 0,
              transition: "opacity 0.4s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              zIndex: 1
            }}
          >
            <Typography variant="caption" sx={{ color: 'white', fontWeight: 800, letterSpacing: 2 }}>
              ESCUCHAR AHORA
            </Typography>
            <Link
              href={url}
              target="_blank"
              sx={{
                color: "white",
                bgcolor: "var(--primary)",
                p: 2,
                borderRadius: "50%",
                display: "flex",
                boxShadow: "0 0 20px var(--primary)",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 0 30px var(--primary)"
                },
                transition: "all 0.3s ease"
              }}
            >
              <LaunchIcon sx={{ color: "black" }} />
            </Link>
          </Box>
        </Box>

        {/* Text Content */}
        <Box
          className="content"
          sx={{
            p: 3,
            transform: "translateY(10px)",
            transition: "transform 0.4s ease"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 1,
              fontFamily: "var(--font-display)"
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.85rem"
            }}
          >
            {description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
