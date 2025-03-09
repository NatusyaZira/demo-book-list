// Dashboard.jsx
import { useEffect, useState } from "react";
import { useBooks } from "../context/BookContext"; 
import { Link } from "react-router-dom";
import { updateBook, deleteBook } from "../services/bookService.js";
import { formatDate } from "../utils/dateUtils"; // Import the date formatting utility
import Filter from "../components/Filter.jsx";
import BookTable from "../components/BookTable.jsx";

const Dashboard = () => {
  const { books = [], loading, reloadBooks, updateBookInContext } = useBooks();
  
  const [filteredBooks, setFilteredBooks] = useState(books); 

  useEffect(() => {
    reloadBooks(); 
  }, []);

  useEffect(() => {
    setFilteredBooks(books); 
  }, [books]);

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  const handleToggleActive = async (book) => {
    const updatedBook = { ...book, isActive: !book.isActive };
    try {
      const response = await updateBook(book.id, updatedBook);
      if (response) {
        updateBookInContext(response); 
      }
    } catch (error) {
      console.error("Failed to update book status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        reloadBooks(); 
      } catch (error) {
        console.error("Failed to delete book:", error);
      }
    }
  };

  return ( <div className="container py-2 custom-container">
    <div className="d-flex mt-5 w-100 align-items-center gap-4">
      <Link to="/book">
        <button className="btn btn-primary">Add Book</button>
      </Link>
      <Filter books={books} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks} />
    </div>

    <BookTable
      books={filteredBooks}
      formatDate ={formatDate}
      onDelete={handleDelete}
      onToggleActive={handleToggleActive}
    />
  </div>
  );
};

export default Dashboard;
