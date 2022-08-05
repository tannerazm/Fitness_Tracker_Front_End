import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header = ({ isLoggedIn }) => {
  const token = localStorage.getItem("token");
  return (
    <div id="navbar">
      <div>
        <img
          id="logo"
          src="https://64.media.tumblr.com/16e98e80f73ce3d25473f7eefd46f6b3/8d46585be318f5f3-b9/s640x960/d266f348f08a88dc6e6a2f5344833f4c407e6b4e.pnj"
        />
        <NavLink to="/" id="title">
          Fitness Tracker
        </NavLink>
      </div>

      <div id="topbar">
        {token ? (
          <div id="loggedin">
            Logged in as: {localStorage.getItem("username")}
          </div>
        ) : null}
        {!isLoggedIn ? (
          <>
            <NavLink to="/" className="link" id="firstbutton">
              Home
            </NavLink>
            <NavLink to="/routines" className="link">
              Routines
            </NavLink>
            <NavLink to="/activities" className="link">
              Activities
            </NavLink>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
            <NavLink to="/register" className="link">
              Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/routines" className="link" id="firstbutton">
              Routines
            </NavLink>
            <NavLink to="/activities" className="link">
              Activities
            </NavLink>
            <NavLink to="/logout" className="link">
              Logout
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
