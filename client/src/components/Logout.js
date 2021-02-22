import React from 'react';
import { useHistory } from "react-router-dom";


const Logout = () => {

  const loggingOut = async () => {
    let response = await fetch("/api/logout")
    console.log("hello what's going on?!", response)
    if (response.status === 200) {
      console.log("im in!!")
      goHome();
    }
  };

  const history = useHistory();
  const goHome = () => {
  history.push("Home");
  };

  return (
    <div>
      <button onClick={loggingOut}>Logout</button>
    </div>
  )
}

export default Logout
