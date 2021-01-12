import React from 'react'
import FlippingCard from "../components/FlippingCard";

const CardBoard = ({ funWords }) => {
    return (
        <div>
            {
                funWords.map((words, i) => {
                    return (
                        <FlippingCard
                            key={i}
                            front={funWords[i].front}
                            back={funWords[i].back}
                        />
                    );
                })
            }     
        </div>
    )
}

export default CardBoard
