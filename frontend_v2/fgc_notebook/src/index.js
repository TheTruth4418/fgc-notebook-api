import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import usersReducer from './reducers/UsersReducer'
import thunk from 'redux-thunk'
/* import { loadState, saveState } from './localStorage' */
/* import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './sessions/LoginForm.js';
import Signup from './sessions/Signup.js'
import Welcome from './Welcome.js' */

//const persistedState = ""
const store = createStore(usersReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store;

/* store.subscribe (() => {
  saveState({
    current_user: store.getState().current_user
  });
}); */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
