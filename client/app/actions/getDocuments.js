import {TYPE_GET_DOCUMENTS} from '../types.js';

const getDocuments = (documents) => {
  return {
    type: `socket/${TYPE_GET_DOCUMENTS}`,
    payload: documents
  }
}

export default getDocuments;