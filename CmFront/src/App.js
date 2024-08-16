import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";

import { Provider } from 'react-redux';
import store from '../src/store/store';

import SignupPage from "./components/User/SignupPage";
import LoginPage from "./components/User/LoginPage";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={2000} />
    {/* header will be in all the routes */}
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />

          <Route path="/signup" element={<SignupPage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
