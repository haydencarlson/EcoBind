import {TYPE_NEW_SUB_TAB} from '../types.js';

const newSubTab = (tab) => {
  return {
    type: `socket/${TYPE_NEW_SUB_TAB}`,
    payload: tab
  }
}

export default newSubTab;