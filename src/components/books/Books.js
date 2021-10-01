import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './addNewBook/AddNewBook';
import Book from './book/Book';
import { fetchBooks } from '../../redux/books/books';
import './books.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  return (
    <div className="books-page">
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <Book bookInfo={book} progress={Math.floor(Math.random() * 101)} />
          </li>
        ))}
      </ul>
      <AddNewBook />
    </div>
  );
};
export default Books;
