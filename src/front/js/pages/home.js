import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Testimonials from "../component/Testimonials";
import Pricing from "../component/Pricing";
import Header from "../component/Header";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Pricing />
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;

/*
            <Pricing />
            <Testimonials />
*/
