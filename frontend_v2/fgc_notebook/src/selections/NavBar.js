import { NavLink } from 'react-router-dom'
import '../styleSheets/selection/NavBar.css'
function NavBar(){
    return(
        <div class="nav">
            <ul>
                <li><NavLink to="/create">Create Mode</NavLink></li>
                <li><NavLink to="/view">View Mode</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;