import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id,name, author, description, price, image } = props.book; //destructure props

  //delete te book, send delete api request using axios
  const deleteHandler = async () => { ///single async task
    await axios //wait till it delete
      .delete(`http://localhost:5000/books/${_id}`) //http://localhost:5000/
      .then((res) => res.data)
      .then(() => history("/")) //refresh the whole component
      .then(() => history("/books")); //after delete navigate to books
  }; 

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By: {author}</article>
      <h3>{name}</h3>
      <p>👻{description}</p>
      <h3>Rs. ${price}</h3>


      <div className="portfolio__item-cta">
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ marginTop: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div>


    </div>
  );
};

export default Book;
