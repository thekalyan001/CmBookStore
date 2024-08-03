import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#274472" }} position="sticky">
        <Toolbar> 
          <NavLink to="/" style={{ color: "white", textDecoration: 'none' }}>
            <Typography>
              <h3>CmBookStore</h3>
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }} //inline css shortcut sx, ml-margin left
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
