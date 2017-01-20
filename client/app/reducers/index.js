import { combineReducers } from 'redux';
import changeTab from './changeTab.js';
import changeSubTab from './changeSubTab.js';
import selectDocument from './selectDocument.js';
import addTab from './addTab.js';
import getTabs from './getTabs.js';
import getSubTabs from './getSubTabs.js';
import getDocuments from './getDocuments.js';
import renderApp from './renderApp.js';
const rootReducer = combineReducers({
  changeTab,
  changeSubTab,
  selectDocument,
  getTabs,
  getSubTabs,
  getDocuments,
  renderApp
});

export default rootReducer;
