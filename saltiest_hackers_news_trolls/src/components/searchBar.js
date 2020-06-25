import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import { CommentContext } from '../contexts/CommentContext';

const SearchBar = () => {
    
    const [search, setSearch] = useState({
        search:''
    })
    const comment = useContext(CommentContext)

    useEffect(() => {

            const initial = comment
            const filtered = initial.filter( () => {
            return comment.name.toLowerCase().includes(search.name.toLowerCase()) || comment.comment.toLowerCase().includes(search.name.toLowerCase())})
            setSearch(filtered)
        
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