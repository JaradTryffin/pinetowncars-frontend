import SellCar from "../../components/FormModel/SellCar";
import VehicleDetailForm from "../../components/Forms/VehicleDetailForm";
import { useState } from "react";
import AboutYou from "../../components/Forms/AboutYou";
import {
  Stepper,
  Typography,
  Step,
  Container,
  StepLabel,
  Button,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import formInitialValues from "../../components/FormModel/formInitialValues";

const SellVehicle = () => {
  const steps = ["Vehicle Info", "About you"];
  const { formId, formField } = SellCar;
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const _sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const _submitForm = async (values: any, actions: any) => {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    setActiveStep(activeStep + 1);
  };

  const _handleSubmit = (values: any, actions: any) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const _renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <VehicleDetailForm formField={formField} />;
      case 1:
        return <AboutYou formField={formField} />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h3" align="center">
        Sell my car
      </Typography>

      <Container>
        <Formik initialValues={formInitialValues} onSubmit={_handleSubmit}>
          {({ isSubmitting }) => (
            <Paper elevation={3}>
              <Form id={formId}>
                {_renderStepContent(activeStep)}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    m: 4,
                  }}
                >
                  <Box>
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#86ad50",
                          "&:hover": { backgroundColor: "#536735" },
                        }}
                        onClick={_handleBack}
                      >
                        Back
                      </Button>
                    )}
                  </Box>
                  <Button
                    sx={{
                      backgroundColor: "#86ad50",
                      "&:hover": { backgroundColor: "#536735" },
                      mb: 4,
                    }}
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Box>
              </Form>
            </Paper>
          )}
        </Formik>
      </Container>
      <Container sx={{ mt: 5 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </React.Fragment>
  );
};

export default SellVehicle;
