import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/bookback.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Typography sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" }, zIndex: 1 }} variant="h3">
        Welcome To CmBookStore 📚
      </Typography>

      <Button
          LinkComponent={Link}
          to="/books"
          sx={{
            marginTop: 2,
            backgroundColor: "#007bff", // Bootstrap primary blue
            "&:hover": {
              backgroundColor: "#0056b3", // Darker blue on hover
            },
            zIndex: 1,
            padding: "10px 20px",
            fontSize: { xs: "1rem", md: "1.5rem" },
            borderRadius: "5px", // Rounded corners for a smoother look
          }}
          variant="contained"
        >
          <Typography variant="h4">Go to Store ✈</Typography>
      </Button>

      <Typography sx={{ marginTop: 4, fontSize: { xs: "1rem", md: "1.5rem" }, zIndex: 1 }}>
        Your one-stop destination for all your book needs! Explore our wide range of collections,
        find your next great read!
      </Typography>

 
    </Box>
  );
};

export default Home;
