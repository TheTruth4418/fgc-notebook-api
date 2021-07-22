import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newNote} from '../actions/index'


class NewCharacterNote extends Component{

    state={ 
        game: '',
        character: '', 
        title:''
    }

    componentDidMount(){
        this.formSetup()
        this.setState({
            ...this.state,
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value
        })
    }

    onChange = event => {
        this.setState({
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value,
            title: document.getElementById("title").value
        })
        this.charSetup(document.getElementById("game").value)
    }

    onSubmit = event => {
        event.preventDefault()
        this.setState({
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value
        })
        this.props.sendNote(this.state)
    }

    charSetup = (arg) => {
        const select = document.getElementById("fighter")
       if (select.firstChild){
            while (select.firstChild){ 
                select.removeChild(select.firstChild)
            }
       }
       for(const [key] of Object.entries(this.props.characters[arg])){
        const char = document.createElement("option")
        char.value = key
        char.innerHTML = key
        select.append(char)
    }
    }

    formSetup = () => {
        const game = document.getElementById("game")

        let blank = document.createElement('option')
        blank.value = "Select Game"
            
        for (const [key] of Object.entries(this.props.characters)){
            let games = document.createElement("option")
            games.value = key
            games.innerHTML = key
            game.appendChild(games)
        }
        this.charSetup(game.value)
    }

    render(){
            
        return( 
            <>
                <form onSubmit={this.onSubmit}>
                    <label>Game</label>
                    <select onChange={this.onChange} name="game" id="game" />
                    <label>Character:</label>
                    <select onChange={this.onChange} name="character" id="fighter" value={this.state.character}/>
                    <label>Title</label>
                    <input onChange={this.onChange} name="title" id="title" value={this.state.title}/>
                    <input type="submit" />
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNote: (noteObj) => dispatch(newNote(noteObj))
    }
}

export default connect(null, mapDispatchToProps)(NewCharacterNote)


