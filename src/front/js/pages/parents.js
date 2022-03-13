import React from "react";
import "../../styles/parents.css";

const Parents = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <img
            src="https://previews.123rf.com/images/rosinka79/rosinka791704/rosinka79170400108/77286091-tambov-f%C3%A9d%C3%A9ration-de-russie-21-septembre-2016-portrait-de-la-famille-lego-figurines-d-un-p%C3%A8re-d-une-.jpg"
            id="profile"
          ></img>
          <input id="bio"></input>
        </div>
        <div className="container fluid justify-content-center col-4" id="form">
          <form>
            <div className="row mb-3">
              <label for="inputfirstname" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="firstname"
                  className="form-control"
                  id="firstname"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputlastname" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="lastname"
                  className="form-control"
                  id="lastname"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputpassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id="children">
                Number of Children
              </label>
              <select
                className="form-select form-select-sm col-2"
                aria-label=".form-select-sm example"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="more">More</option>
              </select>
            </div>
          </form>
        </div>
        <button type="button" className="btn btn-primary" id="button">
          Save
        </button>
      </div>
    </>
  );
};
export default Parents;
