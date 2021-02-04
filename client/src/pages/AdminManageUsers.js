import React, { useState, useEffect } from 'react';
import UserCard from "../components/UserCard";

const AdminManageUsers = () => {
    const [users, setUsers] = useState([]);
    // const [searchField, setSearchField] = useState("");
    
    useEffect(() => {
        getUsers();
    }, []);
    

    const getUsers = async () => {
        let response = await fetch("/users");
        let players = await response.json();
        setUsers(players);
        console.log(players)
      };
      
    
    return (
        <div>
            <h1>System Users</h1>
            {
            users.map((users) => {
                return (
                    <div>
                        <UserCard
                            key = {users._id}
                            id = {users._id}
                            username = {users.username}
                            email = {users.email}
                            access = {users.userlevel}
                        /> 
                    </div>
                );
            })
        }
        </div>
    )
}

export default AdminManageUsers
