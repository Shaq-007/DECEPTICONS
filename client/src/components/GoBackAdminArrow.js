import React from "react";
import GoBackAdminIcon from "../assets/go-back-arrow.svg";

function GoBackAdminArrow() {
  return (
    <div>
      <a href="./">
        <img
          src={GoBackAdminIcon}
          style={{
            width: "50px",
            hight: "50px",
            marginTop: "1rem",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          alt="goBack arrow"
        />
      </a>
    </div>
  );
}

export default GoBackAdminArrow;
