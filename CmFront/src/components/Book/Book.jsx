import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book; //destructure props
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedin);

  //delete te book, send delete api request using axios
  const deleteHandler = async () => { ///single async task
    await axios //wait till it delete
      .delete(`https://cmbookstore-vv95.onrender.com/books/${_id}`) //https://cmbookstore-vv95.onrender.com/
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


      {
        isLoggedIn ? (
          <div className="portfolio__item-cta">
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ marginTop: "auto" }}>
              Update
            </Button>
            <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
              Delete
            </Button>
          </div>
        ) : (
          <Button LinkComponent={Link}  to={`/login`} sx={{ marginTop: "auto", font: 'bold', textTransform: 'none' }}>
            Login to Update/Delete
          </Button>
        )
      }


    </div>
  );
};

export default Book;
