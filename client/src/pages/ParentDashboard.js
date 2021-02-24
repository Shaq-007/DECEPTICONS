import React, { useContext } from "react";
import UploadModal from "../components/UploadModal";
import { withRouter } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import Logout from "../components/Logout";
import "../pages/ParentDashboard.css";
import Credits from "../components/Credits";

const ParentDashboard = () => {
  const { user, categoryName, setCategoryName, imagesUpload } = useContext(
    AuthContext
  );

  const handleSubmitClick = () => {
    goPlayNow();
  };
  const history = useHistory();
  const goPlayNow = () => {
    history.push("play");
  };

  return (
    <div className="backgroundParentDashBoard">
      <Logout />
      <div className="parentDashboard">
        <h2
          className="parent-title"
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Brighly",
            color: "#6426b6",
            marginLeft: "2rem",
          }}
        >
          Hello {user.username}! Welcome to the Parent Dashboard.{" "}
        </h2>
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
            Have fun creating a custom category by uploading your own photos.
            You and your child can play with your very own custom pictures!
          </p>

          <UploadModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
        </div>

        <div className="card-body">
          {user.imagesUpload || imagesUpload ? (
            <p className="card-text">
              Now your child can have fun with your own images!
            </p>
          ) : (
            <p className="card-text">
              Play with preselected categories or upload your own images by
              using the button above{" "}
            </p>
          )}
          <button
            type="button"
            className="btn btn-warning goPlay"
            onClick={handleSubmitClick}
            style={{
              marginLeft: 0,
              backgroundColor: "darkOrange",
              border: "none",
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
            Think your password is compromised? We've got your back. You can
            easily change your password here!
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
            Need to delete your account? We will be sad to see you leave!
          </p>

          <DeleteAccountModal user={user} />
          {/* <Logout /> */}
        </div>
      </div>

      <br />
      <Credits/>
    </div>
  );
};

export default withRouter(ParentDashboard);
