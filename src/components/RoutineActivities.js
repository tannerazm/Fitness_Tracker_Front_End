import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const RoutineActivities = ({ item }) => {
    async function handleSubmit (event) {
        event.preventDefault()
        const token = localStorage.getItem('token')
        await attachActivityToRoutine(item.count, item.duration, item.id, token)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>
                Add Activity To This Routine
            </button>
        </form>
    )
}

export default RoutineActivities;