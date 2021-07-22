import { Component } from "react";
import NewBulletPointForm from "./NewBulletPointForm";
import { newBulletPoint} from "../actions";
import { connect } from "react-redux";

class NoteReader extends Component{

    state = {form: false,
            target: ""}

    onClick = (e) => {
        this.setState({
            form:true,
            target:e.target.id})
    }
    submit = (note) => {
        //this.props.newBulletPoint(note)
        console.log(note)
        this.setState({form: false, target: ""})
    }

    cancel = () => {
        this.setState({form: false, target: ""})
    }

    render(){
        console.log(this.props.note)
        let count = 0;
        let pointsArr = [];
        this.props.note[1]["Bullet Points"].forEach(note => {
            pointsArr.push(<li key={note.id}>{note.description}</li>)
        }) 
        console.log(this.props.game)
        return(
            <>
                <li key={count++}>{this.props.note[0]}</li>
                <ul>{pointsArr}</ul>
                <button onClick={this.onClick} id={this.props.note.id}>New Bullet Point</button>
                {this.state.form ===  true ? 
                <NewBulletPointForm removeForm={this.cancel} submit={this.submit} note={this.props.note} character={this.props.character}/> : null}
            </>
            )
        }
}

const MDTP = (dispatch) => {
    return {
        newBulletPoint: (pointObj) => dispatch(newBulletPoint(pointObj))
    }
}

const MSTP = state => {
    return {
        characters: state.characters
    }
}

export default connect(MSTP,MDTP)(NoteReader)