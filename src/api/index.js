const BASE = `https://fitnesstrac-kr.herokuapp.com`

export async function registerPerson () {
    const response = await fetch(`${BASE}/api/activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TOKEN_STRING_HERE'
        },
        body: JSON.stringify({ 
            user: {
                username: username,
                password: password
            },
         }),
      });
      const result = await response.json();
      const token = result.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
}