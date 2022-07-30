import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers';

let store;

export const getStore = () => store;

export const generateStore = () => {
  store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};
