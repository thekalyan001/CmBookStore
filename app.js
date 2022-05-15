const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express(); //app variable has all functionality of express


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router) // localhost:5000/books
app.get('/', (req, res)=>res.send("Hello world"))

//it returns a promise
mongoose.connect("mongodb+srv://admin:beO8rYWyXjPLH4A9@cluster0.aadt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)  .then(() => console.log("Connected To Database"))
.then(() => {
  app.listen(process.env.PORT || 5000);
})
.catch((err) => console.log(err));