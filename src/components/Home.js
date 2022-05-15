import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        
        <Typography sx={{ marginTop: 15}} variant="h3">Welcome To CmBookStore 📚</Typography>
        
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10 }}
          variant="contained"
        >
          <Typography variant="h3">Goto store ✈</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
