import React from 'react';

const AddNewBook = () => (
  <section className="add-new-book-section">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="name" placeholder="Book title" />
      <select name="categories">
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
        <option value="adventure">Adventure</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default AddNewBook;
