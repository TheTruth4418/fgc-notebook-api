import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLogin} from '../actions';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount(){
    if(localStorage.token){
      this.props.history.push('/')
      alert("You are already logged in")
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    let obj = {
      state: this.state,
      history: this.props.history
    }
    event.preventDefault()
    this.props.fetchLogin(obj)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>

        <label>Username</label>
        <input name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/><br/>

        <label>Password</label>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const MSTP = state => {
  return {
      loggedIn: state.currentUser !== undefined
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLogin: userObj => dispatch(fetchLogin(userObj))
})

export default connect(MSTP, mapDispatchToProps)(Login);