import React, {useContext} from "react";
import UploadModal from "../components/UploadModal";
import { withRouter } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { useHistory } from "react-router-dom";
import {AuthContext} from '../components/AuthContext';

const ParentDashboard = () => {
  // const [categoryName, setCategoryName] = useState("");

  const {categoryName, setCategoryName} = useContext(AuthContext);

  const handleSubmitClick = ()=> {
    goPlayNow();
  }
  const history = useHistory();
  const goPlayNow = () => {
    history.push("play");
  };

  return (
    <div>
      <h2 className="parent-title">Hello Parent! This is your Dashboard. </h2>
      <h4 className="dashboard-description">
        You can upload your pictures or change your password.
      </h4>
      <br />
      {/* this is the first card */}
      <div className="card col-10">
        <div className="card-header">Create Custom Category</div>
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
      </div>
      <br />

      {/* this is the second card */}
      <div className="card col-10">
        <div className="card-header">Change Password</div>
        <div className="card-body">
          <p className="card-text">
            Think your password is compromised? We've got your back. Here you
            can change it with just a click!
          </p>
          {/* <button type="button" className="btn btn-primary">
            Change Password
          </button> */}
          <ChangePasswordModal />
        </div>
      </div>
      <br />

      <div className="card col-10">
        <div className="card-header">Delete Account</div>
        <div className="card-body">
          <p className="card-text">
            We will be sad to see you leave but we have an option for you to do
            that as well.
          </p>
          <button type="button" className="btn btn-danger">
            Delete Account
          </button>
        </div>
      </div>

      <br />

      <div className="card col-10">
        <div className="card-header">Go Play</div>
        <div className="card-body">
          <p className="card-text">
            Now your kid can go have fun with you own images!
          </p>
          <button type="button" className="btn btn-warning" onClick={handleSubmitClick}>
            Go play
          </button>
        </div>
      </div>

    </div>
  );
};

export default withRouter(ParentDashboard);
