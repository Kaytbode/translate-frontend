import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      value: '',
      yorExp: '',
      yorInt: '',
      yorSpo: '',
      yorVid: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
    event.preventDefault();
  }

  handleSubmit(event){
    const uri = `http://localhost:5000/phrase/search/${this.state.value}`
  
    axios.get(uri)
      .then(res => {
        const { data } = res.data;
        console.log(data);
        this.setState({
          yorExp: data[0].yor_explanation,
          yorInt: data[0].yor_intonation,
          yorSpo: data[0].yor_spoken,
          yorVid: data[0].yor_video,
        });
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })

    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit = { this.handleSubmit }>
          <input name='search_phrase' type='text' value={ this.state.value } onChange={ this.handleChange }/>
          <button type='submit'>search</button>
        </form>
        <iframe
          frameBorder="0"
          width="400"
          height="200"
          src={this.state.yorExp}>
        </iframe>
        <iframe
          frameBorder="0"
          width="400"
          height="200"
          src={this.state.yorInt}>
        </iframe>
        <iframe
          frameBorder="0"
          width="400"
          height="200"
          src={this.state.yorSpo}>
        </iframe>
        <iframe
          frameBorder="0"
          width="400"
          height="200"
          src={this.state.yorVid}>
        </iframe>
      </div>
      
    );
  }
}


export default App;
