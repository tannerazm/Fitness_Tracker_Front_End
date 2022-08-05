import React from "react";
import { NavLink } from "react-router-dom";
import { registerPerson } from "../api";
import "./index.css";

const Register = ({ setUsername, setPassword, username, password }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await registerPerson(username, password);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div id="registerPage">
      <div>Register Your Account</div>
      <form onSubmit={handleSubmit} lass="registerForm">
        <label lassName="inputLabel">
          Username
          <input
            className="input"
            placeholder="Enter username here..."
            name="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label lassName="inputLabel">
          Password
          <input
            className="input"
            placeholder="Enter password here..."
            name="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit" className="pageButton">
          Register
        </button>
        <div>
          Already have an account? Log in <NavLink to="/Login">Here.</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
