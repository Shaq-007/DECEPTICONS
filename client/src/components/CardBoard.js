import React, { useState } from "react";
import FlippingCard from "../components/FlippingCard";
import "./CardBoard.css";
import Confetti1 from "./confetti";
// import RewardModal from "./RewardModal";



const CardBoard = ({ funWords }) => {
    const [twoCardsInPlay, setTwoCardsInPlay] = useState([]);
    const [solved, setSolved] = useState([]);
    const [cardStatus, setCardStatus] = useState([false,false,false,false,false,false,false,false,false,false,false,false]);

    const rewardAtEnd = () => {
        let result = cardStatus.every( e => e === true);
        if (solved.length === 12 && result === true) {
            setTimeout(()=>{console.log("yayy!")}, 1000);
            return <Confetti1/>
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
                            base64img={funWords[i].base64img}
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
