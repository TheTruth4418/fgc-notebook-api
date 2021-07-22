import { Component } from "react";
import { connect } from "react-redux";
import NewBulletPointForm from "../component/NewBulletPointForm";
import { newBulletPoint } from "../actions";

class NoteList extends Component {

    state = {form: false}

    onClick = (e) => {
        this.setState({form:true})
    }

    submit = (note) => {
        let charObj = {
            character: this.props.char,
            game: window.location.pathname.split("/")[2].split("%20").join(" ")
        }
        this.props.submitBulletPoint(note, charObj)
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
        points.forEach(point => pointsArr.push(<li key={point.id}>{point.description}</li>))
        return (
            <>
                {title}<br />
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
