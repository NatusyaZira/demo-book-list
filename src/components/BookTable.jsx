// BookTable.jsx
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";

const BookTable = ({ books, onDelete, onToggleActive }) => {
  return (
    <div className="table-responsive table-container mb-3">
      <table className="table align-middle">
        <thead className="sticky-top table-light">
          <tr>
            <th>Book title</th>
            <th>Author name</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Created At</th>
            <th>Modified/Edited At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td className="w-15 text-wrap">{book.title}</td>
                <td className="w-15 text-wrap">{book.author}</td>
                <td className="w-10 text-wrap">{book.category}</td>
                <td>{book.isbn}</td>
                <td>{formatDate(book.createdAt)}</td>
                <td>{formatDate(book.modifiedAt)}</td>
                <td>
                  <Link to={`/book/${book.id}`}>
                    <button className="btn btn-secondary me-2">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => onDelete(book.id)}
                    disabled={book.isActive}
                  >
                    Delete
                  </button>
                  <button
                    className={`btn ${book.isActive ? "btn-warning" : "btn-success"}`}
                    onClick={() => onToggleActive(book)}
                  >
                    {book.isActive ? "Deactivate" : "Re-Activate"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
