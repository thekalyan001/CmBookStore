import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL= "https://cmbookstore-vv95.onrender.com/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []); //[] only once
  console.log(books);

  
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
             <Book book={book} /> {/*call books component with props book from mongodb */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
