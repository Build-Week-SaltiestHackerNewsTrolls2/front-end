import React, {useState, useEffect} from 'react'
import { Card, Form, FormGroup, Input, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const REGForm = props => {
    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: ''
    });
    const id = localStorage.getItem('user_id')
    const [country, setCountry] = useState([]);
    const history = useHistory()
    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                setCountry(response.data);
            })
            .catch(error => {
                console.log('No go', error);
            });
    }, []);
    const validatation = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required()
    })

    const submit = () => {
        validatation.validate(formData).then(() => {
            axiosWithAuth()
              .post('/auth/register', formData)
              .then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user_id', res.data.newUser_id);
                console.log("This is your post data", res.data)
                history.push(`/CommentList/${res.data.newUser_id}`)
                props.isLogin()
              })
              .catch(err => console.log('This is your post error', err.message))
        })
    }

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }
    return(
        <>
        <Card style={{ color: "red" }}>
            <h2 style={{color: 'white', margin: '0 auto'}}>
                Enter Your Information
            </h2>
        </Card>

        <Form style={{margin: '5%'}} onSubmit={(e) => {
            e.preventDefault()
            submit()
        }}>

            <FormGroup>
                <legend>First Name</legend>
                <Input type='text' name='firstName' placeholder='Please enter your first name here' value={formData.firstName} onChange={handleChange}/>
            </FormGroup>

            <FormGroup>
                <legend>Last Name</legend>
                <Input type='text' name='lastName' placeholder='Please enter your last name here' value={formData.lastName} onChange={handleChange}/>
            </FormGroup>

                    <FormGroup>
                        <legend>Email</legend>
                        <Input type='email' name='email' placeholder='Please enter a vaild email' value={formData.email} onChange={handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <legend>Password</legend>
                        <Input type='password' name='password' value={formData.password} onChange={handleChange}/>
                    </FormGroup>

                
                
                <select name="country" value={formData.country} onChange={handleChange} >
                    {country.map((country, i) => {
                        return <option key={i} value={country.name}>{country.name}</option>
                        })}
                </select>
                
            

            <Button>
                Submit
            </Button>
        </Form>
        </>
    )
}

export default REGForm;