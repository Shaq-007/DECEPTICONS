import React, { useState } from "react";
import "../components/Signuppage.css";
import "../components/Fonts.css";
import { useHistory } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";

const SignupPage = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    userlevel: "1",
  });
  const [signedUp, setSignedUp] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.password_confirmation) {
      sendDetailsToServer();
      setSignedUp(true);
      goPlayNow();
    } else {
      console.log("Passwords do not match");
    }
  };

  const sendDetailsToServer = async () => {
    console.log(
      state.username,
      state.email,
      state.password,
      state.password_confirmation,
      state.userlevel
    );
    let response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: state.username,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
        userlevel: state.userlevel,
      }),
    });

    let data = await response.json();
    let message = JSON.stringify(data);
    console.log(message);

    if (response.status === 200) {
      return message;
    } else {
      throw Error.message;
    }
  };

  const history = useHistory();
  const goPlayNow = () => {
    history.push("play");
  };

  return (
    <div className="BackgroundSignUpImage">
      <GoBackButton />
      <div className="card col-10 col-lg-4 login-card mt-2 hv-center">
        <div className="form-text instructionSignUp">New User Signup</div>
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              value={state.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password_confirmation"
              placeholder="Confirm Password"
              value={state.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitClick}
          >
            Register and Play
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SignupPage;
