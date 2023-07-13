// combinar reducers para caso tiver mais de um
import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
