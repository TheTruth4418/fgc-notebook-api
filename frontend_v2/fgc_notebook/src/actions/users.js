import { LOGIN_USER } from "."

export const login = (userObj) => {
    return (dispatch) =>{
        return fetch('http://127.0.0.1:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({userObj})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type:LOGIN_USER,
                    payload:userObj
                })
            })
      }
}
// credentials: 'include'