import React from "react";
import PlayButtonIcon from "../assets/play.svg";

const PlayButton = () => {
  return (
    <div>
      <a href="./categories">
        <img
          src={PlayButtonIcon}
          style={{ width: "50px", hight: "50px" }}
          alt="play icon"
        />
      </a>
    </div>
  );
};

export default PlayButton;
