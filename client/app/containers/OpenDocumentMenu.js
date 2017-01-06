import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import OpenDocumentButton from '../components/OpenDocumentButton.js';
class OpenDocumentMenu extends Component {

	openDocument(url) {
		window.open(url); 
	}
  render() {
  	return (
  		<div id="DocumentMenuBar">
  			<OpenDocumentButton handleClick={() => this.openDocument(this.props.selectedDocument)}/>
  		</div>
  	)
  };
};

const mapStateToProps = function (state) {
  return ({
    selectedDocument: state.selectDocument
  });
 }
export default connect(mapStateToProps, null)(OpenDocumentMenu);