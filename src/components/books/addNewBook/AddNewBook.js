import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../../../redux/books/books';
import './addNewBook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    id: uuidv4(),
    name: '',
    author: '',
  });
  const handleChange = (name) => (e) => {
    setBookInfo({ ...bookInfo, [name]: e.target.value });
  };
  const onClick = () => {
    setBookInfo({ ...bookInfo, item_id: uuidv4() });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(bookInfo));
    setBookInfo({ ...bookInfo, title: '', category: '' });
  };

  return (
    <section className="add-new-book-section">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={handleChange('name')} type="text" name="name" placeholder="Book title" value={bookInfo.name} />
        <input onChange={handleChange('author')} type="text" name="author" placeholder="Author name" value={bookInfo.author} />
        <button onClick={onClick} type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
