import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
class AddMainNavTab extends Component {
	constructor(props) {
		super(props);
		this.state = {newTab: ""};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({newTab: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.addNewTab(this.state.newTab);
		this.setState({newTab: ''});
	}
  render() {
  	return (
	  	<form className="AddTabForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" onChange={this.handleInputChange} value={this.state.newTab} className="AddTabInput" placeholder="Tab Name" />
				<button className="AddTabButton">Add Tab</button>		
			</form>
		)
  };
};
const mapDispatchToProps = function (dispatch) {
	return {
		addNewTab: (tab) => {
			dispatch(actions.addNewTab(tab));
			
		}
	}
}

export default connect(null, mapDispatchToProps)(AddMainNavTab);