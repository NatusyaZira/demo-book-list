// BookForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';

const BookForm = ({ book, onSubmit, isEditing }) => {
  // State for validation errors
  const [validationErrors, setValidationErrors] = useState({
    title: false,
    author: false,
    category: false,
    isbn: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the book state
    onSubmit('setBook', { ...book, [name]: value });

    // Update validation state
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? true : false,
    }));
  };

  const validateForm = () => {
    const errors = {
      title: book.title.trim() === '',
      author: book.author.trim() === '',
      category: book.category.trim() === '',
      isbn: book.isbn.trim() === '',
    };
    setValidationErrors(errors);
    return !Object.values(errors).includes(true); // Returns false if there are errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit('handleSubmit'); // Call the parent's handleSubmit function if validation passes
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      <div className="row">
        <InputField
          name="title"
          value={book.title}
          onChange={handleInputChange}
          placeholder="Book title"
          validationError={validationErrors.title}
        />
        <InputField
          name="author"
          value={book.author}
          onChange={handleInputChange}
          placeholder="Author name"
          validationError={validationErrors.author}
        />
        <InputField
          name="category"
          value={book.category}
          onChange={handleInputChange}
          placeholder="Category"
          validationError={validationErrors.category}
        />
        <InputField
          name="isbn"
          value={book.isbn}
          onChange={handleInputChange}
          placeholder="ISBN"
          validationError={validationErrors.isbn}
        />
      </div>
      <div className="d-flex justify-content-end mt-4 gap-4">
        <Link to="/"><button type="button" className="btn btn-outline-primary">Back to Dashboard
        </button></Link>
          
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Book' : 'Add Book'}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
