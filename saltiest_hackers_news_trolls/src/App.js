import React, {useState, useEffect} from 'react';
import './App.css';
import Login from "./components/Login"
import {Route, Switch} from 'react-router-dom';
import REGForm from "./components/REGform";
import PrivateRoute from "./components/PrivateRoute";
import CommentList from "./components/CommentList";
import {CommentContext} from "./contexts/CommentContext.js";
import axiosWithAuth from './utils/axiosWithAuth';
import ButtonAppBar from './components/ButtonAppBar';
// import SearchBar from './components/SearchBar';
import SavedComments from './components/SavedComments';

function App() {
  const [comments, setComments] = useState([])
  const [isLog, setIsLog] = useState(false)
  const fetchComments = () => {
    axiosWithAuth()
      .get('https://my.api.mockaroo.com/comments?key=20889c20')
      .then(res => {
        setComments(res.data)
        console.log(res.data)
      })

  }

  const isLogin = () => {
    if(localStorage.getItem('token'))
      return(setIsLog(true))
    else
      return(setIsLog(false))
    
  
}

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <CommentContext.Provider value={comments}>
      <div className="App">
        <ButtonAppBar isLogin={isLogin} isLog={isLog} />
          <Switch>
            <PrivateRoute exact path="/CommentList/:id" component={CommentList}/>
            <PrivateRoute exact path="/SavedComments/:id" component={SavedComments}/>
            <Route exact path="/reg"  >
              <REGForm isLogin={isLogin}/>
            </Route>
            <Route exact path="/" >
              <Login isLogin={isLogin} />
            </Route>
          </Switch>
      </div>
    </CommentContext.Provider>
  );
}

export default App;
