import { Box, Button, Container, Paper, Typography } from "@mui/material";
import CustomizedSteppers from "../../components/stepper/ColorStepper";
import { useState } from "react";
import RenderStepContent from "../../components/SellVehicleForm/RenderStepContent";

const SellVehicle = () => {
  const [activeStep, setActionStep] = useState<number>(0);
  //handle active stepper
  const handleStepperNext = () => {
    setActionStep(activeStep + 1);
  };
  const handleStepperBack = () => {
    setActionStep(activeStep - 1);
  };
  return (
    <Container sx={{ mt: 5 }}>
      <Paper sx={{ pb: 5 }} elevation={3}>
        <Typography variant="h4" align="center">
          Sell your vehicle
        </Typography>
        <CustomizedSteppers activeStep={activeStep} />

        {/*Form Content*/}
        {RenderStepContent(activeStep)}

        {/*    Buttons*/}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            disabled={activeStep <= 0}
            onClick={handleStepperBack}
            sx={{
              backgroundColor: "#86ad50",
              "&:hover": { backgroundColor: "#536735" },
            }}
            variant="contained"
          >
            Back
          </Button>
          <Button
            onClick={handleStepperNext}
            sx={{
              backgroundColor: "#86ad50",
              "&:hover": { backgroundColor: "#536735" },
            }}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SellVehicle;
