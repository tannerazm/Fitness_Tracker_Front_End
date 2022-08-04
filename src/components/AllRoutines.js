import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ActivitiesOnRoutines from "./ActivitiesOnRoutines";
import "./index.css";

const AllRoutines = ({ element }) => {
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
      <p>
        <b>Public? </b>
        Yes
      </p>
      <p>
        <b>Creator: </b>
        {element.creatorName}
      </p>
      <p>
        <b>ID: </b>
        {element.id}
      </p>
      <p>
        <b>Creator ID: </b>
        {element.creatorId}
      </p>
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

export default AllRoutines;
