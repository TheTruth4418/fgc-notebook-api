import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users.js'

class Login extends Component{

    state={ username: '', password: ''}

    onChange = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return( 
            <>
                <form onSubmit = {this.onSubmit}>
                    <label>Username</label>
                    <input value={this.state.username} name="username" type="text" onChange={this.onChange} />
                    <label>Password</label>
                    <input value={this.state.password} name="password" type="text" onChange={this.onChange} />
                    <input type = "submit" />
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: () => dispatch({ type: 'SIGNUP_USER' }),
        loginUser: (userObj) => dispatch(login(userObj))
    }
}

const mapStateToProps = state => {
    return {
        loggedIn:state.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)