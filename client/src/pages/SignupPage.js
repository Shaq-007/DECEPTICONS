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
  const [signupFail, setSignupFail] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCheckboxChange = () => {
    state.userlevel = 8;
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("signup user: ", state.username);

    if (state.password === state.password_confirmation) {
      sendDetailsToServer();
      // setSignedUp(true);
      // goPlayNow();
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
        password_confirmation: state.password_confirmation, //for checking the match at backend also its a duplication anyway
        userlevel: state.userlevel,
      }),
    });

    let data = await response.json();
    let message = JSON.stringify(data);
    console.log(message);

    if (response.status === 200) {
      setSignedUp(true);
      goPlayNow();
      return message;
    } else {
      console.log("message:", data.errors[0].user);
      setSignupFail(data.errors[0].user + ".  Please Go Back to sign in");
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
        <div className="form-text instructionSignUp">New User Signup</div>{" "}
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
              autoComplete="username"
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
              autoComplete="new-password"
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
              autoComplete="new-password"
              className="form-control"
              id="password_confirmation"
              placeholder="Confirm Password"
              value={state.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div
            className="form-check"
            style={{ fontSize: "20px", fontWeight: "600", marginLeft: "40%" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value={state.userlevel}
              onChange={handleCheckboxChange}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I am a Parent
            </label>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-info"
            onClick={handleSubmitClick}
          >
            Register
          </button>
          <br></br>
          {signupFail ? (
            <span style={{ color: "red", fontWeight: "700" }}>
              {signupFail}
            </span>
          ) : (
            <span></span>
          )}
        </form>
        <br />
      </div>
    </div>
  );
};

export default SignupPage;
