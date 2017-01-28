import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import DocumentsLoaderItem from '../components/DocumentsLoaderItem.js';
class DocumentsLoader extends Component {

	renderPreviewDoc(currentSubTab) {
		
		return SavedDocuments[currentSubTab].map((doc, index) => {
			return (
				<div>
					<DocumentsLoaderItem key={index} name={doc.name} url={doc.url}/>
				</div>
			)
		});
	}

  render() {
  	if (this.props.selectedDocument != "") {
  		return (
	  		<div>
	  			<iframe id="PreviewiFrame" src={'https://view.officeapps.live.com/op/embed.aspx?src=' + this.props.selectedDocument} >
	  			</iframe>
	  		</div>
  		)	
  	} else {
  		return (
  			<div>
  				<iframe id="iFramePlaceHolder" src="https://blankslate.io/">
  				</iframe>
  			</div>
  		)
  	}
  };
};

const mapStateToProps = function (state) {
  return ({
    selectedDocument: state.selectDocument
  });
 }
export default connect(mapStateToProps, null)(DocumentsLoader);