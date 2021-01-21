import React from "react";
import GoBackIcon from "../assets/rewind.svg";

function GoBackButton() {
  return (
    <div>
      <a href="./categories">
        <img
          src={GoBackIcon}
          style={{
            width: "60px",
            hight: "60px",
            marginLeft: "80px",
          }}
          alt="play icon"
        />
      </a>
    </div>
  );
}

export default GoBackButton;
