import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteRoutines } from '../api'
import "./index.css";

const DeleteRoutine = ({ element_id }) => {
    async function handleSubmit (event) {
        event.preventDefault();
        const token = localStorage.getItem('token')
        await deleteRoutines(element_id, token)
    }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="cancelButton">Delete Routine</button>
    </form>
  );
};

export default DeleteRoutine;
