import React from 'react';
import UserCard from "../components/UserCard";

const UserList = ({ users }) => {

    return (
        <div>
            
            {
                users.map((user, i) => {
                    return (
                        <UserCard
                            key={i}
                            id={users[i]._id}
                            username={users[i].username}
                            email={users[i].email}
                            userlevel={users[i].userlevel}
                        />
                    );
                })
            }
        </div>
    );
}

export default UserList