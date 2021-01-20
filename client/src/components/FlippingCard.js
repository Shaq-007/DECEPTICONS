import React from "react";
import "./FlippingCard.css";
import ReactCardFlip from "react-card-flip";

const FlippingCard = ({
  front,
  back,
  twoCardsInPlay,
  solved,
  id,
  isFacedUp,
  cardStatus,
  setCardStatus
}) => {

  const clickOnBackOfCard = () => {
    if (twoCardsInPlay.length < 2) {
      twoCardsInPlay.push({id: id, value: back});
      const newCardStatus = [...cardStatus];
      newCardStatus[id]=true;
      setCardStatus(newCardStatus)
      if (twoCardsInPlay.length === 2) {
        checkIfMatch();
      }
    }
  };

  const checkIfMatch = () => {
    if (twoCardsInPlay[0].value === twoCardsInPlay[1].value) {
      for (let i = 0; i< twoCardsInPlay.length; i++) {
      solved.push(twoCardsInPlay[i]);
      twoCardsInPlay.splice(i, 1);
      i--;
    }
  } else if (twoCardsInPlay[0].value !== twoCardsInPlay[1].value) {
      
      setTimeout(() => { 
        const newCardStatus = [...cardStatus];
        twoCardsInPlay.forEach(cardInPlay => {
          newCardStatus[cardInPlay.id]=false;
        });
        setCardStatus(newCardStatus);
        for (let i = 0; i < twoCardsInPlay.length; i++) {
          twoCardsInPlay.splice(i, 1);
          i--;
        }
       }, 1500);
    }
  }

  return (
    <div className="individualCard">
      <ReactCardFlip isFlipped={isFacedUp} flipDirection="horizontal">
        {/* ReactCardFlip requires two children. This is the first child (card front) */}
        <div className="flip-card">
            <div className="flip-card-front" onClick={clickOnBackOfCard}>
              <h1>{front}</h1>
            </div>
        </div>

        {/* ReactCardFlip requires two children. This is the second child (card back) */}
        <div className="flip-card">
            <div className="flip-card-back"> 
              <h1>{back}</h1>
            </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlippingCard;
