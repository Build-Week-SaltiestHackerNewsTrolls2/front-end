import React, {useState} from "react";
import {Input, Paper, Container, Button} from "@material-ui/core"
import '../App.css'
import axiosWithAuth from "../utils/axiosWithAuth"

const initinalUser={
  email: "",
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
    .post("/auth/login", user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      console.log(res);
    })
    .catch(err => console.log(err.message))
  
}

  return(
    <Container maxWidth="sm">
    <div className="loginContainer">
      
      <Paper>
        <label>Login</label>
      <form onSubmit={handleSubmit}>
        <Input name="email" value={user.email} onChange={handleChange} placeholder="Username" />
        <br></br>
        <Input name="password" value={user.password} onChange={handleChange} placeholder="Password" />
        <br></br>
        <Button type="submit">Sign In</Button>
      </form>
      </Paper>
      
    </div>
    </Container>
  )
}

export default Login;