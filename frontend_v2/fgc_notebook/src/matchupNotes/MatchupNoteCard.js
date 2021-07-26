import MatchupNoteList from "./MatchupNoteList";

function MatchupNoteCard(props){
    let notes = props.current_note.matchup_notes
    let character = props.current_note.character.name
    let opponent = props.current_note.opponent.name
    let notesArr = []
    notes.forEach((ele, index) => {
        notesArr.push(<MatchupNoteList muNote={ele} key={index} char={character} opp={opponent}/>)
    })
    return (
        <>
            <h1>{`${character} vs. ${opponent}`}</h1>
            {notesArr.length === 0 ? <h3>{`No notes found for ${character} vs ${opponent}`}</h3>: notesArr }
        </>
    )
}

export default MatchupNoteCard