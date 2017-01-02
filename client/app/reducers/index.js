import { combineReducers } from 'redux';
import changeTab from './changeTab.js';
import changeSubTab from './changeSubTab.js';
const rootReducer = combineReducers({
  changeTab,
  changeSubTab
});

export default rootReducer;
