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
      <Header isLoggedIn={isLoggedIn}/>
    </div>
  )
};

export default app;