import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const AllRoutines = ({ element }) => {
  return (
    <div>
      <h2>{element.name}</h2>
      <p>
        <b>Creator: </b>
        {element.creatorName}
      </p>
      <p>
        <b>Goal: </b>
        {element.goal}
      </p>
      <p>
        <b>ID: </b>
        {element.id}
      </p>
    </div>
    
  );
};

export default AllRoutines;
