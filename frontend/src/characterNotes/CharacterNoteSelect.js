import React, {Component} from 'react'
import { connect } from 'react-redux';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchNotes, refreshCurrentNote } from '../actions';

class CharacterNoteSelect extends Component{

    state={
        game:this.props.match.url.split("/")[3]
    }

    componentDidMount(){
        this.props.refresh();
        this.formSetup();
    }

    onChange = e => {
        this.props.fetchNotes({
            character: e.target.value,
            game: this.props.match.url.split("/")[3]
            })
    }

    formSetup = () => {
        let select = document.getElementById("fighter")
        let game = this.state.game
        this.removeChildNodes(select)
        for(const [key] of Object.entries(this.props.characters[game]).sort()){
            const char = document.createElement("option")
            char.value = key
            char.innerHTML = key
            select.append(char)
        }
     
    }

    removeChildNodes = (arg) => { 
        if (arg.firstChild){
            while (arg.firstChild){ arg.removeChild(arg.firstChild) }
       }
    }

    render(){
        return (
            <>
           <form onSubmit={this.onSubmit}>
                <label>Character</label>
                <select name="character" id="fighter" value={this.state.character} onChange={this.onChange}/>
            </form>
            {this.props.current_note === undefined ?  console.log("empty") : <NoteCard/>}
            <Link to="/view/character_notes" id="back">Go Back</Link>
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
        fetchNotes: (obj) => dispatch(fetchNotes(obj)),
        refresh: () => dispatch(refreshCurrentNote())
    }
}

export default connect(MSTP,MDTP)(CharacterNoteSelect)