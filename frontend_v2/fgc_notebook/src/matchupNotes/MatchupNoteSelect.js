import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { fetchMatchupNotes, refreshCurrentNote} from "../actions";
import MatchupNoteCard from "./MatchupNoteCard";
class MatchupNoteSelect extends Component {
    state = {
        character: undefined,
        opponent: undefined,
        game: this.props.match.url.split("/")[3]
    }

    componentDidMount(){
        this.props.refresh();
        this.formSetup();
    }

    formSetup = () => {
        let select = document.getElementById("fighter")
        let select2 = document.getElementById("fighter2")
        this.removeChildNodes(select)
        for(const [key] of Object.entries(this.props.characters[this.state.game])){
            const char = document.createElement("option")
            const opp = document.createElement("option")
            char.value = key
            opp.value = key
            char.innerHTML = key
            opp.innerHTML = key
            select.append(char)
            select2.append(opp)
        }
     
    }

    removeChildNodes = (arg) => { 
        if (arg.firstChild){
            while (arg.firstChild){ arg.removeChild(arg.firstChild) }
       }
    }

    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchNotes(this.state)
    }

    render(){
        return(
            <>
            <form onSubmit={this.onSubmit}>
                <label>Character</label>
                <select name="character" id="fighter" value={this.state.character} onChange={this.onChange}/>
                <label>Opponent</label>
                <select name="opponent" id="fighter2" value={this.state.opponent} onChange={this.onChange}/>
                <input type="submit" /> 
            </form>
            {this.props.current_note === undefined ?  console.log("empty") : <MatchupNoteCard current_note={this.props.current_note}/>}
            <Link to="/view/matchup_notes" id="back">Go Back</Link>
            </>
        )
    }
}
const MSTP = state => {
    return {
        characters: state.characters,
        current_note: state.current_note
    }
}

const MDTP = (dispatch) => {
    return{
        fetchNotes: (obj) => dispatch(fetchMatchupNotes(obj)),
        refresh: () => dispatch(refreshCurrentNote())
    }
}

export default connect(MSTP,MDTP)(MatchupNoteSelect)