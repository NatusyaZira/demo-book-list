import React, { useState, useEffect } from "react";

const Filter = ({ books, filteredBooks, setFilteredBooks }) => {
  const [filter, setFilter] = useState("Show All"); // The selected filter

  useEffect(() => {
    // Filter books based on the selected filter
    if (filter === "Show Active") {
      setFilteredBooks(books.filter((book) => book.isActive));
    } else if (filter === "Show Deactivated") {
      setFilteredBooks(books.filter((book) => !book.isActive));
    } else {
      setFilteredBooks(books); // Show all books
    }
  }, [filter, books, setFilteredBooks]);

  return (<div className="d-flex align-items-center justify-content-start" >
    {/* Filter Dropdown */}
    <select
      className="form-select w-auto"
      value={filter}
      onChange={(e) => setFilter(e.target.value)} // Handle filter change
    >
      <option value="Show All">Show All</option>
      <option value="Show Active">Show Active</option>
      <option value="Show Deactivated">Show Deactivated</option>
    </select>
    {/* Display filtered and total records */}
    <p className="mb-0 ms-3">{`Showing ${filteredBooks?.length || 0} of ${books?.length || 0} records`}</p>
  </div>
  
  );
};

export default Filter;
