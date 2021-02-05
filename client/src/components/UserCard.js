import React from 'react';
import "./UserCard.css";

const UserCard = ({ username, email, id, access }) => {
    return (
        <>
            <div className="card userCards">
                <div className="card-body">
                    <p className="card-text"><b>Username:</b> {username}</p>
                    <p className="card-text"><b>User ID:</b> {id}</p>
                    <p className="card-text"><b>Email:</b> {email}</p>
                    <p className="card-text"><b>Access Level:</b> {access}</p>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Access</label>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option defaultValue>{access}</option>
                            <option value="1">1</option>
                            <option value="2">5</option>
                            <option value="3">10</option>
                        </select>
                    </div>

                    <div className="userButtons">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard
