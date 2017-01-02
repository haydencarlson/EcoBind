import React, {Component} from 'react';

class SubNavBarListItem extends Component {
  render() {
    return (
    	<li onClick={() => this.props.handleClick(this.props.SubNavItemName)}>
    		{this.props.SubNavItemName}
    	</li>
    );
  };
};


export default SubNavBarListItem;