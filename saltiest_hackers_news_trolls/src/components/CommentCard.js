import React from "react";
import { Card, Button } from "@material-ui/core";
import axiosWithAuth from "../utils/axiosWithAuth";


const CommentCard = ({comment}) => {
  const addComment = () => {
    return(
      axiosWithAuth.post('', comment)
    )
  }
  return(
    <Card>
      <h3>Comment</h3>
      <span>{comment.comment}</span>
      <h4>Score</h4>
      <p>{comment.score}</p>
      <Button variant="contained" onClick={() => addComment()}>Save</Button>
    </Card>
  )
}



export default CommentCard;