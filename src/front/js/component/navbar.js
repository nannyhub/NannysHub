import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <Link to="/">
          <img
            id="mary"
            src="https://cdn.dribbble.com/users/2068059/screenshots/5856152/attachments/1261679/child_care_logo_by_visual_curve_02.png?compress=1&resize=800x600&vertical=top"
            alt=""
          ></img>
        </Link>
        <div className="ml-auto"></div>
        <div className="justify-content-end">
          {store.token == null || store.token == undefined ? (
            <div className="d-flex">
              <button type="button" className="btn" id="button1">
                <Link to="/login" id="ss">
                  Login
                </Link>
              </button>
              <button type="button" className="btn" id="button2">
                <Link to="/signup" id="ss">
                  Sign Up
                </Link>
              </button>
            </div>
          ) : (
            <Link to="/">
              <button
                onClick={() => actions.logout()}
                className="btn btn-primary"
              >
                Log out
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
