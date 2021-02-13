import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../components/AuthContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "5%",
  },
};
Modal.setAppElement("#root");

const ChangePasswordModal = () => {
  const { user, setUser } = useContext(AuthContext);

  const [newPassword, setNewPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(
      "this is what we typed in: ",
      password,
      newPassword,
      confirmPassword
    );
    if (newPassword === confirmPassword) {
      sendNewPasswordToServer();
    } else {
      console.log("your password did not match");
    }
  };

  const sendNewPasswordToServer = async () => {
    console.log(
      "this is user pass",
      user.password,
      "new password",
      newPassword,
      "confirm",
      confirmPassword
    );
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div>
        <button type="button" className="btn btn-primary" onClick={openModal}>
          Change Password
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="ChangePassword">
            <form onSubmit={handleSubmitClick}>
              <div>
                <label>Old Password</label>
                <br />
                <input
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <hr />

              <div>
                <label>New Password</label>
                <br />
                <input
                  type="password"
                  onChange={({ target }) => setNewPassword(target.value)}
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  onChange={({ target }) => setConfirmPassword(target.value)}
                />
              </div>
              <button className="btn btn-info" type="submit">
                Change Password
              </button>
              <br />
              <br />
              <button
                className="btn btn-outline-secondary"
                style={{ marginLeft: "25%" }}
                onClick={closeModal}
              >
                close
              </button>
            </form>
          </div>
        </Modal>
      </div>

      <br></br>
    </div>
  );
};

export default ChangePasswordModal;
