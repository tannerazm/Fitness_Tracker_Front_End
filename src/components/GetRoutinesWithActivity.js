import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { allRoutinesWithActivity } from "../api";
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
        <div className="routinesWithActivitiesPage">
          <div className="routinesWithActivities">
            <div className="routinesWithActivitiesRoutine">
              <div>Creator Name: {element.creatorName}</div>
              <div>Name: {element.name}</div>
              <div>Goal: {element.goal}</div>
              {element.isPublic ? (
                <div>Public? Yes</div>
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
                      <div>Name: {item.name}</div>
                      <div>Description: {item.description}</div>
                      <div>Duration: {item.duration}</div>
                      <div>Count: {item.count}</div>
                    </div>
                  );
                })
              : null}
            <NavLink to="/activities">Back to all activities</NavLink>
          </div>
        </div>
      );
    });
  }
  return <div>{list}</div>;
};

export default GetRoutinesWithActivity;
