import React, {Component} from 'react';

class OpenDocumentButton extends Component {
  render() {
    return (
  		<div id="OpenButtonContainer">
  			<i className="fa fa-files-o" aria-hidden="true"></i>
  			<span id="OpenButton" onClick={() => this.props.handleClick()}> Open </span>
  		</div>
    );
  };
};


export default OpenDocumentButton;