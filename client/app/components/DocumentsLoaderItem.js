import React, {Component} from 'react';

class DocumentsLoaderItem extends Component {
  render() {
    return (
    	<ul>
    		<li onClick={() => this.props.handleClick(this.props.url)}>
	    		{this.props.name}
	    		{this.props.url}
	    		<a href={this.props.url}> Open Document </a>
    		</li>
    	</ul>
    );
  };
};


export default DocumentsLoaderItem;