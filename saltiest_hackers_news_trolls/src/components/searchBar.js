import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';

const SearchBar = () => {
    
    const [search, setSearch] = useState({
        search:''
    })

    useEffect(() => {
        axios
        .get()
        .then(res => {
            const initial = res.data.results
            const filtered = initial.filter( () => {
                return comment.name.toLowerCase().includes(search.toLowerCase()) || comment.comment.toLowerCase().includes(search.toLowerCase())
            })
            setSearch(filtered)
        })
    }, [search])

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }
    return(
      <div>
    <Input type='text' placeholder='Search for comments here' onChange={handleChange} value={search}/>
    </div>
    )
    
}

export default SearchBar;