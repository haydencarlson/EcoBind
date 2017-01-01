import React, {Component} from 'react';
import NavBar from '../partials/NavBar_Partial.js'
import SubNavBar from '../partials/SubNavBar_Partial.js';
class Main extends Component {
  render() {
    return (
    	<div>
    		<NavBar/>
    		<SubNavBar/>
    	</div>
    );
  };
};


export default Main;