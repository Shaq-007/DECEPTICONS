import React, { useState } from "react";
import "./FlippingCard.css";
import ReactCardFlip from "react-card-flip";


const FlippingCard = ({ front, back, setCardsFlippedCount, cardsFlippedCount }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  const clickOnBackOfCard = () => {
    // console.log(cardsFlippedCount);
    if (cardsFlippedCount < 2){
      setCardsFlippedCount (cardsFlippedCount+1);
      setIsFlipped(!isFlipped);
    }
  };
  const clickOnFrontOfCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* ReactCardFlip requires two children. This is the first child (card front) */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" onClick={clickOnBackOfCard}>
            <h1>{front}</h1>
          </div>
        </div>
      </div>

      {/* ReactCardFlip requires two children. This is the second child (card back) */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-back" onClick={clickOnFrontOfCard}>
            <h1>{back}</h1>
          </div>
        </div>
      </div>
    </ReactCardFlip>
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
