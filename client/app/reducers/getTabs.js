import {TYPE_GET_TABS} from '../types.js';

const getTabs = (state = [], action) => {
	  	console.log(action.payload);
  switch(action.type) {
    case TYPE_GET_TABS:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default getTabs;