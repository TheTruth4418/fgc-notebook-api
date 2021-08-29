import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './selections/NavBar'
import Home from './selections/Home'
import Create from './selections/Create'
import GameSelect from './selections/GameSelect'
import CharacterNoteSelect from './characterNotes/CharacterNoteSelect';
import MatchupNoteSelect from './matchupNotes/MatchupNoteSelect';
import ViewSelect from './selections/ViewSelect';
import Login from './selections/Login'
import Signup from './selections/Signup'
import { fetchUser } from './actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css'


function App(props) {
  useEffect(() => {
    props.fetchUser()
  })
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/view" component={ViewSelect} />
          <Route exact path="/view/character_notes" component={GameSelect} />
          <Route exact path="/view/character_notes/Mortal Kombat 11" component={CharacterNoteSelect}/>
          <Route exact path="/view/character_notes/Guilty Gear Strive" component={CharacterNoteSelect}/>
          <Route exact path="/view/character_notes/Tekken 7" component={CharacterNoteSelect}/>
          <Route exact path="/view/matchup_notes" component={GameSelect}/>
          <Route exact path="/view/matchup_notes/Mortal Kombat 11" component={MatchupNoteSelect}/>
          <Route exact path="/view/matchup_notes/Guilty Gear Strive" component={MatchupNoteSelect}/>
          <Route exact path="/view/matchup_notes/Tekken 7" component={MatchupNoteSelect}/>
          <Route exact path="/create" component={Create} />
        </Switch>
      </Router>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(null, mapDispatchToProps)(App);
