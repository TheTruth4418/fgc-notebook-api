import { Component } from "react";
import { connect } from "react-redux";
import NewBulletPointForm from "../bulletPoints/NewBulletPointForm";
import DeletePoint from "../bulletPoints/DeletePoint";
import DeleteNote from "../characterNotes/DeleteNote";
import { newBulletPoint} from "../actions";

class MatchupNoteList extends Component {

    state = {form: false}
    muObj = {
        character: this.props.char,
        opponent: this.props.opp,
        game: window.location.pathname.split("/")[2].split("%20").join(" ")
    }

    onClick = (e) => {
        this.setState({form:true})
    }

    submit = (note) => {
        this.props.submitBulletPoint(note, this.muObj)
        this.setState({form: false})
    }

    cancel = () => {
        this.setState({form: false, target: ""})
    }

    render(){
        let pointsArr = []
        let title = this.props.muNote.title
        let points = this.props.muNote.bullet_points
        let id = this.props.muNote.id
        points.forEach(point => pointsArr.push(
        <>
            <li className="points" key={point.id}>{point.description} <DeletePoint id={point.id} type="mu" currentObj={this.muObj}/></li>
        </>
        ))
        return (
            <div className="Info">
                <h3 class="title">{title} <DeleteNote id={id} key={id} type="mu" currentObj={this.muObj}/></h3>
                {pointsArr}
                {this.state.form ===  true ? 
                <NewBulletPointForm id={id} key={id} removeForm={this.cancel} submit={this.submit} type="mu"/> : null}
                <button onClick={this.onClick}>New Bullet Point</button><br/>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        submitBulletPoint: (pointObj, charObj) => dispatch(newBulletPoint(pointObj, charObj)) 
    }
}

export default connect(null, mapDispatchToProps)(MatchupNoteList)
