const CREATE_BOOK = 'bookstore/books/create';
const REMOVE_BOOK = 'bookstore/books/remove';
const initialState = {
  books: [],
};
// ACTIONS
export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// REDUCER
const booksReducer = (state = initialState, action) => {
  let newArr = [];
  switch (action.type) {
    case CREATE_BOOK:
      newArr = [...state.books, action.payload];
      return { ...state, books: newArr };
    case REMOVE_BOOK:
      newArr = state.books.filter((book) => book.id !== action.payload);
      return { ...state, books: newArr };
    default:
      return state;
  }
};

export default booksReducer;
