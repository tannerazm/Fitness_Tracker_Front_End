import React, { useState, useEffect } from "react";
import { Navigate, NavLink, Link, useNavigate } from "react-router-dom";
import { allRoutinesWithActivity } from "../api";
import UpdateActivities from "./UpdateActivities";
import GetRoutinesWithActivity from "./GetRoutinesWithActivity";
import "./index.css";

const AllActivities = ({ element, everyActivity, setEveryActivity }) => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>{element.name}</h2>
      <p>
        <b>Description: </b>
        {element.description}
      </p>
      <p>
        <b>ID: </b>
        {element.id}
      </p>
      <UpdateActivities
        element_id={element.id}
        everyActivity={everyActivity}
        setEveryActivity={setEveryActivity}
      />
    </div>
  );
};

export default AllActivities;
