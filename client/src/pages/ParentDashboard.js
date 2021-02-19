import React, { useContext } from "react";
import UploadModal from "../components/UploadModal";
import { withRouter } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import Logout from "../components/Logout";

const ParentDashboard = () => {
  // const [categoryName, setCategoryName] = useState("");

  const {
    user,
    setUser,
    categoryName,
    setCategoryName,
    upload,
    setUpload,
    imagesUpload,
    setImagesUpload,
  } = useContext(AuthContext);

  const handleSubmitClick = () => {
    goPlayNow();
  };
  const history = useHistory();
  const goPlayNow = () => {
    history.push("play");
  };

  console.log("this is the imagesUpload state", user.imagesUpload);
  // const handleCheckboxChange = () => {
  //   setUpload(true);
  // };
  return (
    <div>
      <h2 className="parent-title">
        Hello {user.username}! Welcome to your Dashboard.{" "}
      </h2>
      <h4 className="dashboard-description">
        Please see parental control options below:
      </h4>
      <br />
      {/* this is the first card */}
      <div className="card col-10">
        <div className="card-header">Create Custom Category</div>
        <div className="card-body">
          <p className="card-text">
            Have fun creating a custom category by uploading your own
            photos. You and your child can play with your very own custom pictures!
          </p>

          <UploadModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
        </div>
        {/* <div
          className="form-check"
          style={{ marginLeft: "65%", fontSize: "20px", fontWeight: "600" }}
        > */}
        {/* <input
            className="form-check-input"
            type="checkbox"
            value={upload}
            onChange={handleCheckboxChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I have loaded images already
          </label> */}
        {/* </div> */}
        <div className="card-body">
          {user.imagesUpload || imagesUpload ? (
            <p className="card-text">
              Now your child can have fun with your own images!
            </p>
          ) : (
            <p className="card-text">
              Play with preselected categories or upload your own images by using the button
              above{" "}
            </p>
          )}
          <button
            type="button"
            className="btn btn-warning goPlay"
            onClick={handleSubmitClick}
          >
            Go play
          </button>
        </div>
      </div>
      <br />

      {/* this is the third card */}

      {/* <div className="card col-10"> */}
      {/* <div className="card-header">Go Play</div> */}

      {/* </div> */}

      {/* this is the second card */}

      <div className="card col-10">
        <div className="card-header">Change Password</div>
        <div className="card-body">
          <p className="card-text">
            Think your password is compromised? We've got your back. You can easily change your password here!
          </p>

          <ChangePasswordModal user={user} />
        </div>
      </div>
      <br />

      <div className="card col-10">
        <div className="card-header">Delete Account</div>
        <div className="card-body">
          <p className="card-text">
            Need to delete your account? We will be sad to see you leave!
          </p>

          <DeleteAccountModal user={user} />
          <Logout />
        </div>
      </div>

      <br />
    </div>
  );
};

export default withRouter(ParentDashboard);
