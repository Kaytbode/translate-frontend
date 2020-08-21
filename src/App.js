import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Search from './components/searchPhrase';
import Create from './components/createPhrase';
import Registration from './components/home';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>English to Yoruba Translator</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Registration}/>
          <Route path='/phrase/search' component={Search}/>
          <Route path='/phrase/create' component={Create}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
