import MatchupNoteList from "./MatchupNoteList";
import vs from "../images/vs.png"

function MatchupNoteCard(props){
    let game =  window.location.pathname.split("/")[3].split("%20").join(" ")
    let notesArr = []
    let data = props.data
    let char;
    let opp;
    if(data.matchup){
        char = data.matchup.char
        opp = data.matchup.opp
    } else {
        char = data[0].matchup.character.name
        opp = data[0].matchup.opponent.name
        notesArr = data.map((ele, index) => <MatchupNoteList muNote={ele} key={index} char={char} opp={opp}/> )
    }
  return (
        <div className="noteCard">
            <h1 className="characters">{`${char} vs. ${opp}`}</h1>
            <div className="cardImg">
                <img src={require(`../images/${game}/${char}.png`).default} alt=""/>
            </div>

            <div className="cardImg">
                <img src={vs} alt="" id="vs2"/>
            </div>

            <div className="cardImg">
                <img src={require(`../images/${game}/${opp}.png`).default} alt=""/>
            </div>
            {notesArr.length === 0 ? <h3>{`No notes found for ${char} vs ${opp}`}</h3>: notesArr }
        </div>
    ) 
  }

export default MatchupNoteCard