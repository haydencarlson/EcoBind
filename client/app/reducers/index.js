import { combineReducers } from 'redux';
import changeTab from './changeTab.js';
import changeSubTab from './changeSubTab.js';
import selectDocument from './selectDocument.js';

const rootReducer = combineReducers({
  changeTab,
  changeSubTab,
  selectDocument
});

export default rootReducer;
