import { Component } from "react";
import { connect } from "react-redux";
import NewBulletPointForm from "../component/NewBulletPointForm";
import { newBulletPoint, submitBulletPoint } from "../actions";

class MatchupNoteList extends Component {

    state = {form: false}

    onClick = (e) => {
        this.setState({form:true})
    }

    submit = (note) => {
        let muObj = {
            character: this.props.char,
            opponent: this.props.opp,
            game: window.location.pathname.split("/")[2].split("%20").join(" ")
        }
        this.props.submitBulletPoint(note, muObj)
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
        points.forEach(point => pointsArr.push(<li key={point.id}>{point.description}</li>))
        return (
            <>
                {title}<br />
                {pointsArr}
                <button onClick={this.onClick}>New Bullet Point</button><br/>
                {this.state.form ===  true ? 
                <NewBulletPointForm id={id} removeForm={this.cancel} submit={this.submit} type="mu"/> : null}
            </>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        submitBulletPoint: (pointObj, charObj) => dispatch(newBulletPoint(pointObj, charObj)) 
    }
}

export default connect(null, mapDispatchToProps)(MatchupNoteList)
