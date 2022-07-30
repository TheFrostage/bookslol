import actionTypes from '../actionTypes';
import {Api} from '../../services';

const setBookList = books => ({
  type: actionTypes.books.SET_BOOK_LIST,
  payload: books,
});

const setCurrentBook = book => ({
  type: actionTypes.books.SET_CURRENT_BOOK,
  payload: book,
});

export const fetchBookList =
  (query = null) =>
  async dispatch => {
    const response = await Api.get(`/books${query ? '?q=' + query : ''}`);
    console.log('GET BOOKS LIST', JSON.stringify(response.data, null, 2));
    dispatch(setBookList(response.data.books));
  };

export const fetchBookById = bookId => async dispatch => {
  const response = await Api.get(`/books/${bookId}`);
  console.log('get book by id', JSON.stringify(response.data, null, 2));
  dispatch(setCurrentBook(response.data.book));
};
