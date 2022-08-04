import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UpdateRoutine from "./UpdateRoutine";
import "./index.css";
import DeleteRoutine from "./DeleteRoutine";
import AddActivities from "./AddActivities";
import AddActivityToRoutineForm from "./AddActivityToRoutineForm";
import ActivitiesOnRoutines from "./ActivitiesOnRoutines";

const YourRoutines = ({ element }) => {
  const [showAddForm, setShowAddForm] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(null);
  return (
    <div>
      <h2>{element.name}</h2>
      <p>
        <b>Creator: </b>
        {element.creatorName}
      </p>
      <p>
        <b>Goal: </b>
        {element.goal}
      </p>
      {element.isPublic ? (
        <p>
          <b>Public? </b>
          Yes
        </p>
      ) : (
        <p>
          <b>Public? </b>
          No
        </p>
      )}
      <p>
        <b>ID: </b>
        {element.id}
      </p>
      <UpdateRoutine element_id={element.id} />
      <DeleteRoutine element_id={element.id} />
      {showAddForm == element.id ? (
        <>
          <AddActivityToRoutineForm routineId={element.id} element={element} />
          <button
            onClick={() => {
              setShowAddForm(null);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setShowAddForm(element.id);
          }}
        >
          Add Activity Here
        </button>
      )}
      {showActivityForm == element.id ? (
        <>
          <ActivitiesOnRoutines routineId={element.id} element={element} />
          <button
            onClick={() => {
                setShowActivityForm(null);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
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

export default YourRoutines;
