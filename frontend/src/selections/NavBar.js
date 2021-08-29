import { NavLink } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
function NavBar(props){
    let history = useHistory()
    function logOut(e){
        e.preventDefault()
        localStorage.removeItem("token")
        props.logoutUser()
        history.push('/')
    }

    let loggedIn = <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/create">Create notes</NavLink></li>
        <li><NavLink to="/view">View notes</NavLink></li>
        <li><a href="/" onClick={logOut} >Log Out</a></li>
        <li>{props.currentUser !== undefined ? <p>Logged in as: {props.currentUser.username}</p> : null}</li>
    </ul>

    let notLoggedIn = <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/login">LogIn</NavLink></li>
    </ul>
    return(
        <div className="nav">
            {localStorage.token ? loggedIn : notLoggedIn}
        </div>
    )
}

const MSTP = state => {
    return {
        currentUser: state.currentUser
    }
}

const MDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
} 

export default connect(MSTP, MDTP)(NavBar);