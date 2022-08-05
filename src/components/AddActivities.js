import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addActivities } from "../api";
import "./index.css";

const AddActivities = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await addActivities(name, description, token);
    navigate("/activities");
  }

  return (
    <div className="createActivityPage">
    <div className="createActivity">
      <div className="createActivityTitle"> Create Activity! </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Name {' '}
          <input
            placeholder="Enter activity name here..."
            name="name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Description {' '}
          <input
            placeholder="Enter activity description here..."
            name="description"
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <button type="submit" className="submitButton">
          Create Activity
        </button>
        <br></br>
        <br></br>
        <div>
          Return to <NavLink to="/Activities">activities.</NavLink>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddActivities;
