import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import Main from "./views/Main.js";

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
      <Route path="/" component={Main}/>
      </Router>
    )
  };
}

export default App;