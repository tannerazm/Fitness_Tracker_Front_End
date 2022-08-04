import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { allActivities } from "../api";
import AllActivities from "./AllActivities";
import "./index.css";

const Activities = ({ everyActivity, setEveryActivity }) => {
    const [searchAllActivities, setSearchAllActivities] = useState("");
    const [allActivitiesFilteredData, setAllActivitiesFilteredData] = useState([]);
    function searchAllItems(searchValue) {
        if (searchValue.length) {
          const data = everyActivity.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
              item.description.toLowerCase().includes(searchValue.toLowerCase())
              ? true
              : false;
          });
    
          data.length > 0 ? setAllActivitiesFilteredData(data) : setAllActivitiesFilteredData([]);
        }
      }
    
      useEffect(() => {
        searchAllItems(searchAllActivities);
      }, [searchAllActivities]);
    
      useEffect(() => {
        allActivities()
          .then((object) => {
            setEveryActivity(object);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      return (
        <div className="allActivitiesContainer">
          <span>All Activities</span>
          <br></br>
          <NavLink to="/addactivities">Create an Activity</NavLink>
          <div className="allActivities">
            <br></br>
            <input
              id="searchAllActivitiesInput"
              name="search-activities"
              type="text"
              value={searchAllActivities}
              placeholder="Search All Activities..."
              onChange={(event) => {
                setSearchAllActivities(event.target.value);
              }}
            />
            {allActivitiesFilteredData.length
              ? allActivitiesFilteredData.map((element) => {
                  return <AllActivities element={element} everyActivity={everyActivity} setEveryActivity={setEveryActivity}/>;
                })
              : everyActivity.map((element) => {
                  return <AllActivities element={element} everyActivity={everyActivity} setEveryActivity={setEveryActivity}/>;
                })}
          </div>
        </div>
      )
}

export default Activities;