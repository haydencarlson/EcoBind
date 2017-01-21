import {TYPE_GET_SUB_TABS} from '../types.js';

const getSubTabs = (state = [], action) => {

  switch(action.type) {
    case TYPE_GET_SUB_TABS:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default getSubTabs;