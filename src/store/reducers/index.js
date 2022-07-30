import {combineReducers} from 'redux';

import books from './books';

const appReducer = combineReducers({
  books: books,
});

export default appReducer;
