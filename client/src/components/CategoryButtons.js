import React from "react";

const CategoryButtons = ({ styleClass, value, onClick, disabled }) => (
  <button onClick={onClick} className={`btn ${styleClass}`} disabled={disabled}>
    {value}
  </button>
);

export default CategoryButtons;
