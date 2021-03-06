import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/adminDashboard';
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

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data
    });
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
          <Route 
            exact
            path='/login'
            render = { props => (
              <Login {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} user={this.state.user}/>
            )}
          />
          <Route 
            exact
            path='/search'
            render = { props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
          />
          <Route 
            exact
            path='/admin/search'
            render = { props => (
              <AdminDashboard {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
          />
          <Route path='/phrase/search' exact component={Search}/>
          <Route path='/admin/create' exact component={Create}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
