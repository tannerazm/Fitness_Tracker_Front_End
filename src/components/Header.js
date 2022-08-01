import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ isLoggedIn }) => {
    return (
        <div id="navbar">
            <div>Fitness Tracker</div>
            { isLoggedIn ? (
                <>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/logout">
                        Logout
                    </NavLink>
                </>
            ) : (
                <>
                <NavLink to="/logout">
                    Logout
                </NavLink>
                </>
            )
            }
        </div>
    )
}

export default Header;