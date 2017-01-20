import {TYPE_GET_DOCUMENTS} from '../types.js';

const getDocuments = (state = [], action) => {
  switch(action.type) {
    case TYPE_GET_DOCUMENTS:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default getDocuments;