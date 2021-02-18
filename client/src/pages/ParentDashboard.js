import React, { useContext } from "react";
import UploadModal from "../components/UploadModal";
import { withRouter } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import "../pages/ParentDashboard.css";

const ParentDashboard = () => {
  const {
    user,
    categoryName,
    setCategoryName,
    imagesUpload,
    // setImagesUpload,
  } = useContext(AuthContext);

  const handleSubmitClick = () => {
    goPlayNow();
  };
  const history = useHistory();
  const goPlayNow = () => {
    history.push("play");
  };

  console.log("this is the imagesUpload state", user.imagesUpload);

  return (
    <div className="backgroundParentDashBoard">
      <div className="parentDashboard">
        <h2
          className="parent-title"
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Henny Penny",
            color: "purple",
            marginLeft: "2rem",
          }}
        >
          Hello {user.username}! This is your Parent Dashboard.{" "}
        </h2>
        {/* <h4
          className="dashboard-description"
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            // fontFamily: "Happy Monkey",
          }}
        >
          You can upload your images or change your password.
        </h4> */}
      </div>
      <br />
      {/* this is the first card */}
      <div
        className="card col-10"
        style={{ margin: "auto", backgroundColor: "transparent" }}
      >
        <div
          className="card-header"
          style={{
            fontFamily: "Happy Monkey",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          Create Custom Category
        </div>
        <div className="card-body">
          <p className="card-text">
            Have fun with creating a custom category by uploading your own
            images. Have your kid enjoy finding a match same as with other
            categories.
          </p>

          <UploadModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
        </div>

        <div className="card-body">
          {user.imagesUpload || imagesUpload ? (
            <p className="card-text">
              Now your kid can go have fun with your own images!
            </p>
          ) : (
            <p className="card-text">
              Go play without your own images or load them by using the button
              above{" "}
            </p>
          )}
          <button
            type="button"
            className="btn btn-warning goPlay"
            onClick={handleSubmitClick}
            style={{
              marginLeft: 0,
            }}
          >
            Go Play
          </button>
        </div>
      </div>
      <br />

      {/* this is the second card */}

      <div
        className="card col-10"
        style={{ margin: "auto", backgroundColor: "transparent" }}
      >
        <div
          className="card-header"
          style={{
            fontFamily: "Happy Monkey",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          Change Password
        </div>
        <div className="card-body">
          <p className="card-text">
            Think your password is compromised? We've got your back. Here you
            can change it with just a click!
          </p>

          <ChangePasswordModal user={user} />
        </div>
      </div>
      <br />
      {/* this is the third card */}
      <div
        className="card col-10"
        style={{ margin: "auto", backgroundColor: "transparent" }}
      >
        <div
          className="card-header"
          style={{
            fontFamily: "Happy Monkey",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          Delete Account
        </div>
        <div className="card-body">
          <p className="card-text">
            We will be sad to see you leave but we have an option for you to do
            that as well.
          </p>

          <DeleteAccountModal user={user} />
        </div>
      </div>

      <br />
    </div>
  );
};

export default withRouter(ParentDashboard);
