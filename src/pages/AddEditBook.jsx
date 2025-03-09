// AddEditBook.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBooks } from '../context/BookContext';
import { updateBook, addBook, fetchBookById } from '../services/bookService';
import BookForm from '../components/BookForm';
import SuccessMessage from '../components/SuccessMessage';

const AddEditBook = () => {
  const { bookId } = useParams();
  const { books, updateBookInContext } = useBooks();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    isbn: ''
  });

  const [isEditing, setIsEditing] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const foundBook = books.find((b) => b.id === bookId);

    if (foundBook) {
      setBook(foundBook);
      setIsEditing(true);
    } else {
      setBook({ title: '', author: '', category: '', isbn: '' });
      setIsEditing(false);

      if (bookId) {
        fetchBookById(bookId)
          .then((fetchedBook) => {
            if (fetchedBook) {
              setBook(fetchedBook);
              setIsEditing(true);
            }
          })
          .catch((error) => console.error('Error fetching book:', error));
      }
    }
  }, [bookId, books]);

  const handleSubmit = async () => {
    try {
      const { id, ...bookData } = book;
      let newBook;

      if (isEditing) {
        newBook = await updateBook(id, { ...bookData, modifiedAt: new Date().toISOString() });
      } else {
        newBook = await addBook(bookData);
      }

      if (newBook) {
        updateBookInContext(newBook);
        setSuccessMessage(isEditing ? 'Book updated successfully!' : 'Book added successfully');

        setTimeout(() => setSuccessMessage(''), 5000);

        navigate('/');
      }
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <section className="form-container" style={{ height: '100vh' }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <SuccessMessage message={successMessage} />
          <BookForm
            book={book}
            onSubmit={(action, data) => {
              if (action === 'setBook') {
                setBook(data);
              } else if (action === 'handleSubmit') {
                handleSubmit();
              }
            }}
            isEditing={isEditing}
          />
        </div>
      </div>
    </section>
  );
};

export default AddEditBook;
