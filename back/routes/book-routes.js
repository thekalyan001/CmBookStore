const express = require("express");
const router = express.Router(); //router variable has all the functionallty of the router
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);//get data from database
router.post("/", booksController.addBook);//send data to the database
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;//router exported as module