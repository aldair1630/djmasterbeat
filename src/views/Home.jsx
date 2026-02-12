import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Projects } from "../components/Projects";
import Testimonials from "../components/Testimonials";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Banner />
      <Box className="reveal reveal-fade-up" sx={{ mt: { xs: 5, md: 10 } }}>
        <Projects />
      </Box>
      <Box className="reveal reveal-fade-up">
        <Testimonials />
      </Box>
      <Box className="reveal reveal-fade-up">
        <Carousel />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
