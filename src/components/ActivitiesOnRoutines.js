import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import UpdateRoutineActivities from "./UpdateRoutineActivities";
import DeleteRoutineActivities from "./DeleteRoutineActivities";

const ActivitiesOnRoutines = ({ element }) => {
  const [showDeleteAndUpdateForm, setShowDeleteAndUpdateForm] = useState(null);
  const username = localStorage.getItem("username")

  return element.activities.map((activity) => (
    <>
      <p>
        <b>{activity.name}</b>
      </p>
      <p>Description: {activity.description}</p>
      <p>Count: {activity.count}</p>
      <p>Duration: {activity.duration}</p>
      {(element.creatorName != username) ? (
        null
      ) : showDeleteAndUpdateForm != element.id ? (
        <button
        onClick={() => {
            setShowDeleteAndUpdateForm(element.id);
          }}
          >
          Update + Delete Activity Here
        </button>
        ) : (
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
      )}
    </>
  ));
};

export default ActivitiesOnRoutines;
