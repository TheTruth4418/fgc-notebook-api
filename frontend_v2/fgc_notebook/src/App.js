import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Welcome from './component/Welcome'
function App() {
  const history = useHistory();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} history={history} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
