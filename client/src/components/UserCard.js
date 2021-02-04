import React from 'react';
import "./UserCard.css";

const UserCard = ({ id, username, email, access }) => {
    return (
        <div class="card userCards">
            <div class="card-header">
                Username: {username}
            </div>
            <div class="card-body">
                <p class="card-text">User ID: {id}</p>
                <p class="card-text">Email: {email}</p>
                <p class="card-text">Access Level: {access}</p>


                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Access</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                <option selected>{access}</option>
                <option value="1">1</option>
                <option value="2">5</option>
                <option value="3">10</option>
                </select>




                <div className="userButtons">
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>




        // <div className="card">
        //     <div>
        //         <p>{username}</p>
        //         <p>{id}</p>
        //         <p>{email}</p>
        //         <p>{access}</p>
        //     </div>
        // </div>
    )
}

export default UserCard
