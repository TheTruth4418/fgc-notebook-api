import { NavLink } from 'react-router-dom'
function Welcome(){
    return(
        <>
            <h3>Welcome to FGC notebook API! Click below which mode you would like to use!</h3>
            <NavLink to="/view">View Mode</NavLink>
            <NavLink to="/create">Create Mode</NavLink>
        </>
    )
}

export default Welcome;