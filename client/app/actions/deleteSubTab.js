import {TYPE_DELETE_SUB_TAB} from '../types.js';

const deleteSubTab = (subTab) => {
	console.log(subTab);
  return {
    type: `socket/${TYPE_DELETE_SUB_TAB}`,
    payload: subTab
  }
}

export default deleteSubTab;