import React, {Component} from 'react';

class SubNavBarListItem extends Component {
  render() {
    return (
    	<li>
    		{this.props.SubNavItemName}
    	</li>
    );
  };
};


export default SubNavBarListItem;