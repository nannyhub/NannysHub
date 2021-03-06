import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Pricing.css";

const Pricing = () => {
  return (
    <>
      <section className="content-container">
        <div className="columns">
          <ul className="price">
            <li className="col-header">Basic</li>
            <li className="grey">9.99 €/ year</li>
            <li>10 message to babbysitters</li>
            <li>1 child</li>
            <li>Full babysitter's details </li>
            <li className="grey">
              <button className="button">
                <Link to="/signup" id="sm">
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="col-header" style={{ backgroundColor: "#f06e26ff" }}>
              Pro
            </li>
            <li className="grey">24.99 € / year</li>
            <li>20 messages to babbysitters</li>
            <li>2 Children</li>
            <li>-10% over babysitter's price per hour. </li>
            <li className="grey">
              <button className="button">
                <Link to="/signup" id="sm">
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="col-header">Premium</li>
            <li className="grey">49.99 € / year</li>
            <li>Unlimited messages to babbysitters</li>
            <li>+3 Children</li>
            <li>-20% over babysitter's price per hour.</li>
            <li className="grey">
              <button className="button">
                <Link to="/signup" id="sm">
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pricing;
