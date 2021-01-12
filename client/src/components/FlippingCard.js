import React from "react";
import "./FlippingCard.css";

const FlippingCard = () => {
  return (
    <div className="container containerAlignment">
      <div className="row align-items-center">
        <div className=" col cardAlignment">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>Hello</h1>
              </div>

              <div className="flip-card-back">
                <h1>Bye</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>Hello</h1>
              </div>

              <div className="flip-card-back">
                <h1>Bye</h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>Hello</h1>
              </div>

              <div className="flip-card-back">
                <h1>Bye</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;

// Original Card set-up
//       <div className="row align-items-center">
//         <div className=" col cardAlignment">
//           <div className="playingCard"></div>
//           <div className="playingCard"></div>
//           <div className="playingCard"></div>
//         </div>
//       </div>
