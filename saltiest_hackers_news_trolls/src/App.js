import React, {useState} from 'react';
import './App.css';
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import REGForm from "./components/REGform"
import PrivateRoute from "./components/PrivateRoute"
import CommentList from "./components/CommentList"
import {CommentContext} from "./contexts/CommentContext"

function App() {
  const [comments, setcomments] = useState()
  return (
    <CommentContext.Provider value={comments}>
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/CommentList" component={CommentList} />
            <Route exact path="/reg" component={REGForm} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    </CommentContext.Provider>
  );
}

export default App;
