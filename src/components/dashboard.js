import React, { Component } from 'react';
import Search from './searchPhrase';
import '../App.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Status:{this.props.loggedInStatus}</h2>
                <Search />
            </div>  
        );
    }
}

export default Dashboard;