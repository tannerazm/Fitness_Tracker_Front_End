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
        <div className="createRoutinePage">
            <div className='createRoutine'>
            <div className="createRoutineTitle"> Create Routine! </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    Name {' '}
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
                <br></br><br></br>
                <label>
                    Goal {' '}
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
                <br></br><br></br>
                <button type="submit" className="submitButton">
                    Create Routine
                </button>
                <br></br><br></br>
                <div>
                    Return to {' '}
                    <NavLink to="/Routines">
                        routines.
                    </NavLink>
                </div>
                
            </form>
        </div>
        </div>
    )
}

export default AddRoutine;