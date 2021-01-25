import React, { useState } from "react";

const TestPage = () => {
  const [images, setImages] = useState();

  const getImages = async () => {
    let response = await fetch("/images/colors");
    let data = await response.json();
    setImages(data);
    };
  console.log("these are the images :", images);

  let arrayBufferToBase64 = (buffer) => {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
  };

    let giveMeTheImage = (img) => {
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr =  arrayBufferToBase64(img.data.data);
      return base64Flag + imageStr;
    }

  return (
    <div>
      <div>Test Page</div>
      <button onClick={getImages}>Click me</button>
      {images && images.length > 0 ? (
        <div>
            <div>{images[0].name}</div>
            <div>{images[0].categoryName}</div>
            <div>     
              <img src={giveMeTheImage(images[0].img)} alt=' this is it' />
              <img src={giveMeTheImage(images[1].img)} alt=' this is it' />
              <img src={giveMeTheImage(images[2].img)} alt=' this is it' />
              <img src={giveMeTheImage(images[3].img)} alt=' this is it' />
              <img src={giveMeTheImage(images[4].img)} alt=' this is it' />
              <img src={giveMeTheImage(images[5].img)} alt=' this is it' />
            </div> 
        </div>
      ) : (
        <p>Awaiting for data...<br/><br/> did you click the button?</p>        
      )}
    </div>
  );
};

export default TestPage;



// import React, { useState, useEffect } from "react";

// const CategoriesPage = () => {
//   const [users, setUsers] = useState([{}]);

//   // useEffect(() => {
//   const getUsers = async () => {
//     let response = await fetch("/users");
//     let data = await response.json();
//     setUsers(data);
//   };
//   // }, []);
//   console.log("these are the users :", users);
//   return (
//     <div>
//       <div>Categories Page</div>
//       <button onClick={getUsers}>Click me</button>
//       <div>{users[0].username}</div>
//     </div>
//   );
// };

// export default CategoriesPage;
