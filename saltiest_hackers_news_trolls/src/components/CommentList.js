import React, { useContext, useState } from "react"
import { CommentContext } from "../contexts/CommentContext";
import CommentCard from "./CommentCard"
import axiosWithAuth from "../utils/axiosWithAuth";
import { UserContext } from "../contexts/UserContext";
import { UsersContext } from "../contexts/UsersContext";
// import SearchBar from "./SearchBar.js";



const CommentList = () => {
  const comments = useContext(CommentContext)
  const {user, setUser} = useContext(UserContext)
  const users = useContext(UsersContext)
  const [filtered, setFiltered] = useState('')
  const addComment = (id, comment) => {
    axiosWithAuth().post(`/favorites`, comment)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  
}
console.log(users);


  return(
    <div>
      <select value={user} name="user" onChange={e => setUser( e.target.value )}>
        {users.map(u => {
          return <option value={u.Username}>{u.Username}</option>
          
        })}
      </select>
      {/* <SearchBar setFiltered={setFiltered} /> */}
      {filtered.length !== 0 && filtered.map((comment, i) => {
        return(
          <CommentCard key={i} id={comment.id} comment={comment} addComment={addComment} />
      )})}
      {filtered.length === 0 && comments.map((comment, i) => {
        return(
          <CommentCard key={i} id={comment.id} comment={comment} addComment={addComment} />
      )})}
    </div>
    
  )
}

export default CommentList;
