import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props){
        super(props);
    }
    render(){
    return (
      <div>
        <h2>Home</h2>
        <h2>State : {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

