

export const logIn = (userObj) => {
    let username = userObj.username
    let password = userObj.password
    return (dispatch) => {
        fetch( 'http://127.0.0.1:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
        },
        body: JSON.stringify({ username, 
                                password })
        } )
        .then(resp => {
            if(resp.status === 202){
                dispatch({
                    type: "LOG_IN",
                    payload: userObj
                })
            } else {
                alert("Credentials didnt find a user please try again!")
            } 
        })
    }
}

export const logOut = () =>{
    return{
        type: "LOG_OUT"
    }
}