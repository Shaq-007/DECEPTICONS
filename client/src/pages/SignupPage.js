import React from "react";
import "../components/Signuppage.css";
import "../components/Fonts.css";
const SignupPage = () => {
  return (
    <div className="BackgroundSignUpImage">
      <div className="formAlignmentSignUp">
        <div className="form-text instructionSignUp">New User Signup</div>
        <div>
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="namelHelp"
          />
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3"></div>

        <br />
        <button type="submit" className="btn btn-warning">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
