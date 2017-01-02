import {TYPE_CHANGE_SUB_TAB} from '../types.js';

const changeSubTab = (subTab) => {
	console.log(subTab);
  return {
    type: TYPE_CHANGE_SUB_TAB,
    payload: subTab
  }
}

export default changeSubTab;