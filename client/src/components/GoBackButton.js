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
            // marginLeft: "48%",
            marginTop: "1rem",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          alt="play icon"
        />
      </a>
    </div>
  );
}

export default GoBackButton;
