import React, { useState, useEffect } from "react";
import FlippingCard from "../components/FlippingCard";
import "./CardBoard.css";

const CardBoard = ({ funWords, setReward, twoCardsInPlay, setTwoCardsInPlay, solved, setSolved, cardStatus, setCardStatus }) => {

    useEffect(() => {
        let result = cardStatus.every( item => item === true);
        if (solved.length === 12 && result === true) {
            setReward(true);
        }
    })

    return (
        <div className="cardRows">
            {
                funWords.map((words, i) => {
                    return (
                        // <>
                        <FlippingCard
                            key={i}
                            id={i}
                            front={funWords[i].front}
                            back={funWords[i].back}
                            base64img={funWords[i].base64img}
                            twoCardsInPlay={twoCardsInPlay}
                            setTwoCardsInPlay={setTwoCardsInPlay}
                            solved={solved}
                            setSolved={setSolved}
                            isFacedUp={cardStatus[i]}
                            cardStatus={cardStatus}
                            setCardStatus={setCardStatus}
                        />
                        // </>
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
