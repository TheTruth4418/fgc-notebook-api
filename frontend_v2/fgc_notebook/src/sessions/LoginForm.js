import React from 'react';
import { connect } from 'react-redux'
import {logIn} from '../actions/users'


class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { username: '',
                  password: ''}
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  hadnleSubmit = event => {
    event.preventDefault();
    this.props.logInUser(this.state)
    }


  handleUsernameInput = event => {
     this.setState({
      username: event.target.value
    }); 
  }

  handlePasswordInput= event => {
    this.setState({
      password: event.target.value
    }); 
  }

  render() {
    return (
      <div>
      <form onSubmit={this.hadnleSubmit}>
        <h1>Login Form</h1>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleUsernameInput} value={this.state.username}/><br/>
        <label>Password:</label>
        <input type="text" name="password" onChange={this.handlePasswordInput} value={this.state.password}/><br/>
        <input type="submit" value="Log in!"/>
      </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logIn(user))
  }
}

  // connect returns function we can invoke again and pass our component
  export default connect(null,mapDispatchToProps)(LoginForm);
