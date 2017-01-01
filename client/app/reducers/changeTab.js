import {TYPE_CHANGE_TAB} from '../types.js';

const changeTab = (state = "", action) => {
  switch(action.type) {
    case TYPE_CHANGE_TAB:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default changeTab;