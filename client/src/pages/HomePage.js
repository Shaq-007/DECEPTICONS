import React, { useContext, useState } from "react";
import "../components/Homepage.css";
import "../components/Fonts.css";
import { Link, useHistory } from "react-router-dom";
import GoPlayIcon from "../images/video6.svg";
import { AuthContext } from "../components/AuthContext";

const HomePage = (props) => {
  // let setToken = props.setToken;
  // let setUser = props.setUser;
  let setLoggedIn = props.setLoggedIn;
  let loggedIn = props.loggedIn;
  let userlevel = props.userlevel;
  let setUserlevel = props.setUserlevel;

  const {
    user,
    setUser,
    email,
    setEmail,
    token,
    setToken,
    imagesUpload,
    setImagesUpload,
  } = useContext(AuthContext);

  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted email: 
      ${email} password: ${password}`);
    checkDetailsInServer();
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
        // const token = data.token
        setToken(data.token);
        setUser(data.currentUser);
        setUserlevel(data.currentUser.userlevel);
        console.log("here is the response", message);
        console.log("this is the data token", data.token);
        console.log("this is the token", token);
        setLoggedIn(true);
        setUserlevel(data.currentUser.userlevel);
        setImagesUpload(imagesUpload);
        console.log("this is our currentUser", data.currentUser.userlevel);
        console.log("this is our currentUser", userlevel);
        console.log("hello user");
        if (data.currentUser.userlevel === 10) {
          goAdmin();
        } else {
          goParentDashboard();
        }
      } else if (data.errors[0].password) {
        console.log(
          "Something went wrong, check your email / password:",
          data.errors[0].password
        );
        setLoggedIn("Password is  " + data.errors[0].password);
      } else {
        console.log("User ", data.errors[0].user);
        setLoggedIn("User  " + data.errors[0].user);
      }
    } catch (error) {
      // setLoggedIn(error.message);
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

  return (
    <div className="backgroundHomePageImage">
      <div className="col-12 col-lg-12 title">MemoryLand</div>

      <div className="card col-10 col-lg-5  description-card">
        Welcome to a flipping card memory game. Hit PLAY, choose the category
        and pick two cards to find the right match. Have Fun! Suitable for kids
        4+
      </div>

      <br />

      <div class="row">
        <div className="col-12 col-lg-3 offset-lg-4 playIcon-column">
          <Link to="/play">
            <img
              src={GoPlayIcon}
              style={{
                width: "300px",
                hight: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
              }}
              alt="play icon"
            />
          </Link>
        </div>

        <br />

        <div className="mb-4"></div>

        <div className="card col-8 col-lg-3 login-card mt-2 hv-center loginCard">
          <form onSubmit={handleSubmit}>
            <div className="form-text instruction">Parent Login</div>

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
              {/* <br /> */}
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

              {loggedIn ? (
                <span style={{ color: "black", fontWeight: "600" }}>
                  {loggedIn}
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
