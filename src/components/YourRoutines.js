import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UpdateRoutine from "./UpdateRoutine";
import "./index.css";
import DeleteRoutine from "./DeleteRoutine";

const YourRoutines = ({ element }) => {
    console.log(element, "ELEMENT")
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
            <UpdateRoutine
                element_id={element.id}
            />
            <DeleteRoutine
                element_id={element.id}
            />
        </div>
    )
}

export default YourRoutines;