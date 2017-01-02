import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index.js';
import SubNavBarListItem from '../components/SubNavBarListItem.js';

class SubNavBarList extends Component {

  renderList(currentTab) {
    var Data = {
      Information: [ "Safety", "Soil Report", "Pipelines", "Irrigation" ],
      Financial: [ "Salary", "Hours" ],
      Contracts: [ "People", "Contracts" ],
      Schedule: [ "Scheduled Hours", "Holidays" ]
    }
  
    return Data[currentTab].map((item, index) => {
      return (
        <SubNavBarListItem key={index} SubNavItemName={item} handleClick={(subTab) => this.props.changeSubTab(subTab)} />
      )
    });  
  }

  render() {
    if (this.props.currentTab != "") {
      return (
        <ul>
          {this.renderList(this.props.currentTab)}
        </ul>
      )
    } else {
        return (
          <ul>

          </ul>
        )
      }
  };
};

const mapStateToProps = function (state) {
    return ({
      currentTab: state.changeTab
    });
  }

const mapDispatchToProps = function (dispatch) {
  return {
    changeSubTab: (subTab) => {
      dispatch(actions.changeSubTab(subTab));
    }
  }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(SubNavBarList);