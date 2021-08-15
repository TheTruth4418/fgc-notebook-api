import { Component } from "react";
import { connect } from "react-redux";
import NewBulletPointForm from "../bulletPoints/NewBulletPointForm";
import { newBulletPoint } from "../actions";
import DeletePoint from "../bulletPoints/DeletePoint";
import DeleteNote from "./DeleteNote";

class NoteList extends Component {

    state = {form: false}

    charObj = {
        character: this.props.char,
        game: window.location.pathname.split("/")[2].split("%20").join(" ")
    }

    onClick = (e) => {
        this.setState({form:true})
    }

    submit = (note) => {
        this.props.submitBulletPoint(note, this.charObj)
        this.setState({form: false, target: ""})

    }

    cancel = () => {
        this.setState({form: false, target: ""})
    }

    render(){
        let pointsArr = []
        let title = this.props.charNote.title
        let points = this.props.charNote.bullet_points
        let id = this.props.charNote.id
        points.forEach(point => pointsArr.push(
            <li className="points" key={point.id}>{point.description} <DeletePoint id={point.id} type="char" currentObj={this.charObj}/></li>
        ))
        return (
            <>
                <h3 className="title">{title} <DeleteNote id={id} type="char" currentObj={this.charObj} /></h3>
                {pointsArr}
                <button onClick={this.onClick}>New Bullet Point</button><br/>
                {this.state.form ===  true ? 
                <NewBulletPointForm id={id} removeForm={this.cancel} submit={this.submit} type="char"/> : null}
            </>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        submitBulletPoint: (pointObj, charObj) => dispatch(newBulletPoint(pointObj, charObj)) 
    }
}

export default connect(null, mapDispatchToProps)(NoteList)
