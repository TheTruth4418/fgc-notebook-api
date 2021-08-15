import { NavLink} from "react-router-dom/cjs/react-router-dom.min";
import shao from "../images/shaomk3.gif"
import sub from "../images/submk3.gif"
import scorp from "../images/scorpmk2.gif"
import vs from "../images/vs.png"

 const ViewSelect = () => {
     return(
         <>
            <h2 id="info">Which would you like to view?</h2>

            <div className="container">
                <div className="child">
                    <NavLink to="/view/character_notes" > Character Notes </NavLink><br/>
                    <img src={shao} alt="" className="solo"/>
                </div>
                <div className="child" id="child2">
                    <NavLink to="/view/matchup_notes" >Matchup Notes</NavLink><br/>
                    <img src={scorp} alt="" className="vs" id="p1"/>
                    <img src={vs} alt="" className="vs" id="vs"/>
                    <img src={sub} alt="" className="vs" id="p2"/>
                </div>
            </div>
        </>
     )
 }

 export default ViewSelect