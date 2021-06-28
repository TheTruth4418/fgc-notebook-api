let initialState = {
    current_user: [],
    logged_in: false
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case "LOG_IN":
            return {
                current_user:[action.payload],
                logged_in: true
            }
        case "LOG_OUT":
            return initialState
        default:
            return state
    }
}


export default usersReducer;