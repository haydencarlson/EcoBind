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
  componentWillMount() {
    this.props.getTabs();
  }
  
  renderList(allTabs) {
    return allTabs.map((item, index) => {
      if (this.props.currentTab === item.name) {
        return (
          <NavBarListItem NavBarStyle="activeTab" key={index} NavItemName={item.tabName} handleClick={(tab) => this.props.changeTab(tab)} />
        )
      } else {
        return (
          <NavBarListItem key={index} NavItemName={item.tabName} handleClick={(tab) => this.props.changeTab(tab)} />
        )
      }
    });
  }

  render() {
    return (
      <ul id="NavBarUl">
        {this.renderList(this.props.allTabs)}

      </ul>
    )
  };
};
  
  const mapStateToProps = function (state) {
    return ({
      currentTab: state.changeTab,
      allTabs: state.getTabs
    });
  }

  const mapDispatchToProps = function (dispatch) {
    return {
      changeTab: (tab) => {
        dispatch(actions.changeTab(tab));
      },
      getTabs: (tabs) => {
        dispatch(actions.getTabs(tabs));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBarList);