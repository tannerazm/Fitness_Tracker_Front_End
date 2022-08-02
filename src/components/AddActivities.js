import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addActivities } from "../api";
// import jwt from "jsonwebtoken";
// // const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = process.env;
import "./index.css";

const AddActivities = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const token = localStorage.getItem("token");
    // const jwtCheck = jwt.verify(token, JWT_SECRET)
    // console.log(jwtCheck, "jwtcheck")
    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const bob = await addActivities(name, description, token);
        console.log(bob, "this is bob");
    } 


    return (
        <>
            <div> Create Activity! </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        placeholder="Enter activity name here..."
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            console.log(event.target.value, "value")
                            setName(event.target.value);
                        }}
                    />
                </label>
                <label>
                    Description
                    <input
                        placeholder="Enter activity description here..."
                        name="description"
                        type="text"
                        value={description}
                        onChange={(event) => {
                            console.log(event.target.value, "value")
                            setDescription(event.target.value);
                        }}
                    />
                </label>
                <button type="submit">
                    Create Activity
                </button>
                <div>
                    Return to {' '}
                    <NavLink to="/Activities">
                        activities
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default AddActivities;