import React, {Component} from 'react';

class NavBarListItem extends Component {
  render() {
    return (
    	<li id="NavBarLi" className={this.props.NavBarStyle} onClick={() => this.props.handleClick(this.props.NavItemName)}>
    		{this.props.NavItemName}<button onClick={() => this.props.handleDelete(this.props.NavItemName)}>X</button>
    	</li>
    );
  };
};


export default NavBarListItem;