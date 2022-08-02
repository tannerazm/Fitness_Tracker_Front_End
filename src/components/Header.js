import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ isLoggedIn }) => {
  return (
    <div id="navbar">
      <div>Fitness Tracker</div>
      <div>Logged in as: {localStorage.getItem('username')}</div>
      {!isLoggedIn ? (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/routines">Routines</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
