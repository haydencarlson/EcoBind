import React, {Component} from 'react';

class loginBox extends Component {
  render() {
    return (
    	<div id="loginForm">
    		<label> Username </label>
    		<input type="text" placeholder="Enter Username"/>
    		<br/>
    		<label> Password </label>
    		<input type="text" placeholder="Enter Password"/>
    		<br/>
    		<label> Company Name </label>
    		<input type="text" placeholder="Enter Company Name"/>
    		<br/>
    		<button> Login </button>
    	</div>
    );
  };
};


export default loginBox;