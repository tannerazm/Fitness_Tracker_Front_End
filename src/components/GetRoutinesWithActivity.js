import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { allRoutinesWithActivity } from "../api";
// import AddActivityToRoutineForm from "./AddActivityToRoutineForm";
import "./index.css";

const GetRoutinesWithActivity = () => {
  const [routinesWithActivities, setRoutinesWithActivities] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getAllRoutinesWithActivity() {
      const data = await allRoutinesWithActivity(id);
      setRoutinesWithActivities(data);
    }
    getAllRoutinesWithActivity();
  }, []);
  let list = null;
  if (routinesWithActivities.length) {
    list = routinesWithActivities.map((element) => {
      return (
        <div className="routinesWithActivities">
          <div className="routinesWithActivitiesRoutine">
            <div>Creator Name: {element.creatorName}</div>
            <div>Name: {element.name}</div>
            <div>Goal: {element.goal}</div>
            {element.isPublic ? (
              <div>
                Public? Yes
              </div>
            ) : (
              <div>
                <b>Public?</b> No
              </div>
            )}
          </div>
          {element.activities && element.activities.length
            ? element.activities.map((item) => {
                return (
                  <div className="routinesWithActivitiesActivity">
                    <div>Activity Name: {item.name}</div>
                    <div>Activity Description: {item.description}</div>
                    <div>Activity Duration: {item.duration}</div>
                    <div>Activity Count: {item.count}</div>
                  </div>
                );
              })
            : null}
        </div>
      );
    });
  }
  return <div>{list}</div>;
};

export default GetRoutinesWithActivity;
