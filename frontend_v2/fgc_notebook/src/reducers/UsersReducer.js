import {
    LOGIN_USER
} from '../actions/index'

let initState = {
    currentUser: [],
    loggedIn: false
}
const usersReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                currentUser: [action.payload]
            }
        default:
            return state
    }
}

export default usersReducer;