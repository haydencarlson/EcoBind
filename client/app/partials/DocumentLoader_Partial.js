import React, {Component} from 'react';
import DocumentsLoader from '../containers/DocumentsLoader.js';
import OpenDocumentMenu from '../containers/OpenDocumentMenu.js';
class DocumentLoader_Partial extends Component {
  render() {
    return (
    	<div id="DocumentLoader">
    		<span id="DocumentLoaderSpan"> Documents </span>

	      <div id="DocumentLoaderBox">
	      	<OpenDocumentMenu/>
	      	<DocumentsLoader/>
	      </div>
      </div>
    );
  };
};


export default DocumentLoader_Partial;