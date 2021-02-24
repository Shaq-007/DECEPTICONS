import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./RewardModal.css";
import rainbow from "../images/rewardrainbow.svg";

Modal.setAppElement('#root')

const RewardModal = ({ 
    showModal, 
    setShowModal, 
    reward, setReward, 
    setSolved, 
    setTwoCardsInPlay, 
    setCardStatus, 
    setInGame, 
    setSelectedCategory,
    setTotalPlayTime,
    totalPlayTime
    }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        if (reward === true) {
            setShowModal(true)
            setModalIsOpen(true)
        }
    }, [reward, setShowModal]);

    const closeModal = () => {
        setModalIsOpen(false);
        setReward(false);
        setSolved([]);
        setTwoCardsInPlay([]);
        setCardStatus([false,false,false,false,false,false,false,false,false,false,false,false]);
        setInGame(false);
        setSelectedCategory("");
    }


    return (
        <>
            {showModal ? (
            
            <Modal 
                style={
                    {overlay: { 
                        zIndex:'100', 
                        backgroundColor: 'rgba(255, 255, 255, 0.25)'
                    }, 
                    content: {
                        width: "550px", 
                        height:"600px", 
                        margin:"auto",
                    }}} 
                isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2 className="rewardModalTitle">Congratulations!</h2>
                    <div className="rewardModalImage">
                        <img className="rewardImage" src={rainbow} alt="rainbow"/>
                    </div>
                    <p className="rewardModalBody">Wow!</p>
                    <p className="rewardModalBody">You finished the game in {totalPlayTime} seconds!</p>
                    <div className="rewardButtonContainer">
                        <button className="btn btn-success" onClick={closeModal}>Play Again?</button>
                    </div>
            </Modal>                
            ) : null}
        </>
    )
};

export default RewardModal


