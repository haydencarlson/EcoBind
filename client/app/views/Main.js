import React, {Component} from 'react';
import NavBar from '../partials/NavBar_Partial.js'
import SubNavBar from '../partials/SubNavBar_Partial.js';
import DocumentLoader from '../partials/DocumentLoader_Partial.js';
class Main extends Component {
  render() {
    return (
    	<div>
    		<NavBar/>
    		<SubNavBar/>
    		<DocumentLoader/>
    	</div>
    );
  };
};


export default Main;