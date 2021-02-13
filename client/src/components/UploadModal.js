import React, { useState, useContext } from "react";
import Modal, { setAppElement } from "react-modal";
import {AuthContext} from './AuthContext';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function UploadModal() {

  const {categoryName, setCategoryName, email, setEmail} = useContext(AuthContext);

  var subtitle;
  // /** start states */
  const [files, setFiles] = useState();
  // const [categoryName, setCategoryName] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const send = async (event) => {
    event.preventDefault();
    // console.log(name);
    const formData = new FormData();
    // file is the name of the request parameter
    // file is the state variable  that holds
    // event.target.file[0] from <input type= "file" .../> on line 95
    console.log('number of images', files.length)
    console.log('email', email)
    for (const file of files){
      formData.append("image", file);
    }
    formData.append("categoryName", categoryName);
    formData.append("email", email);
    const options = {
      method: "POST",
      body: formData,
    };

    let response = await fetch("/images/save", options);
  };

  return (
    <div>
      <div>
        <button type="button" className="btn btn-success" onClick={openModal}>
          Upload your images
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello !!!</h2>

          <h5>Please upload 6 images </h5>

          <form
            action="/images/save"
            method="POST"
            encType="multipart/form-data"
          >

            <div>
              <label htmlFor="categoryName">email:</label>
              <input
                class="form-control"
                id="Email"
                name="Email"
                onChange={(event) => {
                  const { value } = event.target;
                  setEmail(value);
                }}
                value={email}
                placeholder="Type your email"
                required
              ></input>
            </div>


            <div>
              <label htmlFor="categoryName">Username:</label>
              <input
                class="form-control"
                id="categoryName"
                name="categoryName"
                onChange={(event) => {
                  const { value } = event.target;
                  setCategoryName(value);
                }}
                value={categoryName}
                placeholder="Type your Username"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="image">Upload Image: </label>
              <input
                class="form-control"
                type="file"
                id="image"
                onChange={(event) => {
                  const images = event.target.files;
                  setFiles(images);
                }}
                name="image"
                required
                multiple
              />

              <div>{files ? <p></p> : <i></i>}</div>
            </div>
            <div>
              <button
                onClick={send}
                type="submit"
                className="btn btn-primary w-100"
              >
                Submit
              </button>
              <br />
              <br />
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-secondary" onClick={closeModal}>
                  close
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>

      <br></br>
    </div>
  );
}

export default UploadModal;
