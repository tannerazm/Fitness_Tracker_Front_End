import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UpdateActivities from "./UpdateActivities";
import "./index.css";

const AllActivities = ({ element, everyActivity, setEveryActivity }) => {
  return (
    <div>
      <div className="indivActivity">
        <br></br>
        <NavLink to={`/RoutinesByActivity/${element.id}`}>
          {element.name}
        </NavLink>
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
