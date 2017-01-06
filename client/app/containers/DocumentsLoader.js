import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import DocumentsLoaderItem from '../components/DocumentsLoaderItem.js';
class DocumentsLoader extends Component {

	renderSavedDocs(currentSubTab) {
		const SavedDocuments = {
		  "Soil Report": [ 
			  { name: "SoilReportDay4", url: "https://ecobind.000webhostapp.com/testDoc.doc" },
			  { name: "SoilReportDay5", url: "https://ecobind.000webhostapp.com/testDoc.doc" } 
		 	],
		  Safety: [
		  	{ name: "Safety Hazards", url: "https://ecobind.000webhostappp.com/safetyhazards2016.doc"}
		  ]
		}
	
		return SavedDocuments[currentSubTab].map((doc, index) => {
			return (
				<div key={index}>
					<DocumentsLoaderItem key={index} name={doc.name} url={doc.url} handleClick={(url) => this.props.selectDocument(url)}/>
				</div>
			)
		});
	}

  render() {
  	if (this.props.currentSubTab != "") {
  		return (
	      <div>
	      	{this.renderSavedDocs(this.props.currentSubTab)}
	      </div>
    	)
  	} else {
  		return (
  			<div id="DocumentLoaderNoTab">
  			Open a Tab to view documents
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
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsLoader);