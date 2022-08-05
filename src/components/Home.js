import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = ({ isLoggedIn }) => {
  let navigate = useNavigate();
  function handleSubmitRoutines() {
    navigate("/routines");
  }
  function handleSubmitLogin() {
    navigate("/login");
  }
  return (
    <div id="homePage">
      <div className="homeText">
        <h1 className="welcomeTitle">Welcome to Fitness Tracker</h1>
        <h1 className="welcomeTitleTwo">Track Your Dreams.</h1>
      </div>
      {isLoggedIn ? (
        <>
          <h3 className="isLoggedIn">
            Logged in as{" "}
            <b className="homeUser">{localStorage.getItem("username")}</b>
          </h3>
          <button onClick={handleSubmitRoutines} className="viewRoutines">
            VIEW ROUTINES
          </button>
        </>
      ) : (
        <button className="loginButton" onClick={handleSubmitLogin}>
          LOGIN
        </button>
      )}
    </div>
  );
};

export default Home;
