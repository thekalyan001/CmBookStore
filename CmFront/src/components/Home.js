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
        find your next great read, and enjoy our community of book lovers!
      </Typography>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517562652858-8d863a9e0931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJvb2tzfGVufDB8fDB8fHww=rb-4.0.3&q=50&w=200"
          alt="Decorative Book"
          style={{ width: "120px", borderRadius: "10px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1481121882039-4bf1945840f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGJvb2tzfGVufDB8fDB8fHww=rb-4.0.3&q=50&w=200"
          alt="Decorative Book"
          style={{ width: "120px", borderRadius: "10px" }}
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1681681061617-183d3d3ec9c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJvb2tzfGVufDB8fDB8fHww=rb-4.0.3&q=50&w=200"
          alt="Decorative Book"
          style={{ width: "120px", borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
