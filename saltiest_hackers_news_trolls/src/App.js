import React from 'react';
import './App.css';
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import REGForm from "./components/REGform"
import PrivateRoute from "./components/PrivateRoute"
import CommentList from "./components/CommentList"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/CommentList" component={CommentList} />
          <Route exact path="/reg" component={REGForm} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
