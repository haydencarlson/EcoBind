import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import TemplatesSavedItem from '../components/DocumentsLoaderItem.js';
class TemplaterLoader extends Component {

	renderTemplates(currentSubTab) {
		const SavedTemplates = {
		  "Soil Report": [ 
			  { name: "Contract Template", url: "https://ecobind.000webhostapp.com/testDoc.doc" }
		 	],
		  Safety: [
		  	{ name: "Safety Template", url: "https://ecobind.000webhostappp.com/safetyhazards2016.doc"}
		  ]
		}
	
		return SavedTemplates[currentSubTab].map((doc, index) => {
			return (
				<div>
					<TemplatesSavedItem key={index} name={doc.name} url={doc.url} handleClick={(url) => this.props.selectDocument(url)}/>
				</div>
			)
		});
	}

  render() {
  	if (this.props.currentSubTab != "") {
  		return (
	      <div>
	      	{this.renderTemplates(this.props.currentSubTab)}
	      </div>
    	)
  	} else {
  		return (
  			<div id="TemplaterLoaderNoTab">
  			Open a Tab to view templates for that section
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