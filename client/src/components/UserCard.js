import React, { useState } from 'react';
import "./UserCard.css";

const UserCard = ({ username, email, id, userlevel }) => {

    const [accessLevel, setAccessLevel] = useState();

    // ******************* UPDATING ACCESS LEVEL **************************************
    const changeAccessLevel = (e) => {
        let value = e.target.value;
        setAccessLevel(value)
      };
    
      const updateOnClick = (e) => {
        e.preventDefault();
          sendDetailsToServer();
      };

    const sendDetailsToServer = async () => {
        let response = await fetch(`/users/update/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userlevel: accessLevel
          }),
        });
    
        let data = await response.json();
        let message = JSON.stringify(data);
        console.log(message);
        alert("User level has been updated")
    
        if (response.status === 200) {
          return message;
        } else {
          throw Error.message;
        }
    };
    // ********************************************************************************


    // ***************************** DELETING USER ************************************


                            // insert code to delete user here 

    // ********************************************************************************

    return (
        <>
            <div className="card userCards">
                <div className="card-body">
                    <p className="card-text"><b>Username:</b> {username}</p>
                    <p className="card-text"><b>User ID:</b> {id}</p>
                    <p className="card-text"><b>Email:</b> {email}</p>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Access</label>
                        <select onChange={changeAccessLevel} className="custom-select" id="inputGroupSelect01">
                            <option defaultValue>{userlevel}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="userButtons">
                        <button onClick={updateOnClick} className="btn btn-primary">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard
