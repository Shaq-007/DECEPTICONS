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
function ChangePasswordModal() {
  var subtitle;
  // /** start states */
  const [files, setFiles] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  //   function afterOpenModal() {
  //     subtitle.style.color = "#f00";
  //   }

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
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="ChangePassword">
            {/* <form onSubmit={handleChangeClick}> */}
            <form>
              <div bsSize="large" controlId="oldPassword">
                <label>Old Password</label>
                <br />
                <input
                  type="password"
                  //   onChange={handleFieldChange}
                  //   value={fields.oldPassword}
                />
              </div>
              <hr />

              <div bsSize="large" controlId="password">
                <label>New Password</label>
                <br />
                <input
                  type="password"
                  //   onChange={handleFieldChange}
                  //   value={fields.password}
                />
              </div>
              <div bsSize="large" controlId="confirmPassword">
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  //   onChange={handleFieldChange}
                  //   value={fields.confirmPassword}
                />
              </div>
              <button
                className="btn btn-info"
                block
                type="submit"
                bsSize="large"
                // disabled={!validateForm()}
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
