import {TYPE_GET_SUB_TABS} from '../types.js';

const getSubTabs = (tabs) => {
  return {
    type: `socket/${TYPE_GET_SUB_TABS}`,
    payload: tabs
  }
}

export default getSubTabs;