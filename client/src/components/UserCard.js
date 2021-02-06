import React, { useState } from 'react';
import "./UserCard.css";

const UserCard = ({ username, email, id, access }) => {

    const [accessLevel, setAccessLevel] = useState(access);

    const changingAccess = (event) => {
        let value = (event.target.value);
        return setAccessLevel(Number(value));
    }

    return (
        <>
            <div className="card userCards">
                <div className="card-body">
                    <p className="card-text"><b>Username:</b> {username}</p>
                    <p className="card-text"><b>User ID:</b> {id}</p>
                    <p className="card-text"><b>Email:</b> {email}</p>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Access</label>
                        <select onChange={changingAccess} className="custom-select" id="inputGroupSelect01">
                            <option defaultValue>{access}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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
