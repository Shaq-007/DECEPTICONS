import React from "react";
import GoBackIcon from "../assets/rewind.svg";

function GoBackButton() {
  return (
    <div>
      <a href="./home">
        <img
          src={GoBackIcon}
          style={{
            width: "50px",
            height: "50px",
          }}
          alt="play icon"
        />
      </a>
    </div>
  );
}

export default GoBackButton;
