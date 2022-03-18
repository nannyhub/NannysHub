import React, { useContext } from "react";
import "../../styles/home.css";

import Testimonials from "../component/Testimonials";
import Pricing from "../component/Pricing";
import Header from "../component/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Pricing />
      <Testimonials />
    </>
  );
};
