import React, { Component } from 'react';
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
            <form onSubmit = { this.handleSubmit }>
              <label> How to say  
              <input name='search_phrase' type='text' value={ value } onChange={ this.handleChange }/>
              </label>
              <button type='submit'>Translate to Yoruba</button>
            </form>
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
