import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import './style.css';
  
const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#f0f4f8",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          fontSize: "2.5rem",
          color: "#3f51b5",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        🎡 Your books, our priority.. 🎡
      </Typography>
      <Typography
        sx={{
          fontFamily: "roboto",
          fontSize: "1.5rem",
          marginTop: "20px",
          color: "#555",
          textAlign: "center",
        }}
      >
        ~ Made by Kalyan Mishra  👩🏻‍💻
      </Typography>
      <Button
        LinkComponent={Link}
        to="/books"
        variant="contained"
        color="primary"
        sx={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#3f51b5",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        Learn More
      </Button>

      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#333",
          marginTop: "40px",
        }}
      >
        Our Mission
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "1rem",
          color: "#666",
          textAlign: "center",
          marginTop: "10px",
          maxWidth: "600px",
        }}
      >
        Our mission is to provide you with a seamless experience in managing your
        books. We strive to offer the best services and features to make
        book management easier and more enjoyable for you.
      </Typography>

      {/* Customer Testimonials Cards */}
      <Box
        display="flex" 
        justifyContent="space-around"
        flexWrap="wrap"
        marginTop="40px"
        maxWidth="1200px"
        width="100%"
      >
        <div className="cardAbout" style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Card 1 */}
        <Card sx={{ minWidth: 300, borderRadius: '10px', margin: "20px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
          <CardMedia
            component="img"
              height="140"
            image="https://images.unsplash.com/photo-1482555670981-4de159d8553b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxnaXJsfGVufDB8fDB8fHww"
            alt="Customer 1"
            sx={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              objectFit: "cover",
              margin: "auto",
              marginTop: "20px", // Optional: Add some margin above the image
            }}
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
              Myra Jons
            </Typography>
            <Typography sx={{ mb: 1.5, color: "#666" }}>
              "This app has revolutionized the way I manage my books. Highly recommended!"
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card sx={{ minWidth: 300, borderRadius: '10px', margin: "20px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
          alt="Customer 2"
          sx={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            margin: "auto",
            marginTop: "20px", // Optional: Add some margin above the image
          }}
        />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
              Jane Smith
            </Typography>
            <Typography sx={{ mb: 1.5, color: "#666" }}>
              "A fantastic tool for book lovers! It makes tracking my reading goals so easy."
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card sx={{ minWidth: 300, borderRadius: '10px', margin: "20px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGdpcmx8ZW58MHx8MHx8fDA%3D"
              alt="Customer 3"
              sx={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "auto",
                marginTop: "20px", // Optional: Add some margin above the image
              }}
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
              Alisa Johnson
            </Typography>
            <Typography sx={{ mb: 1.5, color: "#666" }}>
              "I love the community reviews feature. It helps me choose my next read!"
            </Typography>
          </CardContent>
        </Card>
        </div>
      </Box>
    </Box>
  );
};

export default About;
