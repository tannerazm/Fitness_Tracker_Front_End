import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Activities,
  AddActivities,
  AddRoutine,
  DeleteRoutineActivities,
  DeleteRoutine,
  Header,
  Home,
  Login,
  Logout,
  Profile,
  Register,
  RoutineActivities,
  Routines,
  UpdateActivities,
  UpdateRoutineActivities,
  UpdateRoutine,
  Users,
} from "./";
import GetRoutinesWithActivity from "./GetRoutinesWithActivity";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [yourRoutines, setYourRoutines] = useState([]);
  const [everyRoutine, setEveryRoutine] = useState([]);
  const [everyActivity, setEveryActivity] = useState([]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/routines"
          element={
            <Routines
              yourRoutines={yourRoutines}
              setYourRoutines={setYourRoutines}
              everyRoutine={everyRoutine}
              setEveryRoutine={setEveryRoutine}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities
              everyActivity={everyActivity}
              setEveryActivity={setEveryActivity}
            />
          }
        />
        <Route path="/addactivities" element={<AddActivities />} />
        <Route path="/addroutines" element={<AddRoutine />} />
        <Route path="/RoutinesByActivity" element={<GetRoutinesWithActivity />} />
      </Routes>
    </div>
  );
};

export default App;
