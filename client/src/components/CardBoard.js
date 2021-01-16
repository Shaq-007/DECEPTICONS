import React, { useState } from "react";
import FlippingCard from "../components/FlippingCard";

const CardBoard = ({ funWords }) => {
    const [cardsFlippedCount, setCardsFlippedCount] = useState(0);
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
                        />
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
