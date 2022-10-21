import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import VehicleDetailForm from "../components/Forms/VehicleDetailForm";
import SellVehicle from "../pages/SellVehicle/SellVehicle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sell-my-car",
        element: <SellVehicle />,
      },
    ],
  },
]);
