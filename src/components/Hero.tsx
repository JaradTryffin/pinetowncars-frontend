import HeroSlider, { Overlay, Slide } from "hero-slider";
import { Box, Button, Container, Typography } from "@mui/material";
import heroImageOne from "../images/bmw.jpg";
import heroImageTwo from "../images/jeep3.jpg";
import { useNavigate } from "react-router-dom";
import { productApi } from "../redux/features/apiSlice";

const Hero = () => {
  const navigate = useNavigate();
  const [trigger, result, lastPromiseInfo] =
    productApi.endpoints.getModels.useLazyQuery();

  return (
    <HeroSlider
      height={"95vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide):", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "50px" },
            }}
            variant="h2"
          >
            Find your next vehicle
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Button
              sx={{
                mr: "24px",
                backgroundColor: "#86ad50",
                "&:hover": { backgroundColor: "#536735" },
              }}
              variant="contained"
              onClick={() => navigate("/sell-my-car")}
            >
              Sell my car
            </Button>
            <Button
              // @ts-ignore
              onClick={() => trigger('BMW')}
              sx={{
                backgroundColor: "#86ad50",
                "&:hover": { backgroundColor: "#536735" },
              }}
              variant="contained"
            >
              Buy a car
            </Button>
          </Box>
        </Container>
      </Overlay>

      <Slide
        label="Hero image 1"
        background={{ backgroundImageSrc: heroImageOne }}
      />

      <Slide
        label="Hero image 1"
        background={{ backgroundImageSrc: heroImageTwo }}
      />
    </HeroSlider>
  );
};

export default Hero;
