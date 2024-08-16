import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const FormSection = styled(Paper)({
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log('data is: ', data); 
      const response = await axios.post('https://cmbookstore-vv95.onrender.com/user/signup', data);
      console.log("response is: ", response);

      toast.success('Signup successful!');
      navigate('/login');  
    } catch (error) {
      console.error("Error during signup: ", error);
      toast.error(error.response.data.msg); 
    }
  };

  return (
    <Grid container style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12} md={4}>
        <FormSection elevation={3}>
          <Typography variant="h4" gutterBottom>
            Sign Up
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
            <input
              type="file"
              accept="image/*"
              {...register('photo')}
              style={{ margin: '16px 0' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" align="center" style={{ marginTop: '8px' }}>
              Already have an account?{' '}
              <Button onClick={() => navigate("/login")}>
                Sign In
              </Button>
            </Typography>
          </form>
        </FormSection>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
