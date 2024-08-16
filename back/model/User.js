const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: 'public/default.png',
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true } // Fix: 'timestamp' should be 'timestamps'
);

// Pre-save hook to hash the password
UserSchema.pre('save', async function (next) { // next is the mongoose middleware function
  if (!this.isModified('password')) { // Corrected 'isModefied' to 'isModified'
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.salt = salt; // Store the salt if needed
  this.password = hashedPassword; // Set the hashed password
  next();
});

// Method to compare the password for login
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare the provided password with the hashed password
}

const User = mongoose.model('User', UserSchema);

module.exports = User;