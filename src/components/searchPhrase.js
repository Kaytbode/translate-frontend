import React, { Component } from 'react';
import { Form, Button, InputGroup, Row, Col, Container, Figure } from 'react-bootstrap';
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
          explanation: '',
          intonation: '',
          spoken:'',
          video: ''
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
            explanation: 'Yoruba Explanation',
            intonation: 'Yoruba Intonation',
            spoken: 'Yoruba Spoken',
            video: 'Video expression'
          });
          console.log( data[0]);
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
        const { value, yorVid, yorSpo, yorInt, yorExp, explanation } = this.state;
        return(
          <Container>
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
            <Row>
                <Col>
                  <Figure>
                    <iframe
                      frameBorder="0"
                      src={yorExp}>
                    </iframe>
                    <Figure.Caption>{explanation}</Figure.Caption>
                  </Figure>  
                </Col>
                <Col>
                  <Figure>
                    <iframe
                      frameBorder="0"
                      src={yorInt}>
                    </iframe>
                    <Figure.Caption>{intonation}</Figure.Caption>
                  </Figure>
                </Col>
            </Row>
            <Row>
                <Col>
                  <Figure>
                    <iframe
                      frameBorder="0"
                      src={yorSpo}>
                    </iframe>
                    <Figure.Caption>{spoken}</Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <iframe
                      frameBorder="0"
                      src={yorVid}>
                    </iframe>
                    <Figure.Caption>{video}</Figure.Caption>
                  </Figure>
                </Col>
            </Row>
          </Container>  
        );
    }
}

export default Search;
