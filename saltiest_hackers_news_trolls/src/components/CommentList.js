import React, { useContext } from "react"
import { CommentContext } from "../contexts/CommentContext";
import CommentCard from "./CommentCard"


const CommentList = () => {
  const comments = useContext(CommentContext)
  return(
    <div>
      List of Comments
      {comments.map(comment => {
        return(
          <CommentCard key={comment.id} comment={comment} />
      )})}
    </div>
    
  )
}

export default CommentList;
