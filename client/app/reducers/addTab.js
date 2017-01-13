import {TYPE_ADD_TAB} from '../types.js';

const addTab = (state = [], action) => {
  switch(action.type) {
    case TYPE_ADD_TAB:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default addTab;