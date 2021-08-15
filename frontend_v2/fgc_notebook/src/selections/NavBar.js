import { NavLink } from 'react-router-dom'
function NavBar(){
    return(
        <div className="nav">
            <ul>
                <li><NavLink to="/create">Create notes</NavLink></li>
                <li><NavLink to="/view">View notes</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;