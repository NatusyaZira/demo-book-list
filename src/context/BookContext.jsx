import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchBooks, updateBook } from '../services/bookService';

// Creating the context
const BookContext = createContext();

// Custom hook to use the BookContext
export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};

// BookProvider component
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetching books from API (or database) and setting them in state
  const loadBooks = async () => {
    try {
      setLoading(true);
      const data = await fetchBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const updateBookInContext = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  // Returning the provider with context values
  return (
    <BookContext.Provider value={{ books: books || [], loading, reloadBooks: loadBooks, updateBookInContext }}>
      {children}
    </BookContext.Provider>
  );
};
