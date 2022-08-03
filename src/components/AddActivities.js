import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addActivities } from "../api";
import "./index.css";

const AddActivities = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        await addActivities(name, description, token);
        navigate('/activities')
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
                        activities.
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default AddActivities;