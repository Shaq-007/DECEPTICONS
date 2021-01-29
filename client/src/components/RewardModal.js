import React, { useEffect } from 'react'

const RewardModal = ({ showModal, setShowModal, reward }) => {

    useEffect(() => {
        if (reward === true) {
            setShowModal(true);
        }
    })

    return (
        <>
            {showModal ? (
                <div className="modal" role="dialog" style={{display: "inline-block", marginTop:"130px"}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Congratulations!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Wow, you did great!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Play Again?</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            ) : null}
        </>
    )
};

export default RewardModal

