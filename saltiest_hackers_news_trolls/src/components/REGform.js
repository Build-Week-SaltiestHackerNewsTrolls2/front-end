import React, {useState, useEffect} from 'react'
import { Card, Form, FormGroup, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
import axiosWithAuth from '../utils/axiosWithAuth'

const REGForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: ''
    });
    const [country, setCountry] = useState([]);
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
    const toggle = () => setDropdownOpen((prevState) => !prevState)
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
              .then(res => console.log("This is your post data", res.data))
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

                    <FormGroup>
                <input type='select' isOpen={false} name="country" toggle={toggle} value={formData.country} onChange={handleChange} >
                    <DropdownToggle caret>
                      Select
                    </DropdownToggle>
                    <DropdownMenu>
                    {country.map((country, i) => {
                        return <option key={i}>{country.name}</option>;
                        })}
                    </DropdownMenu>
                </input>
            </FormGroup>

            <Button>
                Submit
            </Button>
        </Form>
        </>
    )
}

export default REGForm;