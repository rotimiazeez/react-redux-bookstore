import React from 'react';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../../redux/books/books';
import './book.css';

const Book = ({ bookInfo, progress }) => {
  const dispatch = useDispatch();
  const {
    item_id: id, title, category,
  } = bookInfo;
  return (
    <div className="card-wrap">
      <div className="start">
        <div className="left">
          <p className="category">Action, Sci-Fi</p>
          <h3>{title}</h3>
          <p className="author">{category}</p>
          <div className="book-options">
            <button type="button">Comments</button>
            <div className="line" />
            <button onClick={() => dispatch(removeBook(id))} type="button">Remove</button>
            <div className="line" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="right">
          <div className="progress-bar">
            <CircularProgressbar value={progress} />
          </div>
          <div className="progress-info">
            <p className="proggress-text">
              {progress}
              %
            </p>
            <p className="completed-text">Completed</p>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-name">Chapter 1</p>
        <button className="update-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
