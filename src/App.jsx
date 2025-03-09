import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {BookProvider} from "./context/BookContext.jsx";
import RootLayout from "./pages/Root.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddEditBook from "./pages/AddEditBook.jsx";
import Error from "./pages/Error.jsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {path: "/",
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [{index: true, element: <Dashboard/>},
      {path: "/book", element: <AddEditBook/>},
      {path: "/book/:bookId", element: <AddEditBook/>}]
  }
])

function App() {
  return (
    <>
    <BookProvider>
<RouterProvider router={router}/>
</BookProvider>
    </>
  )
}

export default App
