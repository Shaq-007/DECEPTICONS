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
  },
};
Modal.setAppElement("#root");
function UploadModal() {
  var subtitle;
  // /** start states */
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
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
    console.log(name);

    const formData = new FormData();
    // file is the name of the request parameter
    // file is the state variable  that holds
    // event.target.file[0] from <input type= "file" .../> on line 70
    formData.append("image", file);
    formData.append("name", name);
    formData.append("category", category);
    const options = {
      method: "POST",
      body: formData,
    };

    let response = await fetch("/images/save", options);
    // console.log('this is the response', response)
  };

  return (
    <div>
      <div>
        <button onClick={openModal}>Upload your images</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

          <div>Please upload 12 images </div>

          <form
            action="/images/save"
            method="POST"
            encType="multipart/form-data"
          >
            {/* <div>
              <label htmlFor="name">Image Title</label>
              <input
                type="text"
                id="name"
                onChange={(event) => {
                  const { value } = event.target;
                  setName(value);
                  // changeName(event.target.value)
                }}
                placeholder="Name"
                value={name}
                name="name"
                required
              />
            </div> */}

            <div>
              <label htmlFor="category">Username</label>
              <input
                id="category"
                name="category"
                onChange={(event) => {
                  const { value } = event.target;
                  setCategory(value);
                }}
                value={category}
                placeholder="Type your Username"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                onChange={(event) => {
                  const image = event.target.files[0];
                  setFile(image);
                }}
                name="image"
                required
              />

              <div>{file ? <p></p> : <i></i>}</div>
            </div>
            <div>
              <button
                onClick={send}
                type="submit"
                className="btn btn-primary w-100"
              >
                Submit
              </button>
              <br/><br/>
              <div>
                <button onClick={closeModal}>close</button>
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
