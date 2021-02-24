import React, { useContext, useState } from "react";
import "../components/Homepage.css";
import "../components/Fonts.css";
import { Link, useHistory } from "react-router-dom";
import GoPlayIcon from "../images/video6.svg";
import { AuthContext } from "../components/AuthContext";

const HomePage = (props) => {
  let setMessageError = props.setLoggedIn;
  let messageError = props.loggedIn;
  let userlevel = props.userlevel;
  let setUserlevel = props.setUserlevel;

  const {
    user,
    setUser,
    email,
    setEmail,
    imagesUpload,
    setImagesUpload,
  } = useContext(AuthContext);

  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkDetailsInServer();
  };

  const checkDetailsInServer = async () => {
    try {
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
        setUser(data.currentUser);
        setUserlevel(data.currentUser.userlevel);
        setMessageError(true);
        setUserlevel(data.currentUser.userlevel);
        setImagesUpload(imagesUpload);
        if (data.currentUser.userlevel === 10) {
          goAdmin();
        } else if (data.currentUser.userlevel === 8) {
          goParentDashboard();
        } else {
          goPlayNow();
        }
      } else if (data.errors[0].password) {
        console.log(
          "Something went wrong, check your email / password:",
          data.errors[0].password
        );
        setMessageError("Password is  " + data.errors[0].password);
      } else {
        console.log("User ", data.errors[0].user);
        setMessageError("User  " + data.errors[0].user);
      }
    } catch (error) {
      console.log("there is an error with the fetch", error);
    }
  };

  const history = useHistory();
  const goParentDashboard = () => {
    history.push("parent");
  };

  const goAdmin = () => {
    history.push("admin");
  };

  const history1 = useHistory();
  const goPlayNow = () => {
    history1.push("play");
  };

  return (
    <div className="backgroundHomePageImage">
      <div className="col-12 col-lg-12 title">MemoryLand</div>

      <div className="card col-10 col-lg-8  description-card">
        Welcome to a flipping card memory game. Hit PLAY, choose the category
        and pick two cards to find the right match. Have Fun! Suitable for kids
        4+
      </div>

      <br />

      <div className="row row-homePage">
        <div className="col-12 col-lg-4 offset-lg-2 playIcon-column">
          <Link to="/play">
            <img className="goPlay-Icon" src={GoPlayIcon} alt="play icon" />
          </Link>
        </div>

        <br />

        <div className="mb-4"></div>

        <div className="card col-8 col-lg-3 offset-lg-1 login-card mt-2 hv-center loginCard">
          <form onSubmit={handleSubmit}>
            <div className="form-text instruction">Parent Login</div>

            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                autoComplete="username"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
                onChange={({ target }) => setPassword(target.value)}
              />

              {messageError ? (
                <span style={{ color: "black", fontWeight: "600" }}>
                  {messageError}
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div className="mb-2"></div>

            <button type="submit" className="btn btn-primary submit">
              Login
            </button>
          </form>

          <div className="form-text newUser">
            New User Signup
            <Link to="/signup">
              <button type="submit" className="btn btn-warning">
                Sign Up
              </button>
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
