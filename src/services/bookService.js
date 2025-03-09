const API_URL = "http://localhost:5001/books";

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// Fetch a single book by ID
export const fetchBookById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
};

// Add a new book
export const addBook = async (bookData) => {
    try {
      const createdAt = new Date().toISOString();
      const modifiedAt = null; // Initially no modified date
  
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...bookData, createdAt, modifiedAt }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add book");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error adding book:", error);
      return null;
    }
  };
  

// Update an existing book
export const updateBook = async (id, updatedData) => {
    try {
      const modifiedAt = new Date().toISOString(); // Generate the current timestamp for "Modified At"
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedData, modifiedAt }), // Update the modified date
      });
  
      if (!response.ok) {
        throw new Error("Failed to update the book");
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating book:", error);
      return null;
    }
  };

// Delete a book (only if it's deactivated)
export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
};
