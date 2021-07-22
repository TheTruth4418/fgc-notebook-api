import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login, signup} from '../actions/users.js'

class Login extends Component{

    state={ username: '', password: ''}

    onChange = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    onSubmit = event => {
        event.preventDefault()
        event.target.id === "signup" ? this.props.signupUser(this.state) : this.props.loginUser(this.state);
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return( 
            <>
                <form>
                    <label>Username</label>
                    <input value={this.state.username} name="username" type="text" onChange={this.onChange} />
                    <label>Password</label>
                    <input value={this.state.password} name="password" type="text" onChange={this.onChange} />
                    <button id = "signup" onClick={this.onSubmit}>SignUp!</button>
                    <button id = "login" onClick={this.onSubmit}>Log In!</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (userObj) => dispatch(signup(userObj)),
        loginUser: (userObj) => dispatch(login(userObj))
    }
}

const mapStateToProps = state => {
    return {
        loggedIn:state.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)