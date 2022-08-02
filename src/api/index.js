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
    const token = result.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return result;
  } catch (error) {
    console.error(error);
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
    const token = result.token;
    
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      return result;
    }
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
}

export async function userRoutines(token) {
  try {
    const response = await fetch(`${BASE}/api/users/${localStorage.getItem('username')}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
}

export async function allActivities () {
  try {
    const response = await fetch(`${BASE}/api/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    let result = await response.json();
    return result
  }
  catch (error) {
    console.error(error)
  }
}

export async function addActivities (name, description, token) {
  try {
    console.log(token, "token", name, "name", description, "description")
    const response = await fetch(`${BASE}/api/activities`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
      const result = await response.json()
      return result;
  } catch (error) {
    console.error(error)
  }

}