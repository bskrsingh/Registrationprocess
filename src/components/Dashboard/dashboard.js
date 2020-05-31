import React, { Component } from 'react'

export default class Dashboard extends Component {

    constructor(props){
        super(props);
    }
    render(){
    return (
      <div>
        <h2>Dashboard</h2>
        <h2>State : {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

