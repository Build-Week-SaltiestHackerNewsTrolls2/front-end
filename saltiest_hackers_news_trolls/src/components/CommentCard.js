import React from "react";
import { Card, Button, Container } from "@material-ui/core";



const CommentCard = ({comment, addComment}) => {
  const id = localStorage.getItem('user_id')
  
  console.log()
  return(
    <Container>
    <Card min-width="sm">
      <h3>Comment</h3>
      <span>{comment.Comment}</span>
      <h4>Score</h4>
      <p>{comment.Saltiness}</p>
      <Button variant="contained" onClick={() => {
        addComment(id, {newUser_id: id, comment: comment.Comment, username: comment.Username, score: comment.Saltiness})
        }}>Save</Button>
    </Card>
    </Container>
  )
}



export default CommentCard;