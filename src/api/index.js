const BASE = `https://fitnesstrac-kr.herokuapp.com`;

export async function registerPerson(username, password) {
  try {
    const response = await fetch(`${BASE}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.error) {
      throw result;
    }
    const token = result.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function loginPerson(username, password) {
  try {
    const response = await fetch(`${BASE}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.error) {
      throw result;
    }
    const token = result.token;
    const id = result.user.id;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("id", id);
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export async function verifyToken(token) {
  try {
    const response = await fetch(`${BASE}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function userRoutines(token) {
  try {
    const response = await fetch(
      `${BASE}/api/users/${localStorage.getItem("username")}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function allRoutines() {
  try {
    const response = await fetch(`${BASE}/api/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function allActivities() {
  try {
    const response = await fetch(`${BASE}/api/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addActivities(name, description, token) {
  try {
    const response = await fetch(`${BASE}/api/activities`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateActivities(name, description, token, id) {
  try {
    const response = await fetch(`${BASE}/api/activities/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function allRoutinesWithActivity(id) {
  try {
    const response = await fetch(`${BASE}/api/activities/${id}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addRoutines(name, goal, token) {
  try {
    const response = await fetch(`${BASE}/api/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: true,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateRoutines(name, goal, id, token) {
  try {
    const response = await fetch(`${BASE}/api/routines/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: true,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutines(id, token) {
  try {
    const response = await fetch(`${BASE}/api/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function attachActivityToRoutine(
  activityId,
  count,
  duration,
  routineId
) {
  try {
    const response = await fetch(
      `${BASE}/api/routines/${routineId}/activities`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateRoutineActivity(count, duration, id, token) {
  try {
    const response = await fetch(`${BASE}/api/routine_activities/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        count: count,
        duration: duration,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutineActivity(routineActivityId, token) {
  try {
    const response = await fetch(
      `${BASE}/api/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
