import { connect } from "react-redux";
import MatchupNoteList from "./MatchupNoteList";

function MatchupNoteCard(props){
    let notes = props.current_note.matchup_notes
    let character = document.getElementById("fighter").value
    let opponent = document.getElementById("fighter2").value
    let notesArr = []
    notes.forEach((ele, index) => {
        notesArr.push(<MatchupNoteList muNote={ele} key={index} char={character} opp={opponent}/>)
    })
    return (
        <>
            <h1>{`${character} vs. ${opponent}`}</h1>
            {notesArr}
        </>
    )
}

const MSTP = state => {
    return {
        characters: state.characters,
        current_note: state.current_note
    }
}

export default connect(MSTP)(MatchupNoteCard)