import {TYPE_GET_TABS} from '../types.js';

const getTabs = (tabs) => {
  return {
    type: `socket/${TYPE_GET_TABS}`,
    payload: tabs
  }
}

export default getTabs;