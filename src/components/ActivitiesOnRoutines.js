import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import UpdateRoutineActivities from "./UpdateRoutineActivities";
import DeleteRoutineActivities from "./DeleteRoutineActivities";

const ActivitiesOnRoutines = ({ element }) => {
  const [showDeleteAndUpdateForm, setShowDeleteAndUpdateForm] = useState(null);

  return element.activities.map((activity) => (
    <>
      <p>
        <b>{activity.name}</b>
      </p>
      <p>Description: {activity.description}</p>
      <p>Count: {activity.count}</p>
      <p>Duration: {activity.duration}</p>
      <p>Activity ID: {activity.id}</p>
      {showDeleteAndUpdateForm == element.id ? (
        <>
          <UpdateRoutineActivities activity={activity} />
          <DeleteRoutineActivities activity={activity} />
          <button
            onClick={() => {
              setShowDeleteAndUpdateForm(null);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setShowDeleteAndUpdateForm(element.id);
          }}
        >
          Update + Delete Activity Here
        </button>
      )}
    </>
  ));
};

export default ActivitiesOnRoutines;
