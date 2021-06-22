import React from 'react';
import './App.css';
import LoginForm from './sessions/LoginForm.js';
import Signup from './sessions/Signup.js'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      loggedInStatus: "Not Logged in",
      user:{ }
    }
  }
  render(){
  return (
    <div>
      <LoginForm />
      <Signup />
    </div>
  );
  }
}

export default App;
