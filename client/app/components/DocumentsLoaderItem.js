import React, {Component} from 'react';

class DocumentsLoaderItem extends Component {
  render() {
    return (
    	<ul>
    		<li style={{"listStyle": "none"}} onClick={() => this.props.handleClick(this.props.url)}>
          <div id="aDocument">
            <img id="wordDocImg" src="http://i.imgur.com/ZhgKSpt.png"/>
	    		 {this.props.name}
          </div>
    		</li>
    	</ul>
    );
  };
};


export default DocumentsLoaderItem;