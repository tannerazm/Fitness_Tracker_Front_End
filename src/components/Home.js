import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Home = ({ isLoggedIn }) => {
  let navigate = useNavigate();
  function handleSubmitProfile() {
    navigate("/profile");
  }
  function handleSubmitLogin() {
    navigate("/login");
  }
  return (
    <>
      <h1 className="welcomeTitle">Welcome to Fitness Tracker</h1>
      <h1 className="welcomeTitleTwo">Track Your Dreams.</h1>
      {
      isLoggedIn ? (
        <>
          <h3 className="isLoggedIn">
            Logged in as <b className="homeUser">{localStorage.getItem('username')}</b>
          </h3>
          <button onClick={handleSubmitProfile} className="viewProfile">
            VIEW PROFILE
          </button>
        </>
      ) : (
        <button onClick={handleSubmitLogin} className="loginHome">
          LOGIN
        </button>
      )
      }
    </>
  );
};

export default Home;
