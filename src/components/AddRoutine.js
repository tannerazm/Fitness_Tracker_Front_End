import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addRoutines } from "../api";
import "./index.css";

const AddRoutine = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")
    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        await addRoutines(name, goal, token);
        navigate('/routines')
    } 


    return (
        <>
            <div> Create Routine! </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        placeholder="Enter routine name here..."
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </label>
                <label>
                    Goal
                    <input
                        placeholder="Enter routine goal here..."
                        name="goal"
                        type="text"
                        value={goal}
                        onChange={(event) => {
                            setGoal(event.target.value);
                        }}
                    />
                </label>
                <button type="submit">
                    Create Routine
                </button>
                <div>
                    Return to {' '}
                    <NavLink to="/Routines">
                        routines.
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default AddRoutine;