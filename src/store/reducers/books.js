import actionTypes from '../actionTypes';

/**
 * @type {{books: null, currentBook: null}}
 * nulls in initialState instead of [] & {} because I rely on null values
 * to display loading indicators since empty array is a valid backend response
 * for when there are no books for a given search query.
 */

const initialState = {
  books: null,
  currentBook: null,
};

const chaptersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.books.SET_BOOK_LIST:
      return {...state, books: action.payload};

    case actionTypes.books.SET_CURRENT_BOOK:
      return {...state, currentBook: action.payload};

    default:
      return state;
  }
};

export default chaptersReducer;
