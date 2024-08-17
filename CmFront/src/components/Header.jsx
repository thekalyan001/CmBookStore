import React, { useState } from "react";
import {
  Avatar,
  Button,
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon

import { useDispatch, useSelector } from 'react-redux';
import { OnLogout } from '../store/slices/loginSlice';

import './style.css';

/**
 * 
 * @note: need to work on showing profile uploaded by backend.
 */

const Header = () => {
  const [value, setValue] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.loginSlice.isLoggedin);
  const profilePhoto = useSelector((state) => state.loginSlice.profilePhoto);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(OnLogout());
  };

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#274472" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white", textDecoration: 'none' }}>
            <Typography>
              <h3>CmBookStore</h3>
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Tabs for larger screens */}
          <Tabs
            sx={{ display: { xs: 'none', md: 'flex' }, ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add book" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            {isLoggedIn ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="User Profile" src={"https://th.bing.com/th/id/OIP.aMrXppKRuvRyJoicXx3uxgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" || profilePhoto} sx={{ marginLeft: 1, transform: 'scale(0.8)' }} />
                 <Button
                  color="inherit"
                  onClick={handleLogout}
                  sx={{ textTransform: 'none', background: 'green', padding: '4px' }}
                >
                  Log Out
                </Button>
              </Box>
            ) : (
              <Button
                color="inherit"
                sx={{ textTransform: 'none', background: 'blue', fontSize: '1rem', height: '4%', mt: '2%', transform: 'scale(0.8)' }}
                LinkComponent={NavLink} to="/login"
              >
                Log In
              </Button>
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
      
      {/* Drawer for smaller screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <Box
          sx={{ width: 250, display: 'flex', flexDirection: 'column' }}
          role="presentation"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 1,
              backgroundColor: '#274472',
            }}
          >
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
          <List>
            <ListItem button component={NavLink} to="/books" onClick={handleDrawerToggle}>
              <ListItemText primary="Books" />
            </ListItem>
            <ListItem button component={NavLink} to="/add" onClick={handleDrawerToggle}>
              <ListItemText primary="Add book" />
            </ListItem>
            <ListItem button component={NavLink} to="/about" onClick={handleDrawerToggle}>
              <ListItemText primary="About Us" />
            </ListItem>
            {isLoggedIn ? (
              <ListItem button onClick={() => { handleLogout(); handleDrawerToggle(); }}>
                <Avatar alt="User Profile" src={"https://th.bing.com/th/id/OIP.aMrXppKRuvRyJoicXx3uxgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"|| profilePhoto} sx={{ marginLeft: 1, transform: 'scale(0.8)' }} />
                <ListItemText primary="Log Out" />
              </ListItem>
            ) : (
              <ListItem button component={NavLink} to="/login" onClick={handleDrawerToggle}>
                <ListItemText primary="Log In" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
