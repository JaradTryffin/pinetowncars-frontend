import { useField, useFormik } from "formik";
import { at } from "lodash";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";

const SelectField = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  // function _renderHelperText() {
  //   if (isError) {
  //     return <FormHelperText>{error}</FormHelperText>;
  //   }
  // }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        {...field}
        value={selectedValue ? selectedValue : ""}
        variant="standard"

      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {/*{_renderHelperText()}*/}
    </FormControl>
  );
};

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};
export default SelectField;
