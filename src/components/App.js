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

const app = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
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
      </Routes>
    </div>
  )
};

export default app;