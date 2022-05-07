import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div id="links" className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div>
              <Link to="/login" id="sm">
                <h6>Log In</h6>
              </Link>
            </div>
            <div>
              <Link to="/faq" id="sm">
                <h6>FAQ's</h6>
              </Link>
            </div>
            <div>
              <Link to="/contacts" id="sm">
                <h6>Contact Us</h6>
              </Link>
            </div>
            <div>
              <Link to="/search" id="sm">
                <h6>Search Nannies</h6>
              </Link>
            </div>
          </div>
        </div>
        <div id="icons-container" className="container md">
          <div id="icons" className="container-fluid text-center">
            <a
              target="_blank"
              title="follow us on Twitter"
              href="https://twitter.com/hashtag/nannies"
            >
              <i
                id="sm"
                className="fa fa-brands fa-twitter"
                href="https://twitter.com/hashtag/nannies"
              ></i>
            </a>
            <a
              target="_blank"
              title="follow me on instagram"
              href="https://www.instagram.com/explore/tags/nannies/?hl=es"
            >
              <i id="sm" className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              title="follow me on facebook"
              href="https://es-la.facebook.com/NannyAgencyPortugal/"
            >
              <i
                id="sm"
                className="fa fa-facebook-official"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div id="signature" className="container-fluid text-center">
            <p>© 2022 Copyright. Made by Alex, David, Maise and Vitor</p>
          </div>
        </div>
      </footer>
    </>
  );
};
