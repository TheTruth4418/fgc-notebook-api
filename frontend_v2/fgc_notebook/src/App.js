import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Welcome from './selections/Welcome'
import Create from './selections/Create'
import GameSelect from './selections/GameSelect'
import CharacterNoteSelect from './characterNotes/CharacterNoteSelect';
import MatchupNoteSelect from './matchupNotes/MatchupNoteSelect';
import ViewSelect from './selections/ViewSelect';


function App() {
  const history = useHistory();
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} history={history} />
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
    </div>
  )
}

export default App;
