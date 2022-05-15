import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="90px">
        <Typography sx={{ fontFamily: "roboto" }} variant="h2">
        🎡 We have responsiblity to manage your books 🎡
        </Typography>
        <Typography sx={{ fontFamily: "fantasy"}} variant="h3"  marginTop="30px">
          ~Made by Kalyan Mishra 😎
        </Typography>
      </Box>
    </div>
  );
};

export default About;
