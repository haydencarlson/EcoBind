import {TYPE_DELETE_SUB_TAB} from '../types.js';

const deleteSubTab = (subTab, mainTab) => {
	console.log(subTab);
  return {
    type: `socket/${TYPE_DELETE_SUB_TAB}`,
    payload: {subTab: subTab, mainTab: mainTab}
  }
}

export default deleteSubTab;