import React, { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addBook = (book) => {
    axios.post("http://localhost:8081/api/books", book)
      .then(() => {
      axios.get("http://localhost:8081/api/books")
    .then(res => setBooks(res.data));
})

      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Library</h2>
      <BookForm onAddBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
