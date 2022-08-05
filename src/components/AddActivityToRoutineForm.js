import React, { useState, useEffect } from "react";
import { allActivities, attachActivityToRoutine } from "../api";
import "./index.css";

const AddActivityToRoutineForm = ({ element, routineId }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activityId, setActivityId] = useState(null);
  const [activityArray, setActivityArray] = useState([]);

  useEffect(() => {
    async function getData() {
      Promise.all([allActivities()]).then(([activities]) => {
        setActivityArray(activities);
      });
    }
    getData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    await attachActivityToRoutine(activityId, count, duration, routineId);
  }

  return (
    <>
      <p>
        <b>Add An Activity To This Routine</b>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="addActivityToRoutineBox">
          <fieldset className="fieldset">
            <label htmlFor="select-classification">
              Activities{" "}
              <span className="classification-count">
                ({activityArray.length})
              </span>
            </label>
            <br></br>
            <br></br>
            <select
              className="select"
              name="activities"
              id="select-activities"
              value={activityId}
              onChange={(event) => setActivityId(event.target.value)}
            >
              <option value="any">Any</option>
              {activityArray.map((element, idx) => (
                <option key={`${idx}:${element.name}`} value={element.id}>
                  {element.name}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <br></br>
        <label>
          Count{" "}
          <input
            placeholder="Enter count here..."
            name="count"
            type="text"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          />
        </label>
        <br></br> <br></br>
        <label>
          Duration{" "}
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
        <br></br>
        <br></br>
        <button className="submitButton" type="submit">
          Attach Activity
        </button>
      </form>
    </>
  );
};

export default AddActivityToRoutineForm;
