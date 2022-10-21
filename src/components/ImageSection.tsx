import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import images from "../Util/images";

const ImageSection = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: { xs: "18px", md: "25px" } }}
        >
          We have the car for{" "}
          <Box component="span" sx={{ color: "#86ad50" }}>
            you.
          </Box>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "15px", md: "20px" },
            textAlignLast: "center",
          }}
        >
          We also buy cars in a{" "}
          <Box component="span" sx={{ color: "#86ad50" }}>
            heartbeat{" "}
          </Box>
          with{" "}
          <Box component="span" sx={{ color: "#86ad50" }}>
            immediate payment
          </Box>
          .
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {images().map((image) => (
            <Grid item xs={12} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={image.photo} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ImageSection;
