import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
class AddSubNavTab extends Component {
	constructor(props) {
		super(props);
		this.state = {newSubTab: ""};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({newSubTab: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.addNewSubTab(this.state.newTab);
		this.setState({neSubTab: ''});
	}
  render() {
  	return (
	  	<form className="AddSubTabForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" onChange={this.handleInputChange} value={this.state.newTab} className="AddSubTabInput" placeholder="Sub Tab Name" />
				<button className="AddSubTabButton">Add Tab</button>		
			</form>
		)
  };
};
const mapDispatchToProps = function (dispatch) {
	return {
		addNewSubTab: (tab) => {
			dispatch(actions.addNewSubTab(tab));
			
		}
	}
}

export default connect(null, mapDispatchToProps)(AddSubNavTab);