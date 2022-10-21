import React from "react";
import { Box, Container } from "@mui/material";
import Hero from "../../components/Hero";
import ImageSection from "../../components/ImageSection";

const Home = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Hero />
      </Container>
      <ImageSection />
    </Box>
  );
};

export default Home;
