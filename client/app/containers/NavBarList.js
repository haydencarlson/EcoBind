import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import NavBarListItem from '../components/NavBarListItem.js';
class NavBarList extends Component {
  constructor(props) {
    super(props);
    this.state = {ActiveTab: 'active'}
  }
  
  renderList() {
    const NavItems = [
     { name: "Information" }, 
     { name:"Financial" }, 
     { name:"Contracts" }, 
     { name: "Schedule" }
    ];

    return NavItems.map((item, index) => {
      if (this.props.currentTab === item.name) {
        return (
          <NavBarListItem NavBarStyle="activeTab" key={index} NavItemName={item.name} handleClick={(tab) => this.props.changeTab(tab)} />
        )
      } else {
        return (
          <NavBarListItem key={index} NavItemName={item.name} handleClick={(tab) => this.props.changeTab(tab)} />
        )
      }
    });
  }

  render() {
    return (
      <ul id="NavBarUl">
        {this.renderList()}
      </ul>
    )
  };
};
  
  const mapStateToProps = function (state) {
    return ({
      currentTab: state.changeTab
    });
  }

  const mapDispatchToProps = function (dispatch) {
    return {
      changeTab: (tab) => {
        dispatch(actions.changeTab(tab));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBarList);