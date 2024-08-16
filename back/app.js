require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const BookRouter = require("./routes/book-routes");
const UserRouter = require("./routes/user-routes");
const cors = require("cors");
const app = express(); //app variable has all functionality of express


// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve('./public')));  //tell that public folder image can be server statically

app.use("/books", BookRouter) // localhost:5000/books
app.use("/user", UserRouter) // localhost:5000/user
app.get('/', (req, res)=>res.send("Hello world"))

//it returns a promise
 
 mongoose.connect(process.env.DATABASE_URL)  .then(() => console.log("Connected To Database"))
.then(() => {
  app.listen(process.env.PORT || 5000);
})
.catch((err) => console.log(err));