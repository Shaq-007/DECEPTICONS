import React, { useState } from "react";
import Modal from "react-modal";

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
function ChangePasswordModal({ id, password }) {
  //   var subtitle;
  // /** start states */
  //   const [files, setFiles] = useState();

  const [fields, handleFieldChange] = useState({
    password: "",
    oldPassword: "",
    confirmPassword: "",
  });

  const [isChanging, setIsChanging] = useState(false);

  function validateForm() {
    return (
      //   fields.oldPassword &&
      //   fields.password &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleChangeClick(e) {
    e.preventDefault();
    console.log("this is the password");
    setIsChanging(true);
    updatePasswordInServer();
  }

  const updatePasswordInServer = async () => {
    let response = await fetch(`/users/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
      }),
    });

    let data = await response.json();
    let message = JSON.stringify(data);
    console.log(message);
    console.log("Password has been updated");

    if (response.status === 200) {
      return message;
    } else {
      throw Error.message;
    }
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
            <form onSubmit={handleChangeClick}>
              <div>
                <label>Old Password</label>
                <br />
                <input
                  type="password"
                  onChange={handleFieldChange}
                  value={fields.oldPassword}
                />
              </div>
              <hr />

              <div>
                <label>New Password</label>
                <br />
                <input
                  type="password"
                  onChange={handleFieldChange}
                  value={fields.password}
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  onChange={handleFieldChange}
                  value={fields.confirmPassword}
                />
              </div>
              <button
                className="btn btn-info"
                type="submit"
                disabled={!validateForm()}
                // isLoading={isChanging}
              >
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
}

export default ChangePasswordModal;
