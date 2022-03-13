import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-image">
        <div className="bg-container">
          <h1>NannyS Hub</h1>
          <h2>Things better with Mary</h2>
          <Link to="/">Book Now!</Link>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
