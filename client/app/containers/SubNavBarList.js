import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import SubNavBarListItem from '../components/SubNavBarListItem.js';

class SubNavBarList extends Component {

  renderList() {
    const SubNavItems = [
      {
        name: "name",
        component: <component />
      },
      {
        name: "Client",
        component: <component />
      },
      {
        name: "Pipelines",
        component: <component />
      },
      {
        name: "Saftey",
        component: <component />
      }
    ];
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

  
export default connect(mapStateToProps, null)(SubNavBarList);