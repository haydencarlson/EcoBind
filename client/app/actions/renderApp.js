import {TYPE_RENDER_APP} from '../types.js';

const RenderApp = (bool) => {
  return {
    type: RENDER_APP,
    payload: bool
  }
}

export default RenderApp;