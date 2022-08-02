import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const AllActivities = ({ element }) => {
  return (
    <div>
      <h2>{element.name}</h2>
      <p>
        <b>Description: </b>
        {element.description}
      </p>
      <p>
        <b>ID: </b>
        {element.id}
      </p>
    </div>
  );
};

export default AllActivities;