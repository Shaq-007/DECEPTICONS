import React from 'react';
import "../components/AdminPage.css";

const AdminPage = () => {
    
    
    
    return (
        <div className="container-fluid">
            <div className="adminHeader">
                <h1 className="adminAccessTitle">Memoryland</h1>
                <h2 className="adminAccessTitle">Administrator Access</h2>
            </div>
            
            <div className="buttonsContainer">
                <div className="adminConsole">
                    <button className="btn btn-lg btn-primary adminButtons">
                       Manage Users
                    </button>
                    <button className="btn btn-lg btn-primary adminButtons">
                       Manage Categories
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
