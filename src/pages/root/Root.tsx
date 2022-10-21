import Navbar from "../../components/Navbar";
import LabelBottomNavigation from "../../components/Footer";
import React from "react";
import {Outlet} from "react-router-dom";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <LabelBottomNavigation />
    </React.Fragment>
  );
};
export default Root;
