import React, { useState } from "react";
import ActivitiesOnRoutines from "./ActivitiesOnRoutines";
import "./index.css";

const AllRoutines = ({ element }) => {
  const [showActivityForm, setShowActivityForm] = useState(null);

  return (
    <div className="indivRoutine">
      <h2>{element.name}</h2>
      <p>
        <b>Creator: </b>
        {element.creatorName}
      </p>
      <p>
        <b>Goal: </b>
        {element.goal}
      </p>
      <p>
        <b>Public? </b>
        Yes
      </p>
      <p>
        <b>Creator: </b>
        {element.creatorName}
      </p>
      {showActivityForm == element.id ? (
        <>
          <ActivitiesOnRoutines routineId={element.id} element={element} />
          <button
            className="cancelButton"
            onClick={() => {
              setShowActivityForm(null);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          className="submitButton"
          onClick={() => {
            setShowActivityForm(element.id);
          }}
        >
          See Activities Attached To Routines
        </button>
      )}
    </div>
  );
};

export default AllRoutines;
