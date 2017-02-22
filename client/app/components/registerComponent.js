import React, {Component} from 'react';

class registerBox extends Component {
  render() {
    return (
    	<div id="registerForm">
    		<label> Username </label>
    		<input type="text" placeholder="Choose a username"/>
    		<br/>
    		<label> Password </label>
    		<input type="text" placeholder="Choose a password"/>
    		<br/>
    		<button> Login </button>
    	</div>
    );
  };
};


export default registerBox;