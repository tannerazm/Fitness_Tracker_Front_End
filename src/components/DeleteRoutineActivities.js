import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteRoutineActivity } from "../api"
import "./index.css";

const DeleteRoutineActivities = ({activity}) => {
    async function handleSubmit (event) {
        event.preventDefault();
        const token = localStorage.getItem('token')
        await deleteRoutineActivity(activity.routineActivityId, token)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type='submit' className="cancelButton">
            Delete
        </button>
      </form>
    </>
  );
};

export default DeleteRoutineActivities;