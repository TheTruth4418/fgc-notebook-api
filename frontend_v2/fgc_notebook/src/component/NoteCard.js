import { connect } from "react-redux";
import NoteList from "../containers/NoteList";

function NoteCard(props){
    let note = props.current_note
    let notesArr = []
    note.character_notes.forEach((ele, index) => {
        notesArr.push(<NoteList charNote={ele} key={index} char={note.name}/>)
    })
    return (
        <>
            <h1>{note.name}</h1>
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

export default connect(MSTP)(NoteCard)