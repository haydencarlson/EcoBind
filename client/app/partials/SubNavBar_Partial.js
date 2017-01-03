import React, {Component} from 'react';
import SubNavBarList from '../containers/SubNavBarList.js';

class SubNavBar_Partial extends Component {
  render() {
    return (
      <nav id="SubNavBar">
      	<SubNavBarList/>
      </nav>
    );
  };
};


export default SubNavBar_Partial;