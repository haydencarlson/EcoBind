import React, {Component} from 'react';
import NavBarList from '../containers/NavBarList.js';
import AddNavTab from '../containers/AddMainNavTab.js'
class Navbar_Partial extends Component {
  render() {
    return (
      <nav id="NavBar">
      	<AddNavTab/>
      	<NavBarList />
      </nav>
    );
  };
};


export default Navbar_Partial;