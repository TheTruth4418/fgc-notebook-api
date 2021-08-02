import { connect } from "react-redux";
import NoteList from "./NoteList";

function NoteCard(props){
    let note = props.current_note
    let notesArr = []
    let game =  window.location.pathname.split("/")[3].split("%20").join(" ")
    let character = note.name
    note.character_notes.forEach((ele, index) => {
        notesArr.push(<NoteList charNote={ele} key={index} char={note.name}/>)
    })
    return (
        <div class="noteCard">
            <h1 class="characters">{note.name}</h1>
            <div className="charChild">{notesArr.length === 0 ? <h3>{`No notes found for ${character}`}</h3>: notesArr }</div>
            <div className="charChild"><img src={require(`../images/${game}/${character}.png`).default} alt="" className="char" /></div>
        </div>
    )
}

const MSTP = state => {
    return {
        characters: state.characters,
        current_note: state.current_note
    }
}

export default connect(MSTP)(NoteCard)