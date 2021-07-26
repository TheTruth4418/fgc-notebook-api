export const getChars = () => {
    return (dispatch) => {
        fetch( 'http://127.0.0.1:3000/characters', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

export const newNote = (noteObj) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/character_notes/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({noteObj}),
        }).then(resp => resp.json())
          .then(data => {
              alert(data.message)
          })
    }
}

export const newMuNote = (noteObj) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/matchup_notes/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({noteObj}),
        }).then(resp => resp.json())
          .then(data => {
              alert(data.message)
          })
    }
}

export const newBulletPoint = (pointObj, currentObj) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/bullet_points/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({pointObj}),
        }).then(resp => resp.json())
          .then(data => {
              console.log(data)
              pointObj.type === "char" ?  dispatch(fetchNotes(currentObj)) : dispatch(fetchMatchupNotes(currentObj))
          })
    }
}

export const getGames = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/games', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

export const fetchNotes = (obj) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/${obj.game}/${obj.character}/notes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

export const fetchMatchupNotes = (obj) => {
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
                "Accept": "application/json"
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

export const deletePoint = (dataObj) => {
    let choice = window.confirm("Are you sure you want to delete this point?")
    if (choice === true){
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/bullet_points/${dataObj.id}/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

export const deleteNote = (dataObj) => {
    let url;
    dataObj.type === 'char' ? url = `http://127.0.0.1:3000/character_notes/${dataObj.id}/delete`: url = `http://127.0.0.1:3000/matchup_notes/${dataObj.id}/delete`
    let choice = window.confirm("Are you sure you want to delete this Note?")
    if (choice === true){
    return (dispatch) => {
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

export const refreshCurrentNote = () => {
    return {
        type: "REFRESH_CURRENT_NOTE"
    }
}