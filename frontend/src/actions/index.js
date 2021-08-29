export const getChars = () => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch( 'http://127.0.0.1:3000/characters', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
            }
            })
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: "GET_CHARS",
                    payload: data
                })
            });
        }
    }
}

export const newNote = (noteObj) => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch('http://127.0.0.1:3000/character_notes/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                }, body: JSON.stringify({noteObj}),
            }).then(resp => resp.json())
              .then(data => {
                  alert(data.message)
                  console.log(data)
              })
        }
    }
}

export const newMuNote = (noteObj) => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch('http://127.0.0.1:3000/matchup_notes/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                }, body: JSON.stringify({noteObj}),
            }).then(resp => resp.json())
              .then(data => {
                  alert(data.message)
              })
        }
    }
}

export const newBulletPoint = (pointObj, currentObj) => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch('http://127.0.0.1:3000/bullet_points/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                }, body: JSON.stringify({pointObj}),
            }).then(resp => resp.json())
              .then(data => {
                  console.log(data)
                  pointObj.type === "char" ?  dispatch(fetchNotes(currentObj)) : dispatch(fetchMatchupNotes(currentObj))
              })
        }
    }
}

export const getGames = () => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch('http://127.0.0.1:3000/games', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                }).then(resp => resp.json())
                  .then(data => {
                    dispatch({
                        type: "GET_GAMES",
                        payload: data
                    })
                })
        }
    }
}

export const fetchNotes = (obj) => {
    let token = localStorage.token
    if(token){
        return (dispatch) => {
            fetch(`http://127.0.0.1:3000/${obj.game}/${obj.character}/notes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                }).then(resp => resp.json())
                  .then(data => {
                    dispatch({
                        type: "FETCH_NOTES",
                        payload: data
                    })
                  })
        }
    }
}

export const fetchMatchupNotes = (obj) => {
    let token = localStorage.token
   if(token){
    if (obj.character === undefined || obj.opponent === undefined){
        alert("Please dont leave both fields blank!")
        return {
            type: "NOTHING"
        }
    } else {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/${obj.game}/${obj.character}/${obj.opponent}/notes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${token}`
            },
            }).then(resp => resp.json())
              .then(data => {
                dispatch({
                    type: "FETCH_MATCHUP_NOTES",
                    payload: data
                })
              })
        }
    }
   }
}

export const deletePoint = (dataObj) => {
    let token = localStorage.token
    if(token){
        let choice = window.confirm("Are you sure you want to delete this point?")
        if (choice === true){
        return (dispatch) => {
            fetch(`http://127.0.0.1:3000/bullet_points/${dataObj.id}/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            }).then(data => {
                dataObj.type === "char" ?  dispatch(fetchNotes(dataObj.currentObj)) : dispatch(fetchMatchupNotes(dataObj.currentObj))
              })
        }
        } else {
            return {
                type: "NOTHING"
            }
        }
    }
}

export const deleteNote = (dataObj) => {
    let token = localStorage.token
    if(token){
        let url;
        dataObj.type === 'char' ? url = `http://127.0.0.1:3000/character_notes/${dataObj.id}/delete`: url = `http://127.0.0.1:3000/matchup_notes/${dataObj.id}/delete`
        let choice = window.confirm("Are you sure you want to delete this Note?")
        if (choice === true){
        return (dispatch) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            }).then(data => {
                dataObj.type === "char" ?  dispatch(fetchNotes(dataObj.currentObj)) : dispatch(fetchMatchupNotes(dataObj.currentObj))
              })
        }
        } else {
            return {
                type: "NOTHING"
            }
        }
    }
}

export const refreshCurrentNote = () => {
    let token = localStorage.token
    if(token){
        return {
            type: "REFRESH_CURRENT_NOTE"
        }
    }
}

  
export const postSignup = userObj => {
    return dispatch => {
      return fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({userObj})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            alert(data.message)
          } else {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  export const fetchLogin = (userObj) => {
    let state = userObj.state
    console.log(state)
    return dispatch => {
      return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({state})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            alert(data.message)
          } else {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
            userObj.history.push('/')
          }
        })
    }
  }

export const loginUser = (userObj) => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  })

  export const fetchUser = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            localStorage.clear()
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}