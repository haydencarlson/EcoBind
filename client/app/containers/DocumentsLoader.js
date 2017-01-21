import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import * as actions from '../actions/index.js';
import DocumentsLoaderItem from '../components/DocumentsLoaderItem.js';
class DocumentsLoader extends Component {
	constructor(props) {
		super(props);
		this.state = {doc_url: ''}
	}
	openDocument(URLtoOpen) {
		console.log(URLtoOpen);
			window.open(URLtoOpen); 
		}
	renderSavedDocs(docs) {
		return docs.map((doc, index) => {
			return (
				<div key={doc.title}>
					<DocumentsLoaderItem key={index} name={doc.title} url={doc.documentUrl} handleClick={(url) => this.props.selectDocument(url)}/>
				</div>
			)
		});
	}

	onDrop (docFile) {
		console.log(docFile);
    const data = new FormData();
    data.append('action', 'ADD');
    data.append('param', 0);
    data.append('secondParam', 0);
    data.append('currentSubTab', this.props.currentSubTab);
    data.append('fileName', docFile[0].name)
    data.append('file', new Blob(docFile, { type: docFile[0].type}));

    axios.post('http://localhost:3000/dropzone', data).then((doc_url) => {
      this.setState({ doc_url: doc_url.data });
		
    }).catch((error) => {
    	console.log("Error! Please try to upload again");
    });
  }

  render() {
  	if (this.props.currentSubTab != "") {
  		return (
  			<Dropzone style={{"width":"100%", "height": "100%","borderWidth": "2px", "borderColor": "#666", "borderStyle": "dashed", "borderRadius": "5px"}} activeStyle={{"width":"100%", "height": "100%","borderWidth": "2px", "borderColor": "#666", "borderStyle": "dashed", "borderRadius": "5px", "backgroundColor" : "rgb(238,238,238)"}} disableClick="true" onDrop={this.onDrop.bind(this)} multiple={false} accept={'application/*'}>
	     		<div>
	      		{this.renderSavedDocs(this.props.allDocuments)}
	      	</div>
	      </Dropzone>
	      
    	)
  	} else {
  		return (
  			<div id="DocumentLoaderNoTab">
  				<span>Open a Tab to view documents</span>
  			</div>
  		)
  	}
  };
};

const mapDispatchToProps = function (dispatch) {
	return {
		selectDocument: (doc) => {
			dispatch(actions.selectDocument(doc));
		},
		getDocuments: (docs) => {
			dispatch(actions.getDocuments(docs));
		}
	}
}

const mapStateToProps = function (state) {
  return ({
    currentSubTab: state.changeSubTab,
    allDocuments: state.getDocuments
  });
 }
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsLoader);