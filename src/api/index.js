const BASE = `https://fitnesstrac-kr.herokuapp.com`

export async function registerPerson (username, password) {
    try {
        const response = await fetch(`${BASE}/api/users/register`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username: username,
            password: password
            })
        })
        const result = await response.json()
        console.log(result.token, "result.token")
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        return result;
    } catch (error) {
        console.error(error)
    }
}

export async function loginPerson (username, password) {
    try {
        const response = await fetch(`${BASE}/api/users/login`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username: username,
            password: password
            })
        })
        const result = await response.json()
        console.log(result.token, "result.token")
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        return result;
    } catch (error) {
        console.error(error)
    }
}