import React from "react";
import { Link } from "react-router-dom";

export const FooteR = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div>
              <Link to="/">
                <h6>Ask to the Community</h6>
              </Link>
            </div>
            <div>
              <Link to="/">
                <h6>FAQ's</h6>
              </Link>
            </div>
            <div>
              <Link to="/">
                <h6>Contact Us</h6>
              </Link>
            </div>
            <div>
              <Link to="/">
                <h6>About Us</h6>
              </Link>
            </div>
          </div>
        </div>
        <div id="icons" class="container md">
          <div className="container-fluid text-center">
            <i class="fa-brands fa-twitter fa-1x"></i>
            <i class="fa fa-instagram fa-1x" aria-hidden="true"></i>
            <i class="fa fa-facebook-official fa-1x" aria-hidden="true"></i>
          </div>
        </div>
        <div id="signature" className="container-fluid text-center">
          © 2022 Copyright The 3 Musketeers
        </div>
      </footer>
    </>
  );
};
