import React, { useState } from "react";
import "../components/Signuppage.css";
import "../components/Fonts.css";

// const SignupPage = () => {
//   return (
//     <div className="BackgroundSignUpImage">
//       <div className="formAlignmentSignUp">
//         <div className="form-text instructionSignUp">New User Signup</div>
//         <div>
//           <label for="exampleInputName" className="form-label">
//             Email address
//           </label>
//           <input
//             type="name"
//             className="form-control"
//             id="exampleInputName"
//             aria-describedby="namelHelp"
//           /><br/>
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//           <br/>
//           <label for="exampleInputPassword1" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword2"
//           />
//         </div>
//         <div className="mb-3"></div>

//         <br />
//         <button type="submit" className="btn btn-warning">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

const SignupPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

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
    } else {
      alert("Passwords do not match");
      console.log("heeeeelp");
    }
  };

  const sendDetailsToServer = async (newEmail, newPassword) => {
    let response = await fetch("/users/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newEmail,
        password: newPassword,
        password_confirmation: newPassword,
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

  return (
    <div className="BackgroundSignUpImage">
      <div className="card col-10 col-lg-4 login-card mt-2 hv-center">
        <div className="form-text instructionSignUp">New User Signup</div>
        <form>
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
            Register
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SignupPage;
