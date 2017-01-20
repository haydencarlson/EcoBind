import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import Main from "./views/Main.js";

class App extends Component {

  render() {
  	if (this.props.renderApp === true) {
  		return (
  			<div> Loading.....</div>
  		)
  	} else {
	    return (
	      <Router history={hashHistory}>
	      <Route path="/" component={Main}/>
	      </Router>
	    )
  	}
  };
}

function mapStateToProps(state) {
  return ({
    renderApp: state.renderApp
  });
};

export default connect(mapStateToProps, null)(App);