import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "https://cmbookstore-vv95.onrender.com/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  useEffect(() => {
    fetchHandler()
      .then((data) => {
        setBooks(data.books);
      })
      .finally(() => {
        setLoading(false); // Step 2: Set loading to false once data is fetched
      });
  }, []);

  console.log(books);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div> {/* Spinner */}
          <h2 className="loading-message">Hang on tight while we're loading books</h2> {/* Loading message */}
        </div>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
