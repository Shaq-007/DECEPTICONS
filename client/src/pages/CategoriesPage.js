import React from "react";
import CategoryButtons from "../components/CategoryButtons";
import "../components/CategoriesButtons.css";
import background2 from "../images/background2.jpg";

const CategoriesPage = () => {
  return (
    <div className="img-fluid bgImage">
      <div className="container buttonsAlignment">
        <div className="row">
          <div className="col">
            <CategoryButtons value='Animals' styleClass="btn-outline-secondary btn-lg btn-block button-image animals"/>
            <CategoryButtons value='Shapes' styleClass="btn-outline-secondary btn-lg btn-block button-image shapes"/>
            <CategoryButtons value='Letters' styleClass="btn-outline-secondary btn-lg btn-block button-image letters"/>
            <CategoryButtons value='Custom' styleClass="btn-outline-secondary btn-lg btn-block button-image custom"/>
          </div>
        </div>
      </div>
  </div>
  )
};

export default CategoriesPage;
