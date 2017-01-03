import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import DocumentsLoaderItem from '../components/DocumentsLoaderItem.js';
class DocumentsLoader extends Component {

	renderPreviewDoc(currentSubTab) {
		
		return SavedDocuments[currentSubTab].map((doc, index) => {
			console.log("doc",doc);
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
	  			<iframe src={'https://view.officeapps.live.com/op/embed.aspx?src=' + this.props.selectedDocument} width='1366px' height='623px' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>
	  		</div>
  		)	
  	} else {
  		return (
  			<div></div>
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