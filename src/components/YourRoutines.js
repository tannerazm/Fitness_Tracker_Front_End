import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const YourRoutines = ({ element }) => {
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
            {element.isPublic ? 
            <p>
                <b>Public? </b>
                Yes
            </p>
            :
            <p>
                <b>Public? </b>
                No
            </p>
            }
            <p>
                <b>ID: </b>
                {element.id}
            </p>
        </div>
    )
}

export default YourRoutines;