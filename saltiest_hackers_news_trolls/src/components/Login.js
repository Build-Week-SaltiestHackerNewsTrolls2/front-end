import React, {useState} from "react";
import {Input, Paper, Container} from "@material-ui/core"
import '../App.css'
import axiosWithAuth from "../utils/axiosWithAuth"

const initinalUser={
  username: "",
  password: "",
}



const Login = () => {
const [user, setUser] = useState(initinalUser)

const handleChange = e => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
    .post("", user)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  
}

  return(
    <Container maxWidth="sm">
    <div className="loginContainer">
      
      <Paper>
        <label>Login</label>
      <form onSubmit={handleSubmit}>
        <Input name="username" value={user.username} onChange={handleChange} placeholder="Username" />
        <br></br>
        <Input name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      </form>
      </Paper>
      
    </div>
    </Container>
  )
}

export default Login;