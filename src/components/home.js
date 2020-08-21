import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Registration extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit(event){
        const uri = 'https://translate-eng.herokuapp.com/auth/signup'
        const { firstName, lastName, email, password, confirmPassword } = this.state;

        axios.post(uri, {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        .then(res => {
            console.log(res);
        })
        event.preventDefault()
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const { firstName, lastName, email, password, confirmPassword } = this.state;
        return(
          <div>
            <h2>Register</h2>
            <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" onchange={ this.handleChange } value={ firstName } placeholder="Enter First Name"/>
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" onchange={ this.handleChange } value={ lastName } placeholder="Enter Last Name"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onchange={ this.handleChange } value={ email } placeholder="Enter email"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onchange={ this.handleChange } value={ password } placeholder="Enter password"/>
                    <Form.Text id="passwordHelpBlock" muted>Must be atleast 8 characters long</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" onchange={ this.handleChange } value={ confirmPassword } placeholder="Confirm Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
            <p className={'Form-para'}>Already Registered, <Link to='/phrase/search'>Sign in here</Link></p>
        </div>  
        );
    }
}

export default Registration;
