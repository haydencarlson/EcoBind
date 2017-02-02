import {TYPE_DELETE_TAB} from '../types.js';

const deleteTab = (tab) => {
  return {
    type: `socket/${TYPE_DELETE_TAB}`,
    payload: tab
  }
}

export default deleteTab;