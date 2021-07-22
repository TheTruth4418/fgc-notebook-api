import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Welcome from './component/Welcome'
import Create from './component/Create'
import GameSelect from './component/GameSelect'
import CharacterNoteSelect from './component/CharacterNoteSelect';
import MatchupNoteSelect from './component/MatchupNoteSelect';
import ViewSelect from './component/ViewSelect';


function App() {
  const history = useHistory();
  return (
    <div>
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
