import React, { Component } from 'react'
import { getChars } from '../actions/index'
import { connect } from 'react-redux'
import {Link } from "react-router-dom/cjs/react-router-dom.min";

class GameSelect extends Component{

    componentDidMount(){
        this.props.getCharacters();
    }

    onClick = e => {
        this.setState({
            game: e.target.id
        })
    }

 render(){
     let match = this.props.match
    return(
        <>
            <p>Choose your Destiny</p>
            <Link to={`${match.url}/Mortal Kombat 11`}> Mortal Kombat </Link>
            <Link to={`${match.url}/Tekken 7`}> Tekken 7 </Link>
            <Link to={`${match.url}/Guilty Gear Strive`}> Guilty Gear Strive </Link>
            <Link to="/">Go Back</Link>
        </>
    )
 }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: () => dispatch(getChars())
    }
}

export default connect(null, mapDispatchToProps)(GameSelect)