import {TYPE_RENDER_APP} from '../types.js';

const renderApp = (state = false, action) => {
  switch(action.type) {
    case 'TYPE_RENDER_APP':
      return action.payload;
    default:
      return state;
  };
};

export default renderApp;