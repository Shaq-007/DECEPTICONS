import React, { useState } from "react";
import "../components/Homepage.css";
import "../components/Fonts.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const HomePage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted email: 
      ${email} password: ${password}`);
    checkDetailsInServer();
    if (email === `${email}` && password === `${password}`) {
      setLoggedIn(true);
      console.log("hello user");
      goPlay();
    } else {
      console.log(
        "this is checking what is the password",
        password,
        `${password}`
      );
      alert(
        "Something went wrong! Please, enter your email and password again."
      );
    }
  };

  const checkDetailsInServer = async () => {
    try {
      console.log(email, password);
      let response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let data = await response.json();
      let message = JSON.stringify(data);
      console.log("this is the message", message);

      if (response.status === 200) {
        return message;
      } else {
        throw Error.message;
      }
    } catch (error) {
      console.log("there is an error with the fetch", error);
    }
  };

  const history = useHistory();
  const goPlay = () => {
    if (loggedIn === true) {
      history.push("play");
    }
  };

  // const goPlay = () => {
  //   setLoggedIn(true);
  //   if (loggedIn === true) {
  //     history.push("play");
  //   } else {
  //     console.log("log in again");
  //   }
  // };

  // let data = await response.json();
  // let message = JSON.stringify(data);
  // console.log(message);

  // if (response.status === 200) {
  //   return message;
  // } else {
  //   throw Error.message;
  // }

  return (
    <div className="backgroundHomePageImage">
      <h1 className="title">MemoryLand</h1>

      <div className="card col-10 col-lg-4 login-card mt-2 hv-center loginCard">
        <form onSubmit={handleSubmit}>
          <div className="form-text instruction">Login to Start Playing</div>

          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <br />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="mb-4"></div>

          <button type="submit" className="btn btn-primary submit">
            Login and Play
          </button>
        </form>

        <br />
        <br />

        <div className="form-text newUser">
          New User Signup
          <br />
          <Link to="/signup">
            <button type="submit" className="btn btn-warning">
              Sign Up
            </button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
