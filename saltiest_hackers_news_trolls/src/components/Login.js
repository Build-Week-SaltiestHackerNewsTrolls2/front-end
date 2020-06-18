import React, {useState} from "react";
import {Input} from "@material-ui/core"
import '../App.css'

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
  
}

  return(
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <Input name="username" value={user.username} onChange={handleChange} placeholder="Username" />
        <br></br>
        <Input name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      </form>
    </div>
  )
}

export default Login;