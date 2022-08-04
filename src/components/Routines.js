import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { userRoutines, allRoutines } from "../api";
import AllRoutines from "./AllRoutines";
import YourRoutines from "./YourRoutines";
import "./index.css";
import UpdateRoutine from "./UpdateRoutine";

const Routines = ({
  yourRoutines,
  setYourRoutines,
  everyRoutine,
  setEveryRoutine,
  isLoggedIn,
}) => {
  const [yourRoutineFilteredData, setYourRoutineFilteredData] = useState([]);
  const [allRoutineFilteredData, setAllRoutineFilteredData] = useState([]);
  const [searchYourRoutines, setSearchYourRoutines] = useState("");
  const [searchAllRoutines, setSearchAllRoutines] = useState("");
  const token = localStorage.getItem("token");

  // Filter function and useEffect used for only "Your Routines"

  function searchYourItems(searchValue) {
    if (searchValue.length) {
      const data = yourRoutines.filter((item) => {
        return item.creatorName
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          item.goal.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });

      data.length > 0 ? setYourRoutineFilteredData(data) : setYourRoutineFilteredData([]);
    }
  }

  useEffect(() => {
    searchYourItems(searchYourRoutines);
  }, [searchYourRoutines]);

  useEffect(() => {
    userRoutines(token)
      .then((object) => {
        setYourRoutines(object);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter function and useEffect used for only "All Routines"


  function searchAllItems(searchValue) {
    if (searchValue.length) {
      const data = everyRoutine.filter((item) => {
        return item.creatorName
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          item.goal.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });

      data.length > 0 ? setAllRoutineFilteredData(data) : data.length === 0 ? allRoutineFilteredData : setAllRoutineFilteredData([]);
    }
  }

  useEffect(() => {
    searchAllItems(searchAllRoutines);
  }, [searchAllRoutines]);

  useEffect(() => {
    allRoutines()
      .then((object) => {
        setEveryRoutine(object);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="routinesPage">
      <div className="routinesTitle">Get your workout on!
      {
        token ?
        <NavLink to="/addroutines">Create a Routine</NavLink>
        :
        null
      }
      </div>
      <div className="routinesContainer">
        {
          isLoggedIn ?
        <div className="yourRoutinesContainer">
          <span>Your Routines</span>
          <div className="yourRoutines">
            <br></br>
            <input
              id="searchYourRoutinesInput"
              name="search-routines"
              type="text"
              value={searchYourRoutines}
              placeholder="Search Your Routines..."
              onChange={(event) => {
                setSearchYourRoutines(event.target.value);
              }}
            />
            {yourRoutineFilteredData.length
              ? yourRoutineFilteredData.map((element) => {
                  return <YourRoutines element={element}/>;
                })
              : yourRoutines.map((element) => {
                  return <YourRoutines element={element}/>;
                })}
          </div>
        </div>
        :
        null
        }
        <div className="allRoutinesContainer">
          <span>All Routines</span>
          <div className="allRoutines">
            <br></br>
            <input
              id="searchAllRoutinesInput"
              name="search-all-routines"
              type="text"
              value={searchAllRoutines}
              placeholder="Search All Routines..."
              onChange={(event) => {
                setSearchAllRoutines(event.target.value);
              }}
            />
            {allRoutineFilteredData.length
              ? allRoutineFilteredData.map((element) => {
                  return <AllRoutines element={element} />;
                })
              : everyRoutine.map((element) => {
                  return <AllRoutines element={element} everyRoutine={everyRoutine} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routines;
