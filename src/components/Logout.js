import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Logout = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    function handleUserLogout () {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate('/login')
    }

    const username = localStorage.getItem('username')

    return (
        <div id="logoutPage">
        <h1>Are you sure you want to log out of:</h1>
        <h2>{username}?</h2>
        <NavLink to='/' className="pageLink">
            Return Home
        </NavLink>
        <NavLink to='/activities' className="pageLink">
            Return to Activities
        </NavLink>
        <NavLink to='/routines' className="pageLink">
            Return to Routines
        </NavLink>
        <button onClick={handleUserLogout} className="pageButton">
            Logout
        </button>
        </div>
    )
}

export default Logout;