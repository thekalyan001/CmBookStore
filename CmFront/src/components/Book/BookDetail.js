import {Box, Button, Checkbox, FormControlLabel, FormLabel,  TextField, } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//update book details
const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  //get the id if it is changed in the use Effect 
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://cmbookstore-vv95.onrender.com/books/${id}`) //template listeral, str & var here
        .then((res) => res.data) //response to data
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);  //id change then fatch data with that id using fetch handler

  //update the valuees
  const sendRequest = async () => {
    await axios
      .put(`https://cmbookstore-vv95.onrender.com/books/${id}`, { //https://cmbookstore-vv95.onrender.com/
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };


  //when sendRequest called then open the books component
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (  //if we hava data inputs then only render form
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
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
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
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />

            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
