import React, {Component} from 'react';
import SubNavBarList from '../containers/SubNavBarList.js';
import AddSubNavTab from '../containers/AddSubNavTab.js'
class SubNavBar_Partial extends Component {
  render() {
    return (
      <nav id="SubNavBar">
      	<AddSubNavTab/>
      	<SubNavBarList/>
      </nav>
    );
  };
};


export default SubNavBar_Partial;