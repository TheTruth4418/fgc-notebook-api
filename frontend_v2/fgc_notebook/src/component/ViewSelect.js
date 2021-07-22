import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
 const ViewSelect = () => {
     return(
         <>
            <NavLink to="/view/character_notes" > Character Notes </NavLink>
            <NavLink to="/view/matchup_notes" >Matchup Notes</NavLink>
            <Link to="/">Go Back</Link>
        </>
     )
 }

 export default ViewSelect