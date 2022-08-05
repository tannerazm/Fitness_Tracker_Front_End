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
      <div className="indivActivity">
      <br></br>
      <NavLink to = {`/RoutinesByActivity/${element.id}`}>{element.name}</NavLink>
      <p>
        <b>Description: </b>
        {element.description}
      </p>
      <UpdateActivities
        element_id={element.id}
        everyActivity={everyActivity}
        setEveryActivity={setEveryActivity}
      />
    </div>
    </div>
  );
};

export default AllActivities;
