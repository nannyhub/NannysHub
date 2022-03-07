import React from "react";

export const FooteR = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div>
              <h5>Ask to the Community</h5>
            </div>
            <div>
              <h5>FAQ's</h5>
            </div>
            <div>
              <h5>Contact Us</h5>
            </div>
            <div>
              <h5>About Us</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid text-end">© 2022 Copyright</div>
        <div className="justify-content-center">
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </div>
      </footer>
    </>
  );
};
