import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import TemplatesSavedItem from '../components/TemplatesSavedItem.js';
class TemplaterLoader extends Component {

	renderTemplates(currentSubTab) {
		
		return SavedTemplates[currentSubTab].map((template, index) => {
			return (
				<div key={index}>
					<TemplatesSavedItem name={template.name} url={template.url} handleClick={(url) => this.props.selectDocument(url)}/>
				</div>
			)
		});
	}

  render() {
  	if (this.props.currentSubTab != "") {
  		return (
	      <div>
	      	{this.renderTemplates(this.props.tabTemplates)}
	      </div>
    	)
  	} else {
  		return (
  			<div id="TemplaterLoaderNoTab">
  			Open a Tab to view templates
  			</div>
  		)
  	}
  };
};

const mapDispatchToProps = function (dispatch) {
	return {
		selectDocument: (doc) => {
			dispatch(actions.selectDocument(doc));
		}
	}
}

const mapStateToProps = function (state) {
  return ({
    currentSubTab: state.changeSubTab
  });
 }
export default connect(mapStateToProps, mapDispatchToProps)(TemplaterLoader);