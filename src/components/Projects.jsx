import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Tabs, 
  Tab,
  Fade
} from "@mui/material";
import { ProjectCard } from "./ProjectCard";

// Images
import projImg1 from "../assets/images/dj1.jpg";
import projImg2 from "../assets/images/dj2.jpg";
import projImg3 from "../assets/images/dj3.jpg";
import projImg4 from "../assets/images/dj4.jpg";
import projImg5 from "../assets/images/dj5.jpg";
import projImg6 from "../assets/images/dj6.jpg";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Electro Festival 2025",
      description: "Live Mix & Visuals",
      imgUrl: projImg1,
      url: "#",
      category: 0
    },
    {
      title: "Neon Nights",
      description: "Club Residency",
      imgUrl: projImg2,
      url: "#",
      category: 0
    },
    {
      title: "Summer Vibes",
      description: "Beach Party Set",
      imgUrl: projImg3,
      url: "#",
      category: 0
    },
    {
      title: "Underground Beats",
      description: "Techno Session",
      imgUrl: projImg4,
      url: "#",
      category: 1
    },
    {
      title: "Corporate Gala",
      description: "Elegant Ambience",
      imgUrl: projImg5,
      url: "#",
      category: 1
    },
    {
      title: "Private Wedding",
      description: "Personalized Mix",
      imgUrl: projImg6,
      url: "#",
      category: 2
    }
  ];

  const filteredProjects = projects.filter(p => activeTab === 0 || p.category === activeTab - 1);

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 15 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: "var(--font-display)", 
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(45deg, var(--primary), var(--secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" }
            }}
          >
            PROYECTOS & SETS
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", mx: "auto", px: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            Explora una selección de mis mejores presentaciones y producciones musicales.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 4, md: 6 } }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              maxWidth: "100%",
              "& .MuiTabs-indicator": { bgcolor: "var(--primary)", height: "3px" },
              "& .MuiTab-root": { 
                color: "rgba(255,255,255,0.5)", 
                fontWeight: 700,
                fontSize: { xs: "0.85rem", md: "1rem" },
                minWidth: { xs: "100px", md: "160px" },
                "&.Mui-selected": { color: "var(--primary)" }
              }
            }}
          >
            <Tab label="Todos" />
            <Tab label="Festivales" />
            <Tab label="Clubes" />
            <Tab label="Privados" />
          </Tabs>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={500 + index * 200}>
                <Box>
                  <ProjectCard {...project} />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
