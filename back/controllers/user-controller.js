const User = require("../model/User");

const signUpController = async (req, res) => {
    const { username, password } = req.body;
    const profilePhoto = req.file ? req.file.path : 'public/defaultPhoto.jpg';
  
    if (!username || !password) {
      return res.status(400).json({ msg: "All fields are mandatory" });
    }
  
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({ msg: "Please choose another username" });
      }
  
      // Create a new user
      const user = await User.create({
        username,
        password,
        profilePhoto,
      });
  
       res.status(201).json({ msg: "User created successfully", user });
    } catch (err) {
       console.error("Error creating user ❌: ", err);
      return res.status(500).json({ msg: "Error while signing up" });
    }
  }
    
    
  const loginController = async (req, res) => {
    const { username, password } = req.body;
  
      if (!username || !password) {
         return res.status(400).json({ msg: "All fields are mandatory" });
    }
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
        if (!user) {
             return res.status(401).json({ msg: "Invalid username or password" });
        }
  
      // Compare the provided password with the hashed password
      const isMatch = await user.comparePassword(password);
        if (!isMatch) {
             return res.status(401).json({ msg: "Invalid username or password" });
      }
  
      // Successful login
        console.log("User:", user);
       res.status(200).json({ msg: "Login successful", user });
    } catch (err) {
      console.error("Error logging in ❌: ", err);
      return res.status(500).json({ msg: "Error while logging in" });
    }
  }
  
module.exports = { signUpController, loginController };