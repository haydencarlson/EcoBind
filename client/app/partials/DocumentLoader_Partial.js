import React, {Component} from 'react';
import DocumentsLoader from '../containers/DocumentsLoader.js';
import OpenDocumentMenu from '../containers/OpenDocumentMenu.js';
class DocumentLoader_Partial extends Component {
  render() {
    return (
			<div id="DocumentLoaderBox">
	    	<span id="DocumentLoaderSpan">Documents</span>
	    	<OpenDocumentMenu/>
	    	<DocumentsLoader/>
	    </div>
    );
  };
};


export default DocumentLoader_Partial;