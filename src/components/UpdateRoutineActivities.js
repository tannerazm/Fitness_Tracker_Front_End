import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { updateRoutineActivity } from "../api"
import "./index.css";

const UpdateRoutineActivities = ({activity}) => {
    const [count, setCount] = useState("")
    const [duration, setDuration] = useState("")

    async function handleSubmit (event) {
        event.preventDefault();
        const token = localStorage.getItem('token')
        await updateRoutineActivity(count, duration, activity.routineActivityId, token)
    }

  return (
    <>
      <div> Update Activity Below </div><br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Count {" "}
          <input
            placeholder="Enter count here..."
            name="count"
            type="text"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          />
        </label><br></br><br></br>
        <label>
          Duration {" "}
          <input
            placeholder="Enter duration here..."
            name="duration"
            type="text"
            value={duration}
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          />
        </label>
        <br></br><br></br>
        <button type="submit" className="submitButton">Update</button >
      </form>
    </>
  );
};

export default UpdateRoutineActivities;
