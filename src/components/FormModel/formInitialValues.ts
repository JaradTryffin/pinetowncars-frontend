import SellCar from "./SellCar";

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
    name,
    surname,
    email,
    phone,
  },
} = SellCar;

export default {
  [make.name]: "",
  [model.name]: "",
  [year.name]: "",
  [fuel.name]: "",
  [transmission.name]: "",
  [variant.name]: "",
  [odometer.name]: "",
  [condition.name]: "",
  [name.name]: "",
  [surname.name]: "",
  [email.name]: "",
  [phone.name]: "",
};
