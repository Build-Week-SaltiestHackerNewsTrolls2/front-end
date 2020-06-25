import React from "react";
import { Card, Button } from "@material-ui/core";



const CommentCard = ({comment, addComment}) => {
  const id = localStorage.getItem('user_id')
  
  console.log()
  return(
    <Card min-width="sm">
      <h3>Comment</h3>
      <span>{comment.comment}</span>
      <h4>Score</h4>
      <p>{comment.score}</p>
      <Button variant="contained" onClick={() => {
        addComment(id, {newUser_id: id, comment: comment.comment, username: comment.name})
        }}>Save</Button>
    </Card>
  )
}



export default CommentCard;