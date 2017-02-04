import React, {Component} from 'react';

class loginBox extends Component {
  render() {
    return (
    	<div id="loginForm">
    		<label> Username </label>
    		<input type="text" placeholder="Enter Username"/>
    		<label> Password </label>
    		<input type="text" placehollder="Enter Password"/>
    		<label> Company Name </label>
    		<input type="text" placeholder="Enter Company Name"/>
    	</div>
    );
  };
};


export default loginBox;