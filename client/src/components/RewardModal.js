import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./RewardModal.css";
import rainbow from "../images/rewardrainbow.svg";

Modal.setAppElement('#root')

const RewardModal = ({ showModal, setShowModal, reward }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        if (reward === true) {
            setShowModal(true)
            setModalIsOpen(true)
        }
    }, [reward, setShowModal]);

    const closeModal = () => {
        setModalIsOpen(false)
        window.location.reload(false);
        

    }

    return (
        <>
            {showModal ? (
            
            <Modal style={{overlay: { zIndex:'100'}, content: {width: "500px", height:"auto", margin:"auto"}}} 
            isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2 className="rewardModalTitle">Congratulations!</h2>
                <p className="rewardModalBody">Wow, you did great!</p>
                <div className="rewardModalImage">
                    <img className="rewardImage" src={rainbow} alt="rainbow"/>
                </div>
                <div className="rewardButtonContainer">
                    <button className="btn btn-success" onClick={closeModal}>Play Again?</button>
                </div>
            </Modal>                
            ) : null}
        </>
    )
};

export default RewardModal


