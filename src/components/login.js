import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Login extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit(event){
        const uri = 'http://localhost:5000/auth/login';
        const { email, password } = this.state;

        axios.post(uri, {
            email,
            password
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
        const { email, password } = this.state;
        return(
          <div>
            <h2>Login</h2>
            <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={ this.handleChange } value={ email } placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={ this.handleChange } value={ password } placeholder="Enter password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
            <p className={'Form-para'}>Not Registered, <Link to='/'>Register here</Link></p>
        </div>  
        );
    }
}

export default Login;
