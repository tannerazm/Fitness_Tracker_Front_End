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
        <>
        <h1>Are you sure you want to log out of:</h1>
        <h2>{username}?</h2>
        <NavLink to='/'>
            Return Home
        </NavLink>
        <NavLink to='/activities'>
            Return to Activities
        </NavLink>
        <NavLink to='/routines'>
            Return to Routines
        </NavLink>
        <button onClick={handleUserLogout}>
            Logout
        </button>
        </>
    )
}

export default Logout;