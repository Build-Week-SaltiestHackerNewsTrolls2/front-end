import React, {useEffect, useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams } from "react-router";
import { Link } from "react-router-dom";



const SavedComments =  () => {
  const {id} = useParams()
  const [saved, setSaved] = useState([])

  // const fetchSaved = () => {
  //   axiosWithAuth().get(`/${id}/favorites`)
  //     .then(res => console.log(res.data))
  // }

  useEffect(() => {
  
    axiosWithAuth().get(`newUser/${id}/favorites`)
      .then(res => {
        console.log(res.data)
        setSaved(res.data)
      })
    // fetchSaved()
  }, [id])

  const handleDelete = e => {
    e.preventDefault()
    axiosWithAuth().delete(`/favorites/${e.target.value}`)
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }

  return(
    <div>
      <Link to={`/CommentList/${id}`}><button>CommentList</button></Link>
      {saved.map((comment, i) => {
        return(<div key={i}>
          <p>{comment.comment}{comment.id}</p>
          <button value={comment.id} onClick={handleDelete}>remove</button>
          </div>)
        
      })}
    </div>
  )
}

export default SavedComments