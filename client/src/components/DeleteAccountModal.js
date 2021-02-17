import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom";

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

const DeleteAccountModal = () => {
  const { user, setUser, email, setEmail } = useContext(AuthContext);
  const [password, setPassword] = useState();
  const [typedEmail, setTypedEmail] = useState();



  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDeleteRequestToServer();
    
  };

  const sendDeleteRequestToServer = async () => {
    let response = await fetch(`/users/delete/${user._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user
      }),
    });

    let data = await response.json();
    let message = JSON.stringify(data);
    console.log(message);
    alert("User Deleted");

    if (response.status === 200) {
        goHome();
          
      

      return message;
    } else {
      throw Error.message;
    }
        
  };

  const history = useHistory();
  const goHome = () => {
  history.push("Home");
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
        <button type="button" className="btn btn-danger" onClick={openModal}>
          Delete Account
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="DeleteAccount">
            <form onSubmit={handleSubmitClick}>
              <div>
                <h3>Please Input Your Email to Delete Your Account</h3>
                <label>Your Email</label>
                <br />
                <input
                  type="email"
                  onChange={({ target }) => setTypedEmail(target.value)}
                // onChange={email}
                />
              </div>
              <hr />

              {/* <div>
                <label>New Password</label>
                <br />
                <input
                  type="password"
                  // onChange={({ target }) => setNewPassword(target.value)}
                />
              </div> */}
              {/* <div>
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  // onChange={({ target }) => setConfirmPassword(target.value)}
                />
              </div> */}
              <button className="btn btn-info" type="submit">
                Delete Account
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

export default DeleteAccountModal;
