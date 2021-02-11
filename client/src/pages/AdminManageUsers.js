import React, { useState, useEffect } from 'react';
// import UserCard from "../components/UserCard";
import UserList from "../components/UserList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const AdminManageUsers = ({ userlevel }) => {
    const [users, setUsers] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        getUsers();
    }, [users]);


    const getUsers = async () => {
        let response = await fetch("/users");
        let allUsers = await response.json();
        setUsers(allUsers);
    };

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredUsers = users.filter(user => {
        return user.username.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !users.length ?
        <h1>Loading</h1> :
        (
            <div>
                <h1>System Users</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <UserList users={filteredUsers} />
                </Scroll>
            </div>
        )
}

export default AdminManageUsers
