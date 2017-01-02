import React, {Component} from 'react';

class DocumentsLoaderItem extends Component {
  render() {
    return (
    	<li>
    		{this.props.name}
    		{this.props.url}
    	</li>
    );
  };
};


export default DocumentsLoaderItem;