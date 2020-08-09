import React, { Component } from 'react';
import axios from 'axios';


class Create extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            english: '',
            yor_spoken:'',
            yor_intonation:'',
            yor_explanation:'',
            yor_video:''
        }
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
            <form onSubmit = { this.handleSubmit }>
              <label> English 
              <input name='english' type='text' value={ english } onChange={ this.handleChange }/>
              </label>
              <label> Link to Explanation
              <input name='yor_explanation' type='text' value={ yor_explanation } onChange={ this.handleChange }/>
              </label>
              <label> Link to Intonation
              <input name='yor_intonation' type='text' value={ yor_intonation } onChange={ this.handleChange }/>
              </label>
              <label> Link to Spoken
              <input name='yor_spoken' type='text' value={ yor_spoken } onChange={ this.handleChange }/>
              </label>
              <label> Link to Video
              <input name='yor_video' type='text' value={ yor_video } onChange={ this.handleChange }/>
              </label>
              <button type='submit'>Create Translation</button>
            </form>
          </div>  
        );
    }
}

export default Create;
