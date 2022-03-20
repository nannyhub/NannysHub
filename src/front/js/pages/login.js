import React from "react";
import "../../styles/login.css";

const Login = () => {
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
          <form>
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example34"
                    checked
                  />
                  <label class="form-check-label" for="form2Example34">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              id="sign"
            >
              Sign in
            </button>

            {/* <!-- Register buttons --> */}
            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-dark btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-dark btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-dark btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-dark btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
