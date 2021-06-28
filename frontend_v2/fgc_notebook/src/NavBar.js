import React from 'react';
import {Component} from 'react'
import { connect } from 'react-redux'
import {logOut} from './actions/users'

class NavBar extends Component {
    constructor() {
        super();
        this.handleLogout = this.handleLogOut.bind(this);
      }
    handleLogOut = event => {
        console.log(event)
        this.props.logOutUser()
    }
    render(){
        return(
            <ul>
                <li>Home</li>
                <li>View notes</li>
                <li>Account</li>
                <li><button onClick={this.handleLogout}>Log out</button></li>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logOutUser: () => dispatch(logOut())
    }
  }

export default connect(null,mapDispatchToProps)(NavBar);