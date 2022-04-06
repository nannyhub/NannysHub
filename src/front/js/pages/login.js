import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  console.log("This is your token", store.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
    console.log("test Click");
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/search");

  return (
    <>
      <div className="container-fluid col-4">
        <div className="text-center mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            id="avatar"
          ></img>
        </div>
        <div className="container fluid justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={changeHandler}
              ></input>
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input
                type="text"
                placeholder="password"
                value={password}
                onChange={changeHandlerPassword}
              ></input>
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              id="sign"
            >
              Log In
            </button>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>
                Not a member? <a href="/signup">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-dark btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-dark btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-dark btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-dark btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
