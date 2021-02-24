import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const loggingOut = async () => {
    let response = await fetch("/api/logout");
    // console.log("hello what's going on?!", response);
    if (response.status === 200) {
      console.log("im in!!");
      goHome();
    }
  };

  const history = useHistory();
  const goHome = () => {
    history.push("Home");
  };

  return (
    <div>
      <button
        onClick={loggingOut}
        style={{
          backgroundColor: "peachPuff",
          borderRadius: "5px",
          display: "block",
          marginLeft: "auto",
          marginRight: "2rem",
          marginTop: "0.7rem",
          fontSize: "1rem",
          padding: "4px",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
