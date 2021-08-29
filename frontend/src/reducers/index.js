//import { combineReducers } from 'redux'

const initialState = {

}

 const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case "GET_CHARS":
            return{
            characters: action.payload,
            current_note: undefined
        }
        case "FETCH_NOTES":
            return{
                ...state,
                current_note: action.payload
            }
        case "FETCH_MATCHUP_NOTES":
            return {
                ...state,
                current_note: action.payload
            }
        case "REFRESH_CURRENT_NOTE":
            return {
                ...state,
                current_note: undefined
            }
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        case 'LOGOUT_USER':
            return { ...state, currentUser: undefined }
        default :
            return state
    }
}

export default rootReducer;