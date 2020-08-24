import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Search from './components/searchPhrase';
import Create from './components/createPhrase';
import Home from './components/home';
import Login from './components/login';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>English to Yoruba Translator</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route 
            exact
            path='/'
            render = {props => (
              <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
          />
          <Route path='/login' exact component={Login}/>
          <Route path='/phrase/search' exact component={Search}/>
          <Route path='/phrase/create' exact component={Create}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
