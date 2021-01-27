import React, { useState } from "react";
import CategoryButtons from "../components/CategoryButtons";
import "../components/CategoriesPage.css";

const CategoriesPage = () => {

  return (
    <div className="container bgImage">
      <div className="guestName">
      <h1> Hi Name,</h1>
      <h4>Pick your category!</h4>
      </div>
      <div className="buttonsContainer">
          <CategoryButtons value='Animals' styleClass="btn-outline-secondary btn-block buttonsAlignment button-image animals" />
          <CategoryButtons value='Shapes' styleClass="btn-outline-secondary btn-block buttonsAlignment button-image shapes" />
          <CategoryButtons value='Letters' styleClass="btn-outline-secondary btn-block buttonsAlignment button-image letters" />
          <CategoryButtons value='Custom' styleClass="btn-outline-secondary btn-block buttonsAlignment button-image custom" />
      </div>
    </div>
  )
};

export default CategoriesPage;
