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

	onDrop (imageFile) {
    const data = new FormData();
    data.append('action', 'ADD');
    data.append('param', 0);
    data.append('secondParam', 0);
    data.append('file', new Blob(imageFile, { type: 'image/jpeg' }));

    axios.post('http://localhost:3000/dropzone', data).then((doc_url) => {
      this.setState({ doc_url: doc_url.data });
      console.log(this.state.doc_url);
      this.set_uploadStatus("COMPLETE");
    }).catch((error) => {
      console.log(error);
      this.set_uploadStatus("ERROR");
    });
  }

  render() {
  	if (this.props.currentSubTab != "") {
  		return (
	      <div>
	      	{this.renderSavedDocs(this.props.allDocuments)}
	      </div>
	      
    	)
  	} else {
  		return (
  			<Dropzone onDrop={this.onDrop.bind(this)} multiple={false} accept={'image/*'}>
	  			<div id="DocumentLoaderNoTab">
	  				<span>Open a Tab to view documents</span>
	  			</div>
  			</Dropzone>
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