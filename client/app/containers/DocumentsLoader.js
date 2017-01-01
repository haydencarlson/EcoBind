import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';

class DocumentsLoader extends Component {

  

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  };
};


export default connect(null, null)(DocumentsLoader);