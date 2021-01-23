import React, { useState, useEffect } from "react";
import FlippingCard from "../components/FlippingCard";
import "./CardBoard.css";
import Confetti1 from "./confetti";


const CardBoard = ({ funWords }) => {
    const [twoCardsInPlay, setTwoCardsInPlay] = useState([]);
    const [solved, setSolved] = useState([]);
    const [cardStatus, setCardStatus] = useState([false,false,false,false,false,false,false,false,false,false,false,false]);

    const rewardAtEnd = () => {
    let result = cardStatus.every( e => e === true);
    if (solved.length === 12 && result === true) {
        return (
        <div>
            <Confetti1/>
        </div>
        )
    }
    }

    return (
        <div className="cardRows">
            {
                funWords.map((words, i) => {
                    return (
                        <>
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
                            {rewardAtEnd()}
                        </>
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
