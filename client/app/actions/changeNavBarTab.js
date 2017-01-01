import {TYPE_CHANGE_TAB} from '../types.js';

const changeTab = (tab) => {
  return {
    type: TYPE_CHANGE_TAB,
    payload: tab
  }
}

export default changeTab;