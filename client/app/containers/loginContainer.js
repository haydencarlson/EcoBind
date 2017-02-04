import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import loginBox from '../components/loginBox.js';

class loginContainer extends Component {
  render() {
    return (
      <loginBox/>
    )
  };
};

export default connect(null, null)(loginContainer);