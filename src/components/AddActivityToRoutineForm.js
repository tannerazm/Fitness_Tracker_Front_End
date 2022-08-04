import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    await attachActivityToRoutine( activityId, count, duration, routineId);
  }

  return (
    <>
      <p>Add An Activity To This Routine</p>
      <form onSubmit={handleSubmit}>
      <fieldset>
      <label htmlFor="select-classification">Activities <span className="classification-count">({ activityArray.length })</span></label>
      <select 
        name="activities"
        id="select-activities"
        value={activityId} 
        onChange={(event) => 
          setActivityId(event.target.value)}>
        <option value="any">Any</option>
        {

        activityArray.map ((element, idx) => 
            <option key={`${ idx }:${ element.name }`} value={ element.id }>
             {element.name}
            </option>
        ) 

        }
      </select>
    </fieldset>
        <label>
          Count
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
        <label>
          Duration
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
        <button type="submit">Attach Activity</button>
      </form>
    </>
  );
};

export default AddActivityToRoutineForm;
