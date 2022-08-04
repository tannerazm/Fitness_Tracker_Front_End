import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { allActivities, loginPerson, verifyToken } from "../api";
import "./index.css";

const Login = ({ username, password, setUsername, setPassword, setIsLoggedIn, isLoggedIn}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    
    async function handleSubmit(event) {
        event.preventDefault();
    try {
        const loggedInUser = await loginPerson(username, password);
        if (loggedInUser) {
            setIsLoggedIn(true);
            await allActivities();
            setUsername("")
            setPassword("")
            navigate('/')
        }
    } catch (error) {
        alert(error.message)
    }
    }

    return (
        <div id="loginPage">
            <div> Login to Fitness Tracker! </div>
            <form onSubmit={handleSubmit} class="loginForm">
            <label className="inputLabel">
                Username
                <input className="input"
                    placeholder = "Enter username here..."
                    name = "username"
                    type = "text"
                    value = {username}
                    onChange = {(event) => {
                        setUsername(event.target.value);
                    }}
                /> 
            </label>
            <label className="inputLabel">
                Password
                <input className="input"
                    placeholder = "Enter password here..."
                    name = "password"
                    type = "password"
                    value = {password}
                    onChange = {(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </label>
            <button type="submit" className="pageButton">
                Login
            </button>
            <div>
                Don't have an account? Register {' '}
                <NavLink to="/Register">
                     Here.
                </NavLink>
            </div>
        </form>
        </div>
    )
    
}

export default Login;