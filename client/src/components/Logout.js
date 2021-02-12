import React from 'react';
import logoutIcon from "../images/logout.svg"

const logout = () => {
    return (
        <div>
        <a href="./home">
          <img
            src={logoutIcon}
            style={{
              width: "60px",
              hight: "60px",
            }}
            alt="logout icon"
          />
        </a>
      </div>
    )
}

export default logout
