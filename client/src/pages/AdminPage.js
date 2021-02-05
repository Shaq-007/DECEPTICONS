import React from 'react';
import "../components/AdminPage.css";
import { Link } from "react-router-dom";
 
const AdminPage = () => {
    
    
    return (
        <div className="container-fluid">
            <div className="adminHeader">
                <h1 className="adminAccessTitle">Memoryland</h1>
                <h2 className="adminAccessTitle">Administrator Access</h2>
            </div>
            
            <div className="buttonsContainer">
                <div className="adminConsole">
                <Link to={"/adminusers"}>
                        <button className="btn btn-lg btn-primary adminButtons">
                            Manage Users
                        </button>
                    </Link>
                    <Link to={"/admincategories"}>
                        <button className="btn btn-lg btn-primary adminButtons">
                            Manage Categories
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
