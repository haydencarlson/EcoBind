import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import DocumentsLoaderItem from '../components/DocumentsLoaderItem.js';
class DocumentsLoader extends Component {

	renderSavedDocs() {
		const SavedDocuments = [
		  { name: "SoilReportDay4", url: "https://ecobind.000webhostapp.com/testDoc.doc" } ,
		  { name: "SoilReportDay5", url: "https://ecobind.000webhostapp.com/testDoc.doca" } 
		]
	
		return SavedDocuments.map((doc, index) => {
			return (
				<div>
					<DocumentsLoaderItem key={index} name={doc.name} url={doc.url}/>
				</div>
			)
		});
	}
  

  render() {
    return (
      <div>
      	{this.renderSavedDocs()}
      </div>
    )
  };
};


export default connect(null, null)(DocumentsLoader);