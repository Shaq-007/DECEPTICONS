import React, { useState, useEffect } from "react";

const TestPage = () => {
  const [images, setImages] = useState([{}]);

  // useEffect(() => {
  const getImages = async () => {
    let response = await fetch("/api/images");
    let data = await response.json();
    setImages(data);
  };
  // }, []);
  console.log("these are the images :", images);
  return (
    <div>
      <div>Test Page</div>
      <button onClick={getImages}>Click me</button>
      <div>{images[0].name}</div>
      <div>{images[0].categoryName}</div>
      <div>{images[0].img.data[0]}</div>
      
      {/* <img src={`data:image/jpeg;base64,${images[0].img.data}`} /> */}
    </div>
  );
};

export default TestPage;



// import React, { useState, useEffect } from "react";

// const CategoriesPage = () => {
//   const [users, setUsers] = useState([{}]);

//   // useEffect(() => {
//   const getUsers = async () => {
//     let response = await fetch("/api/users");
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
