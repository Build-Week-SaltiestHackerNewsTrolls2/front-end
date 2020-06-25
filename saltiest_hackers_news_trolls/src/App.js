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
import {UserContext} from "./contexts/UserContext"
import SavedComments from './components/SavedComments';
import {UsersContext} from './contexts/UsersContext';

function App() {
  const [comments, setComments] = useState([])
  const [isLog, setIsLog] = useState(false)
  const [user, setUser] = useState('zokier')
  const [users, setUsers] = useState([{username: 'zokier'}])
  const select = {user, setUser}
  const fetchComments = (u) => {
    axiosWithAuth()
      .get(`comments/user_comments/${u}`)
      .then(res => {
        setComments(res.data)
        console.log(res.data)
      })
  }
  const getUsers = () => {
    axiosWithAuth().get('/comments')
      .then(res => {setUsers(res.data); console.log(res.data); console.log(users)})
      .catch(err => console.log(err.message))
  }

  const isLogin = () => {
    if(localStorage.getItem('token'))
      return(setIsLog(true))
    else
      return(setIsLog(false))
    
  
}
console.log("user state", user)

  useEffect(() => {
    fetchComments(user);
    getUsers();
  }, [user])

  return (
    <CommentContext.Provider value={comments}>
      <UserContext.Provider value={select}>
        <UsersContext.Provider value={users}>
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
      </UsersContext.Provider>
      </UserContext.Provider>
    </CommentContext.Provider>
  );
}

export default App;
