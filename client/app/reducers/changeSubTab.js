import {TYPE_CHANGE_SUB_TAB} from '../types.js';

const changeSubTab = (state = "Soil Report", action) => {
  switch(action.type) {
    case TYPE_CHANGE_SUB_TAB:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default changeSubTab;