import React, {Component} from 'react';
import LoginContainer from '../containers/loginContainer.js';
import RegisterContainer from '../containers/registerContainer.js';
class Login extends Component {
  render() {
    return (
    	<div id="userManager">
    		<div>
    			<h1> Log in </h1>
        	<LoginContainer/>
    		</div>
    		<div>
    			<h1> Sign Up </h1>
    			<RegisterContainer/>
    		</div>
    	</div>

    );
  };
};


export default Login;