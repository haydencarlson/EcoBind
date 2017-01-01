import React, {Component} from 'react';

class NavBarListItem extends Component {
  render() {
    return (
    	<li onClick={() => this.props.handleClick(this.props.NavItemName)}>
    		{this.props.NavItemName}
    	</li>
    );
  };
};


export default NavBarListItem;