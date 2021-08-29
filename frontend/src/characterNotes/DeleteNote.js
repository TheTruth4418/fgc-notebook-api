import { connect } from "react-redux";
import { deleteNote } from "../actions";

function DeleteNote(props){
    const handleClick = (e) =>{
        e.preventDefault();
        props.deleteNote(props)
    }
    return (
        <>
            <a href="/" onClick={handleClick}>Delete Note</a>
        </>
    )
}

const MDTP = (dispatch) => {
    return {
        deleteNote: (data) => dispatch(deleteNote(data))
    }
}

export default connect(null, MDTP)(DeleteNote)