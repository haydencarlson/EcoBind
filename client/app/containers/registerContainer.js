import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import RegisterComponent from '../components/registerComponent.js';

class registerContainer extends Component {
  render() {
    return (
      <RegisterComponent/>
    )
  };
};

export default connect(null, null)(registerContainer);