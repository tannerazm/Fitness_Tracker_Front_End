import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { allRoutinesWithActivity } from "../api"
import "./index.css";

const GetRoutinesWithActivity = () => {
    const [bob, setBob] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function joe() {
            const data = await allRoutinesWithActivity(id)
            setBob(data);
        }
        joe()
    }, [])
    let list = null;
    if (bob.length) {
        console.log(bob, "bob")
        list = bob.map((element) => {
            return (
                <div className="routinesWithActivities">
                    <div className="routinesWithActivitiesRoutine" >
                        <div>Creator Name: {element.creatorName}</div>
                        <div>Name: {element.name}</div>
                        <div>Goal: {element.goal}</div>
                        <div>Public? {element.isPublic}</div>
                        <div>ID: {element.id}</div>
                        <div className="routinesWithActivitiesCreatorId" >Creator ID: {element.creatorId}</div>
                    </div>
                    {element.activities && element.activities.length ? element.activities.map((item) => {
                        return (
                            <div className="routinesWithActivitiesActivity">
                                <div>Activity Name: {item.name}</div>
                                <div>Activity Description: {item.description}</div>
                                <div>Activity Duration: {item.duration}</div>
                                <div>Activity Count: {item.count}</div>
                                <div>Activity ID: {item.id}</div>
                                <div>Routine ID:{item.routineId}</div>
                                <div>Routine Activity ID: {item.routineActivityId}</div>
                            </div>)
                    }
                    ) : null}
                </div>
            )
        })
    }
    return <div>{list}</div>;
}

export default GetRoutinesWithActivity;