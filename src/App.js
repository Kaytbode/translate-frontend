import React, { Component } from 'react';
import Search from './components/searchPhrase';
import Create from './components/createPhrase';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Search />
        <Create />
      </div>
    );
  }
}


export default App;
