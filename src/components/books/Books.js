import React from 'react';
import AddNewBook from './addNewBook/AddNewBook';
import Book from './book/Book';

const Books = () => {
  const myBooks = [
    {
      id: 1,
      name: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      category: 'Mystery, Fiction',
      progress: '50',
      chapter: 'Chapter 5',
    },
    {
      id: 2,
      name: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      category: 'Romantic Novel',
      progress: '80',
      chapter: 'Chapter 8',
    },
    {
      id: 3,
      name: 'It Ends with Us',
      author: 'Colleen Hoover',
      category: ' Contemporary romance',
      progress: '59',
      chapter: 'Chapter 8',
    },
    {
      id: 4,
      name: 'To Kill a Mockingbird',
      author: 'Susan Stoker',
      category: 'Thriller',
      progress: '15',
      chapter: 'Chapter 1',
    },
    {
      id: 5,
      name: 'The Song of Achilles',
      author: 'Madeline Miller',
      category: 'Historical Fiction',
      progress: '30',
      chapter: 'Chapter 1',
    },
  ];

  return (
    <div className="books-page">
      <ul className="book-list">
        {myBooks.map((book) => (
          <li key={book.id} className="book-card">
            <Book bookInfo={book} />
          </li>
        ))}
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Books;
