import React, { Component } from 'react';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import Search from './searchPhrase';
import '../App.css';

class AdminDashboard extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            english: '',
            yor_spoken:'',
            yor_intonation:'',
            yor_explanation:'',
            yor_video:'',
            show: false
        }
    }

    handleShow(){
        this.setState({
            show: true
        })
    }

    handleClose(){
        this.setState({
            show: false
        })
    }

    handleSubmit(event){
        const uri = 'https://translate-eng.herokuapp.com/phrase/create'
        const { yor_explanation, yor_intonation, yor_spoken, yor_video, english } = this.state;

        axios.post(uri, {
            english,
            yor_explanation,
            yor_intonation,
            yor_spoken,
            yor_video
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
        const { english, yor_video, yor_intonation, yor_spoken, yor_explanation } = this.state;
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Button variant="outline-light" onClick={this.handleShow}>Submit Translation</Button>
                    </Nav>
                </Navbar>
                <h2>Status:{this.props.loggedInStatus}</h2>
                <Search />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Translation Entries</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={ this.handleSubmit }>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>English</Form.Label>
                                <Form.Control type="text" name="firstName" onChange={ this.handleChange } value={ english } required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Link to Explanation</Form.Label>
                                <Form.Control type="text" name="yor_explanation" onChange={ this.handleChange } value={ yor_explanation } required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Link to Intonation</Form.Label>
                                <Form.Control type="text" name="yor_intonation" onChange={ this.handleChange } value={ yor_intonation } required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Link to Spoken</Form.Label>
                                <Form.Control type="text" name="yor_spoken" onChange={ this.handleChange } value={ yor_spoken } required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Link to Video</Form.Label>
                                <Form.Control type="text" name="yor_video" onChange={ this.handleChange } value={ yor_video } required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit Translation</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>  
        );
    }
}

export default AdminDashboard