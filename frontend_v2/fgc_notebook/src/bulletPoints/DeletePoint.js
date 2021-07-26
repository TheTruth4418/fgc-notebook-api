import { connect } from "react-redux";
import { deletePoint } from "../actions";

function DeletePoint(props){
    const handleClick = (e) =>{
        e.preventDefault();
        props.deletePoint(props)
    }
    return (
        <a href="/" onClick={handleClick}>Delete</a>
    )
}

const MDTP = (dispatch) => {
    return {
        deletePoint: (props) => dispatch(deletePoint(props))
    }
}

export default connect(null, MDTP)(DeletePoint)