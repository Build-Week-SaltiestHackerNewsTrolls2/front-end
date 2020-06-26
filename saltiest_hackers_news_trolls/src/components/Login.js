import React, {useState} from "react";
import {Input, Paper, Container, Button} from "@material-ui/core"
import '../App.css'
import axiosWithAuth from "../utils/axiosWithAuth"
import {useHistory} from "react-router-dom"

const initinalUser={
  email: "",
  password: "",
}



const Login = (props) => {
const [user, setUser] = useState(initinalUser)
const history = useHistory()
const id = localStorage.getItem('user_id')

const handleChange = e => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post("/auth/login", user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.newUser_id);
      history.push(`/commentList/${res.data.newUser_id}`)
      console.log(res);
      props.isLogin()
    })
    .catch(err => console.log(err.message))
  
}

  return(
    <Container maxWidth="sm">
    <div className="loginContainer">
      {localStorage.getItem("token") && history.push(`/commentList/${id}`)}
      <Paper>
        <label>Login</label>
      <form onSubmit={handleSubmit}>
        <Input name="email" value={user.email} onChange={handleChange} placeholder="Username" />
        <br></br>
        <Input name="password" type="password" value={user.password} onChange={handleChange} placeholder="Password" />
        <br></br>
        <Button type="submit">Sign In</Button>
        <Button onClick={() =>{history.push("/reg")}}>Sign Up</Button>
      </form>
      </Paper>
      
    </div>
    </Container>
  )
}

export default Login;