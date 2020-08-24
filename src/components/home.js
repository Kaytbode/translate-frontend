import React, { Component } from 'react';
import Registration from 'registeration';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);

        this.handleSuccessfulReg = this.handleSuccessfulReg.bind(this);
    }

    handleSuccessfulReg(){
        this.props.history.push('/login');
    }

    render(){
        return(
            <div>
                <h2>Status:{this.props.loggedInStatus}</h2>
                <Registration handleSuccessfulReg={this.handleSuccessfulReg}/>
            </div>  
        );
    }
}

export default Home;
