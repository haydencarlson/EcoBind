import React, {Component} from 'react';

class SubNavBarListItem extends Component {
  render() {
    return (
    	<li id="SubNavBarLi" className={this.props.SubNavStyle} onClick={() => this.props.handleClick(this.props.SubNavItemName)}>
    		{this.props.SubNavItemName}<button onClick={() => this.props.handleDelete(this.props.SubNavItemName)}>X</button>
    	</li>
    );
  };
};


export default SubNavBarListItem;