import React, {Component} from 'react';
import NavBarList from '../containers/NavBarList.js';

class Navbar_Partial extends Component {
  render() {
    return (
      <nav id="NavBar">
      	<NavBarList />
      </nav>
    );
  };
};


export default Navbar_Partial;