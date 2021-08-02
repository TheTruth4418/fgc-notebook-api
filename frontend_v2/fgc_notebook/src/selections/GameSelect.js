import React, { Component } from 'react'
import { getChars } from '../actions/index'
import { connect } from 'react-redux'
import {Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import MK11 from "../images/logos/Mortal Kombat 11.png"
import GGS from "../images/logos/Guilty Gear Strive.png"
import T7 from "../images/logos/Tekken 7.png"



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
            <div className="games">
                <h2>Choose your Destiny</h2>
                <Link to={`${match.url}/Mortal Kombat 11`}><img src={MK11} alt=""/> </Link>
                <Link to={`${match.url}/Tekken 7`}> <img src={T7} alt="" id="t7"/> </Link>
                <Link to={`${match.url}/Guilty Gear Strive`}> <img src={GGS} alt=""/> </Link><br/>
                <Link to="/view" id="back">Go Back</Link>
            </div>
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