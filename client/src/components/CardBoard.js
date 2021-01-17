import React, { useState } from "react";
import FlippingCard from "../components/FlippingCard";

const CardBoard = ({ funWords }) => {
    const [cardsFlippedCount, setCardsFlippedCount] = useState(0);
    const [matchLogic, setMatchLogic] = useState([]);
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            {
                funWords.map((words, i) => {
                    return (
                        <FlippingCard
                            key={i}
                            front={funWords[i].front}
                            back={funWords[i].back}
                            setCardsFlippedCount={setCardsFlippedCount}
                            cardsFlippedCount={cardsFlippedCount}
                            matchLogic={matchLogic}
                            setMatchLogic={setMatchLogic}
                            disabled={disabled}
                            setDisabled={setDisabled}
                        />
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
