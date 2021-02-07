import React, { useState } from "react";
import "../components/Homepage.css";
import "../components/Fonts.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const HomePage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted email: 
      ${email} password: ${password}`);
    checkDetailsInServer();
    // if (email === `${email}` && password === `${password}`) {
    //   setLoggedIn(true);
    //   console.log("hello user");
    //   goPlay();
    // } else {
    //   console.log(
    //     "this is checking what is the password",
    //     password,
    //     `${password}`
    //   );
    //   alert(
    //     "Something went wrong! Please, enter your email and password again."
    //   );
    // }
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

      if (data.success === true) {
        setToken(data.access_token);
        setUser(data.user);
        // console.log('here is the response', message)
        setLoggedIn(true);
        console.log("hello user");
        goPlay();
      } 
      else {
       console.log("Something went wrong, check your email / password:", data.errors[0].password);
       setLoggedIn(data.errors[0].password)
      }
    } catch (error) {
      setLoggedIn(error.message)
      console.log("there is an error with the fetch", error);
    }
  };

  const history = useHistory();
  const goPlay = () => {
      history.push("play");
  };

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
            <br></br>
            {loggedIn ? <span style={{ color: "Black" }}>{'username/password is:'+ loggedIn}</span> : <span></span>}
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
