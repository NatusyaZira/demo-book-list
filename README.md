# Book List React Application
This project is a simple CRUD application built with React and Vite for the front-end and JSON Server for a fake REST API.

## Prerequisites
Before running the application, make sure you have the following installed:
  Node.js (v14.x or higher)
  npm (Node package manager)
  Steps to Run the Application Locally
  ### 1. Clone the Repository
  If you haven't cloned the repository yet, use the following command:

  *git clone "https://github.com/NatusyaZira/demo-book-list.git"*
  *cd demo-book-list*
  
  ### 2. Install Dependencies
  Install the necessary dependencies for the project by running:

  *npm install*

  ### 3. Set Up the JSON Server
  The project uses a JSON Server to simulate a fake REST API. Follow these steps to set it up:
  Install JSON Server globally:

  *npm install -g json-server*
  
  Start the JSON Server:
  *json-server --watch db.json --port 5001*

  ### 4. Run the React Application
  Start the React development server:
  
  *npm run dev*
  
  The React application should now be accessible at http://localhost:5173 (default port for Vite).

  ### 5. Check the Application
  Open http://localhost:5173 in your browser. You should see the book list application running. You can:

  + View a list of books (dashboard).
  + Add a new book.
  + Edit books.
  + Delete books.
  + Deactivate books.
