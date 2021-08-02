import MatchupNoteList from "./MatchupNoteList";
import vs from "../images/vs.png"

function MatchupNoteCard(props){
    let notes = props.current_note.matchup_notes
    let character = props.current_note.character.name
    let opponent = props.current_note.opponent.name
    let game =  window.location.pathname.split("/")[3].split("%20").join(" ")
    let notesArr = []
    notes.forEach((ele, index) => {
        notesArr.push(<MatchupNoteList muNote={ele} key={index} char={character} opp={opponent}/>)
    })
    return (
        <div className="noteCard">
            <h1 class="characters">{`${character} vs. ${opponent}`}</h1>
            <div className="cardImg">
                <img src={require(`../images/${game}/${character}.png`).default} alt=""/>
            </div>

            <div className="cardImg">
                <img src={vs} alt="" id="vs2"/>
            </div>

            <div className="cardImg">
                <img src={require(`../images/${game}/${opponent}.png`).default} alt=""/>
            </div>
            {notesArr.length === 0 ? <h3>{`No notes found for ${character} vs ${opponent}`}</h3>: notesArr }
        </div>
    )
}

export default MatchupNoteCard