import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div id="links" class="container text-center">
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
        <div id="icons-container" class="container md">
          <div id="icons" className="container-fluid text-center">
            <i id="twitter" class="fa fa-brands fa-twitter"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </div>
          <div id="signature" className="container-fluid text-center">
            <p>© 2022 Copyright</p>
          </div>
        </div>
      </footer>
    </>
  );
};
