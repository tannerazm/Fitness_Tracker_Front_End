import React from "react";
import { deleteRoutines } from '../api'
import "./index.css";

const DeleteRoutine = ({ element_id }) => {
    async function handleSubmit (event) {
        event.preventDefault();
        const token = localStorage.getItem('token')
        const deletedRoutine = await deleteRoutines(element_id, token)
        setYourRoutines(yourRoutines.filter(routine => routine !== deletedRoutine))
      }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="cancelButton">Delete Routine</button>
    </form>
  );
};

export default DeleteRoutine;
