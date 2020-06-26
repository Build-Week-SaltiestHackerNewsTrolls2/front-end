import React, {useEffect, useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";




const SavedComments =  () => {
  const {id} = useParams()
  const [saved, setSaved] = useState([])

  const fetchSaved = () => {
    axiosWithAuth().get(`newUser/${id}/favorites`)
      .then(res => {
        console.log(res.data)
        setSaved(res.data)
      })
  }

  useEffect(() => {
  
    // axiosWithAuth().get(`newUser/${id}/favorites`)
    //   .then(res => {
    //     console.log(res.data)
    //     setSaved(res.data)
    //   })
    fetchSaved()
  }, [id])

  const handleDelete = e => {
    e.preventDefault()
    axiosWithAuth().delete(`/favorites/${e.target.value}`)
      .then(res => {
        console.log(res);
        fetchSaved();
      })
      .catch(err => console.log(err.message))
  }

  return(
    <div>
      <Link to={`/CommentList/${id}`}><button>CommentList</button></Link>
      {saved.map((comment, i) => {
        return(<div key={i}>
          <h3>Comment:</h3>
          <p>{comment.comment}</p>
          <h3>Score:</h3>
          <p>{comment.score}</p>
          <button value={comment.id} onClick={handleDelete}>remove</button>
          </div>)
        
      })}
    </div>
  )
}

export default SavedComments