import React, { useContext } from "react";
// import { Context } from "../store/appContext";
import "../../styles/home.css";

import Testimonials from "../component/Testimonials";
import Pricing from "../component/Pricing";
import Header from "../component/Header";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Pricing />
      <Testimonials />
    </React.Fragment>
  );
};
