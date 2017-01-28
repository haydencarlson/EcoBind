import {TYPE_POST_FILE_DATABASE} from '../types.js';

const postFileToDatabase = (doc) => {
	console.log("document", doc);
  return {
    type: `socket/${TYPE_POST_FILE_DATABASE}`,
    payload: doc
  }
}

export default postFileToDatabase;