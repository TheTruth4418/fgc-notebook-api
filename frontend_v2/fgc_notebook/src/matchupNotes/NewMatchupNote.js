import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newMuNote} from '../actions/index'


class NewMatchupNote extends Component{

    state={ 
        game: '',
        character: '', 
        opponent:'',
        title:''
    }

    componentDidMount(){
        this.formSetup()
        this.setState({
            ...this.state,
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value,
            opponent: document.getElementById("opp").value
        })
    }

    onChange = event => {
        this.setState({
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value,
            opponent: document.getElementById("opp").value,
            title: document.getElementById("title").value
        })
        this.charSetup(document.getElementById("game").value)
    }

    onSubmit = event => {
        event.preventDefault()
        this.setState({
            game: document.getElementById("game").value,
            character: document.getElementById("fighter").value,
            opponent: document.getElementById("opp").value,
        })
        this.props.sendNote(this.state)
    }

    charSetup = (arg) => {
        const select = document.getElementById("fighter")
        const opp = document.getElementById("opp")
        this.removeChildNodes(select)
        this.removeChildNodes(opp)
        for(const [key] of Object.entries(this.props.characters[arg])){
            const char = document.createElement("option")
            const opponent = document.createElement("option")
            char.value = key
            char.innerHTML = key
            opponent.value = key
            opponent.innerHTML = key
            select.append(char)
            opp.append(opponent)
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

    removeChildNodes = (arg) => {
        if (arg.firstChild){
            while (arg.firstChild){ 
                arg.removeChild(arg.firstChild)
            }
       }
    }

    render(){
            
        return( 
            <>
                <form onSubmit={this.onSubmit}>
                    <label>Game</label>
                    <select onChange={this.onChange} name="game" id="game" />
                    <label>Character:</label>
                    <select onChange={this.onChange} name="character" id="fighter" value={this.state.character}/>
                    <label>Opponent:</label>
                    <select onChange={this.onChange} name="opponent" id="opp" value={this.state.opponent}/>
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
        sendNote: (noteObj) => dispatch(newMuNote(noteObj))
    }
}

export default connect(null, mapDispatchToProps)(NewMatchupNote)