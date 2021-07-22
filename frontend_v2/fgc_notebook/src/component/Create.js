import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import NewCharacterNote from './NewCharacterNote';
import NewMatchupNote from './NewMatchupNote';
import {connect} from 'react-redux'
import {getChars} from '../actions/index.js'

class Create extends Component{
    state={ char: false, mu: false }
    
    componentDidMount(){
        this.props.grabCharacters()
    }

    char = e => {
        this.setState({
            char: true,
            mu:false
        })
    }

    mu = e => {
        this.setState({
            char: false,
            mu:true
        })
    }

  

    render(){
        return(
            <>
            <h2>Take some Notes! Select which type of note you would like to take!</h2>
            <button id="char" onClick={this.char}>Character Note</button>
            <button id="mu" onClick={this.mu}>Matchup Note</button>
            <NavLink to="/">Go Back</NavLink>
            <div id="form">
                {this.state.char === true ? <NewCharacterNote characters={this.props.characters}/> : null}
                {this.state.mu === true ? <NewMatchupNote characters={this.props.characters}/> : null}
             </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        grabCharacters: () => dispatch(getChars())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)