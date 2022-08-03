import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { allActivities, loginPerson, verifyToken } from "../api";
import "./index.css";

const Login = ({ username, password, setUsername, setPassword, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    async function handleSubmit(event) {
        event.preventDefault();
        const loggedInUser = await loginPerson(username, password);
        if (loggedInUser) {
            setIsLoggedIn(true);
            await allActivities();
            setUsername("")
            setPassword("")
            navigate('/')
        }
    }

    return (
        <>
            <div> Login to Fitness Tracker! </div>
            <form onSubmit={handleSubmit}>
            <label>
                Username
                <input 
                    placeholder = "Enter username here..."
                    name = "username"
                    type = "text"
                    value = {username}
                    onChange = {(event) => {
                        setUsername(event.target.value);
                    }}
                /> 
            </label>
            <label>
                Password
                <input 
                    placeholder = "Enter password here..."
                    name = "password"
                    type = "password"
                    value = {password}
                    onChange = {(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </label>
            <button type="submit">
                Login
            </button>
            <div>
                Don't have an account? Register {' '}
                <NavLink to="/Register">
                     Here.
                </NavLink>
            </div>
        </form>
        </>
    )

    
}

export default Login;