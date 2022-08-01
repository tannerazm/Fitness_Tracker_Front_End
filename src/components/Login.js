import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginPerson } from "../api";
import "./index.css";

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    setIsLoggedIn
}) => {
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        await loginPerson(username, password);
        setIsLoggedIn(true);
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