import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';


class Search extends Component {
    constructor(props){
        super(props);

        this.state = { 
          value: '',
          yorExp: '',
          yorInt: '',
          yorSpo: '',
          yorVid: '',
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
      const uri = `https://translate-eng.herokuapp.com/phrase/search/${this.state.value}`
  
      axios.get(uri)
        .then(res => {
          const { data } = res.data;
          this.setState({
            yorExp: data[0].yor_explanation,
            yorInt: data[0].yor_intonation,
            yorSpo: data[0].yor_spoken,
            yorVid: data[0].yor_video,
          });
        })
        .catch(err => {
          console.log(err);
        })
  
      event.preventDefault();
    }

    handleChange(event){
      this.setState({
        value: event.target.value
      });
      event.preventDefault();
    }

    render(){
        const { value, yorVid, yorSpo, yorInt, yorExp } = this.state;
        return(
          <div>
            <Form onSubmit = { this.handleSubmit }>
              <Form.Label>How to say</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="search_phrase"
                  placeholder="English Sentence"
                  aria-label="English Sentence"
                  aria-describedby="basic-adddon"
                  onChange={ this.handleChange }
                  value={ value }
                  required
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">Translate to Yoruba</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <iframe
              frameBorder="0"
              width="400"
              height="200"
              src={yorExp}>
            </iframe>
            <iframe
              frameBorder="0"
              width="400"
              height="200"
              src={yorInt}>
            </iframe>
            <iframe
              frameBorder="0"
              width="400"
              height="200"
              src={yorSpo}>
            </iframe>
            <iframe
              frameBorder="0"
              width="400"
              height="200"
              src={yorVid}>
            </iframe>
          </div>  
        );
    }
}

export default Search;
