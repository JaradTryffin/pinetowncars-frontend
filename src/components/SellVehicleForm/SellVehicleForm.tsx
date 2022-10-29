import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";
import React, { useEffect } from "react";
import {
  productApi,
  useGetVehiclesQuery,
  useGetYearsQuery,
} from "../../redux/features/apiSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { makeToStore } from "../../redux/features/counterSlice";
import type { RootState } from "../../redux/store";

const SellVehicleForm = () => {
  // @ts-ignore
  const { data: vehicleMake } = useGetVehiclesQuery();
  // @ts-ignore
  const { data: years } = useGetYearsQuery();

  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const dispatch = useDispatch();
  const make: TypedUseSelectorHook<RootState> = useSelector(
    (state: any) => state.make.value
  );

  //fetch model
  const [trigger, result] = productApi.endpoints.getModels.useLazyQuery();

  const handleChange = (event: any) => {
    dispatch(makeToStore(event.target.value));
  };
  useEffect(() => {
    if (make) {
      trigger(make);
    }
  }, [make, trigger]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Make</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={make}
              label="Make"
              onChange={handleChange}
            >
              {vehicleMake?.data.map((vehicle: any) => (
                <MenuItem key={vehicle.id} value={vehicle.name}>
                  {vehicle.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={model}
              label="Model"
              disabled={!make}
              onChange={(e) => setModel(e.target.value)}
            >
              {result.currentData?.data.map((model: any) => (
                <MenuItem key={model.id} value={model.name}>
                  {model.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Year"
              value={year}
            >
              {years.map((year: any) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SellVehicleForm;
