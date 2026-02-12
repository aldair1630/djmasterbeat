import React from "react";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Projects } from "../components/Projects";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Banner />
      <Box sx={{ mt: { xs: 5, md: 10 } }}>
        <Projects />
      </Box>
      <Carousel />
      <Footer />
    </Box>
  );
}

export default Home;
