import React, { useState } from "react";
import FlippingCard from "../components/FlippingCard";

const CardBoard = ({ funWords }) => {
    const [twoCardsInPlay, setTwoCardsInPlay] = useState([]);
    const [solved, setSolved] = useState([]);
    const [cardStatus, setCardStatus] =useState([false,false,false,false,false,false,false,false,false,false,false,false]);
   
    return (
        <div>
            {
                funWords.map((words, i) => {
                    return (
                        <FlippingCard
                            key={i}
                            id={i}
                            front={funWords[i].front}
                            back={funWords[i].back}
                            twoCardsInPlay={twoCardsInPlay}
                            setTwoCardsInPlay={setTwoCardsInPlay}
                            solved={solved}
                            setSolved={setSolved}
                            isFacedUp={cardStatus[i]}
                            cardStatus={cardStatus}
                            setCardStatus={setCardStatus}
                        />
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
