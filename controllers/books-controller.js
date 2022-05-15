//this file contains controlling function like getBooks, getAllBooks, delete books, updateBooks
const Book = require("../model/Book");

//we need await & async behaviour bcoz it's promice based bahaviour
const getAllBooks = async (req, res, next) => {
    let books;
    try{
        books= await Book.find(); //return all of the books
    }catch(err){
        console.log(err);
    }

    //if book is falsy
    if (!books) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ books });
  };

  const addBook = async (req, res, next) => {
    //destructure
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
         //new instance of Book
         book = new Book({
          name,
          author,
          description,
          price,
          available,
          image,
        });
      //save in the database (mongoose)
      await book.save();//save data in the database
    } catch (err) {
      console.log(err);
    }
   //some validation
   if (!book) { //if book is falsy value
    return res.status(500).json({ message: "Unable To Add" });
  }
     //201 is success created
     return res.status(201).json({ book });
    };

  //get book by id
  const getById = async (req, res, next) => {
    const id = req.params.id; //params object use to get id
    let book;
    try {
      book = await Book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
  };

  const updateBook = async (req, res, next) => {
    const id = req.params.id; //get the id
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id, {  //if id found then update
        name,
        author,
        description,
        price,
        available,
        image,
      });
      book = await book.save(); //hold and save the updated values
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  };
  
  const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndRemove(id); //id found then remove, mongo function
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  exports.getAllBooks = getAllBooks;
  exports.addBook = addBook;
  exports.getById = getById;
  exports.updateBook = updateBook;
  exports.deleteBook = deleteBook;