import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import { CommentContext } from '../contexts/CommentContext';

const SearchBar = ({setFiltered}) => {
    
    const [search, setSearch] = useState({
        search:''
    })
    const {comment} = useContext(CommentContext)

    useEffect(() => {

            // const initial = comment
            const filtered = comment.filter( () => {
            return comment.Username.toLowerCase().includes(search.name.toLowerCase()) || comment.Comment.toLowerCase().includes(search.name.toLowerCase())})
            setFiltered(filtered)
        
    }, [search, comment])

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }
    return(
      <div>
    <Input type='text' placeholder='Search for comments here' name="name"  onChange={handleChange} value={search}/>
    </div>
    )
    
}

export default SearchBar;