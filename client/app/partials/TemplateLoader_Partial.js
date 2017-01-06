import React, {Component} from 'react';
import TemplaterLoader from '../containers/TemplaterLoader.js';
import OpenDocumentMenu from '../containers/OpenDocumentMenu.js';
class TemplaterLoader_Partial extends Component {
  render() {
    return (
			<div id="TemplaterLoaderBox">
				<OpenDocumentMenu/>
	    	<TemplaterLoader/>
	    </div>
    );
  };
};


export default TemplaterLoader_Partial;