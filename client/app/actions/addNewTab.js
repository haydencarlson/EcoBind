import {TYPE_NEW_TAB} from '../types.js';

const newTab = (tab) => {
  return {
    type: `socket/${TYPE_NEW_TAB}`,
    payload: tab
  }
}

export default newTab;