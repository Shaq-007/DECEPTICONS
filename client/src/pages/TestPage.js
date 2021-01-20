import React, { useState, useEffect } from "react";

const CategoriesPage = () => {
  const [users, setUsers] = useState([{}]);

  // useEffect(() => {
  const getUsers = async () => {
    let response = await fetch("/api/users");
    let data = await response.json();
    setUsers(data);
  };
  // }, []);
  console.log("these are the users :", users);
  return (
    <div>
      <div>Categories Page</div>
      <button onClick={getUsers}>Click me</button>
      <div>{users[0].username}</div>
    </div>
  );
};

export default CategoriesPage;
