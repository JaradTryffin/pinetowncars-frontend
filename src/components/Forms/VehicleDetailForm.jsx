import {
  Box,
  CircularProgress,
  createFilterOptions,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import SelectField from "../FormFields/SelectField";
import { productApi, useGetVehiclesQuery } from "../../redux/features/apiSlice";
import { useField } from "formik";

const VehicleDetailForm = (props) => {
  const {
    formField: {
      make,
      model,
      year,
      fuel,
      transmission,
      variant,
      odometer,
      condition,
    },
  } = props;

  const { data: vehicleData, isLoading, isSuccess } = useGetVehiclesQuery();
  //fetch model
  const [field] = useField(make.name);
  console.log(field.value);
  const [trigger] = productApi.endpoints.getModels.useLazyQuery();

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Typography variant="h5" align="center">
            Vehicle Details
          </Typography>
          <Grid container spacing={3}>
            <Grid sx={{ m: 1 }} item xs={6}>
              <SelectField
                sx={{ width: "90%" }}
                name={make?.name}
                label={make?.label}
                data={vehicleData?.data}
                disabled={!isSuccess}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default VehicleDetailForm;
