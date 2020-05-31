import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/home';
import Dashboard from '../Dashboard/dashboard';
import About from '../About/about';
import Index from "./index";

export default class Roting extends Component {

  constructor(){
    super();
     this.state = {
       loggedInStatus : "NOT_LOGGED_IN",
       user : {}
     }
  }
  render(){
  return (
    <Router>
      <div>
       <Switch>
        <Route exact path="/" component={Index}/>
          <Route exact path="/home" 
          render = {props => (
            <Home {...props} loggedInStatus={this.state.loggedInStatus} />
          )} />
          <Route path="/about" 
          render = {props => (
            <About {...props} loggedInStatus={this.state.loggedInStatus} />
          )}/>
          <Route path="/dashboard" 
          render = {props => (
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
          )}/>
        </Switch>
      </div>
    </Router>
  );
 }
}


