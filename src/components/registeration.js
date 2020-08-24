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
            confirmPassword:'',
            registerationMsg: ''
        }
    }

    handleSubmit(event){
        // 'https://translate-eng.herokuapp.com/auth/signup'
        const uri = 'http://localhost:5000/auth/signup';
        const { firstName, lastName, email, password, confirmPassword } = this.state;

        axios.post(uri, {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        .then(res => {
            if (res.data.status === 'created'){
                this.setState({
                    registerationMsg: res.data.message
                });

                this.props.handleSuccessfulReg();
            }
            console.log(res);
        })
        .catch(error => {
            this.setState({
                registerationMsg: res.data.message
            });
            console.log(error);
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
                    <Form.Control type="text" name="firstName" onChange={ this.handleChange } value={ firstName } placeholder="Enter First Name" required/>
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" onChange={ this.handleChange } value={ lastName } placeholder="Enter Last Name" required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={ this.handleChange } value={ email } placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={ this.handleChange } value={ password } placeholder="Enter password" required/>
                    <Form.Text id="passwordHelpBlock" muted>Must be atleast 8 characters long</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" onChange={ this.handleChange } value={ confirmPassword } placeholder="Confirm Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
            <p className={'Form-para'}>Already Registered, <Link to='/login'>Login here</Link></p>
        </div>  
        );
    }
}

export default Registration;
