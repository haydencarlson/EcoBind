import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import LoginComponent from '../components/loginComponent.js';

class loginContainer extends Component {
  render() {
    return (
      <LoginComponent/>
    )
  };
};

export default connect(null, null)(loginContainer);