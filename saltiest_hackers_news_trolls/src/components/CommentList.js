import React, { useContext } from "react"
import { CommentContext } from "../contexts/CommentContext";
import CommentCard from "./CommentCard"
import axiosWithAuth from "../utils/axiosWithAuth";
// import SearchBar from "./SearchBar.js";



const CommentList = () => {
  const comments = useContext(CommentContext)
  const addComment = (id, comment) => {
    axiosWithAuth().post(`/favorites`, comment)
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  
}
  return(
    <div>
      {/* <SearchBar /> */}
      {comments.map(comment => {
        return(
          <CommentCard key={comment.id} id={comment.id} comment={comment} addComment={addComment} />
      )})}
    </div>
    
  )
}

export default CommentList;
