import {Component} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './Welcome.js'
import Home from './Home.js'
import { connect } from 'react-redux';
import GuardedRoute from './GuardedRoute';
//import store from '.';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.logged_in
  }

  hadnleLogin = event => {
    event.preventDefault();
    this.props.logInUser(this.state)
    }

  loginCheck = this.props.logged_in ? <Redirect to="/home" /> : <Welcome /> 

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome}>
          {this.props.logged_in ? <Redirect to="/home" /> : null}
        </Route>
        <GuardedRoute exact path="/home" component={Home} currentUser={this.state.current_user} />
      </Switch>
    </Router>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.logged_in,
    currentUser : state.current_user
  }
}

export default connect(mapStateToProps)(App)
