import React from "react";
import GoBackIcon from "../assets/rewind.svg";

function GoBackButton() {
  return (
    <div>
      <a href="./home">
        <img
          src={GoBackIcon}
          style={{
            width: "60px",
            hight: "60px",
            marginLeft: "48%",
          }}
          alt="play icon"
        />
      </a>
    </div>
  );
}

export default GoBackButton;
