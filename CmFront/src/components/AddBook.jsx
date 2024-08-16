import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {  toast } from 'react-toastify';

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedin);


  //on input change send the latest snapshot of the input fields
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  //sending the data as obj received input fields to the database, mongoDB
  //it's an asynchronous task to using await
  const sendRequest = async () => {
    await axios 
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    if (!isLoggedIn) {
      toast.warning("Login to submit!");
      return;
    }
    e.preventDefault();
    console.log(inputs, checked);
     //after send request move user to book page
     
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}
        sx={{
          background: "linear-gradient(45deg, #ADD8E6, #FFB6C1)", // Add a gradient background, // Set a background color
          boxShadow: 3, // Add a shadow
          borderRadius:2, // Optional: Add rounded corners
          padding: 2, // Optional: Add padding
        }}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          placeholder="Book name.."
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name" />
          
        <FormLabel>Author</FormLabel>
        <TextField
          placeholder="Author name.."
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"/>

        <FormLabel>Description</FormLabel>
        <TextField
          placeholder="Book description.."
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"/>

        <FormLabel>Price</FormLabel>
        <TextField
          placeholder="Book price.."
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          placeholder="Paste image link.."
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Submit My Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
