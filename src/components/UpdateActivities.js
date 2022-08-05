import React, { useState } from "react";
import { updateActivities } from "../api";
import "./index.css";

const UpdateActivities = ({ element_id, everyActivity, setEveryActivity }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const updatedActivity = await updateActivities(name, description, token, element_id);
    setEveryActivity(everyActivity.filter((activity) => {
        return activity !== updatedActivity;
    }))
  }

  return (
    <>
      <div> Update Activity Below! </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Name{" "}
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
          Description{" "}
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
          Update Activity
        </button>
      </form>
    </>
  );
};

export default UpdateActivities;
