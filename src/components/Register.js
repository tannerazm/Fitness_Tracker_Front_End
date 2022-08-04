import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerPerson } from "../api";
import "./index.css";

const Register = ({ setUsername, setPassword, username, password }) => {
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        await registerPerson(username, password);
        
    }
    return (
        <div id="registerPage">
        <div>Register Your Account</div>
        <form onSubmit={handleSubmit} lass="registerForm">
            <label lassName="inputLabel">
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
            <label lassName="inputLabel">
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
                Register
            </button>
            <div>
                Already have an account? Log in {' '}
                <NavLink to="/Login">
                    Here.
                </NavLink>
            </div>
        </form>
        </div>
    )
}

export default Register;