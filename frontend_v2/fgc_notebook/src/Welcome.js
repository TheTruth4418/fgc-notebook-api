import React from 'react';
import LoginForm from './sessions/LoginForm.js';
import Signup from './sessions/Signup.js'

class Welcome extends React.Component {
    constructor(){
        super();
        this.state = {
            login: false,
            signup: false
        }
    }
    renderSignup = event => {
        this.setState({
            login: false,
            signup: true
        })
    }

    renderLogin = event => {
        this.setState({
            login: true,
            signup: false
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to FGC Notebook! Login or Signup below!</h1>
                <button onClick={this.renderSignup}>Signup</button>
                <br/>
                <button onClick={this.renderLogin}>Login</button>
                {this.state.signup ? <Signup /> : null}
                {this.state.login ? <LoginForm /> : null}
            </div>
        )
    }
}

export default Welcome;