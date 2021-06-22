import React from 'react';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = { username: '',
                        password: ''}
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

  hadnleSignup = event => {
    event.preventDefault();
    this.setState({
      username: event.target[0].value,
      password: event.target[1].value
    })
    return fetch( 'http://127.0.0.1:3000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.state)
      } )
      .then(response => response.json())
      .then(data => console.log(data));
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
        <form onSubmit={this.hadnleSignup}>
        <h1>Signup Form</h1>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleUsernameInput}/><br/>
        <label>Password:</label>
        <input type="text" name="password" onChange={this.handlePasswordInput}/><br/>
        <input type="submit"/>
      </form>
    )
  }
}
  
  export default Signup;