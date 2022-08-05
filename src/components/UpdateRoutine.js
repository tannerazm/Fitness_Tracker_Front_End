import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { updateRoutines } from "../api";
import "./index.css";

const UpdateRoutine = ({ element_id, setYourRoutines, yourRoutines }) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const updatedRoutine = await updateRoutines(name, goal, element_id, token);
        setYourRoutines(yourRoutines.filter (routine => {
            return routine !== updatedRoutine
        }))
        navigate('/routines')
    } 


    return (
        <>
            <div> Update/Delete Routine Below! </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    Name {" "}
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
                    Goal {" "}
                    <input
                        placeholder="Enter routine goal here..."
                        name="description"
                        type="text"
                        value={goal}
                        onChange={(event) => {
                            setGoal(event.target.value);
                        }}
                    />
                </label>
                <br></br><br></br>
                <button type="submit" className="submitButton">
                    Update Routine
                </button>
            </form>
        </>
    )
}

export default UpdateRoutine;