import { connect } from "react-redux";
import NoteList from "./NoteList";

function NoteCard(props){
    let note = props.current_note
    let notesArr = []
    let game =  window.location.pathname.split("/")[3].split("%20").join(" ")
    if(note.length !== 0){
        notesArr = note.map((x, y) =><NoteList charNote={x} key={y} char={props.character}/>)
    }
    return (
        <div className="noteCard">
            <h1 className="characters">{props.character}</h1>
            <div className="charChild">{notesArr.length === 0 ? <h3>{`No notes found for ${props.character}`}</h3>: notesArr }</div>
            <div className="charChild"><img src={require(`../images/${game}/${props.character}.png`).default} alt="" className="char" /></div>
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