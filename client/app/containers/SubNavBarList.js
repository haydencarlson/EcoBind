import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import SubNavBarListItem from '../components/SubNavBarListItem.js';

class SubNavBarList extends Component {
  componentWillMount() {
    this.props.getSubTabs(this.props.currentTab);
  }

  renderList(allSubTabs) {
    console.log(allSubTabs);
    return allSubTabs.map((item, index) => {
      if (this.props.currentSubTab === item.tabName) {
        return (
          <SubNavBarListItem SubNavStyle="subNavActive" key={index} onClick={this.props.getDocuments(this.props.currentSubTab)} SubNavItemName={item.tabName} handleClick={(subTab) => this.props.changeSubTab(subTab)} />
        )
      } else {
        return (
          <SubNavBarListItem key={index} SubNavItemName={item.tabName} handleClick={(subTab) => this.props.changeSubTab(subTab)} />
        )
      }
    });  
  }

  render() {
    return (
      <ul id="SubNavBarUl">
        {this.renderList(this.props.allSubTabs)}
      </ul>
    )
  };
};

const mapStateToProps = function (state) {
    return ({
      currentTab: state.changeTab,
      currentSubTab: state.changeSubTab,
      allSubTabs: state.getSubTabs
    });
  }

const mapDispatchToProps = function (dispatch) {
  return {
    changeSubTab: (subTab) => {
      dispatch(actions.changeSubTab(subTab));
    },
    getSubTabs: (tabs) => {
      dispatch(actions.getSubTabs(tabs));
    },
    getDocuments: (docs) => {
      dispatch(actions.getDocuments(docs));
    }
  }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(SubNavBarList);