import React from "react";
import "../components/Homepage.css";
import "../components/Fonts.css";
const HomePage = () => {
  return (
    <div className="backgroundHomePageImage">
      <h1 className="title">MemoryLand</h1>

      <div className="formAlignment">
        <div className="form-text instruction">Login to Start Playing</div>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3"></div>
        <a href="./play">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </a>
        <br />
        <br />
        <div className="form-text newUser">
          New User Signup
          <br />
          <a href="./signup">
            <button type="submit" className="btn btn-warning">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
