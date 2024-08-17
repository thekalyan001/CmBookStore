// SignupPage.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Grid, Typography , Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { changeLoginStatus } from '../../store/slices/loginSlice';
import {  toast } from 'react-toastify'; 

import './style.css';
 

const FormSection = styled(Paper)({
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const onSubmit = async (data) => {
    try {
      console.log('Login data:', data);
      const response = await axios.post('https://cm-book-store-jzjz.vercel.app/user/login', data);
      
      dispatch(changeLoginStatus({
        isLoggedin: true,
        profilePhoto: response.data.user.profilePhoto, // Store the profile photo
      }));

       
      toast.success("Login successful!");
       
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error);
      toast.warning("Wrong credentials!", error);
     }
  };

  return (
    <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <Grid item xs={12} md={4}>
        <FormSection elevation={3}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username (Email)"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('username', { required: true })}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('password', { required: true })}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
             LogIn
            </Button>
            <Typography variant="body2" align="center" style={{ marginTop: '8px' }}>
              Create an account?{' '}
              <Button onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </Typography>
          </form>
        </FormSection>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
