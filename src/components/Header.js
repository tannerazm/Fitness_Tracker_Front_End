import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ isLoggedIn }) => {
  return (
    <div id="navbar">
      <NavLink to="/" id='title'>Fitness Tracker</NavLink>

      <div id='topbar'>
        <div id="loggedin">Logged in as: {localStorage.getItem('username')}</div>
        {!isLoggedIn ? (
          <>
            <NavLink to="/" className="link" id="firstbutton">Home</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/register" className="link">Register</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/routines" className="link" id="firstbutton">Routines</NavLink>
            <NavLink to="/activities" className="link">Activities</NavLink>
            <NavLink to="/profile" className="link">Profile</NavLink>
            <NavLink to="/logout" className="link">Logout</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
