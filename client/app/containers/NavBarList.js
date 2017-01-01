import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import NavBarListItem from '../components/NavBarListItem.js';
class NavBarList extends Component {

  renderList() {
    const NavItems = [
      "Information", 
      "Financial", 
      "Contracts", 
      "Schedule"
    ];

    return NavItems.map((item) => {

      return (
        <NavBarListItem NavItemName={item} handleClick={(tab) => this.props.changeTab.bind(this)(tab)} />
      )
    });
  }

  render() {
    return (
      <ul>
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