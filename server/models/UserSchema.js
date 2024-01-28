const mongoose = require('mongoose');


// Set up User model
const UserSchema = new mongoose.Schema({
    username: String,
    phone: String,
    otp: String
});
  

  
const User = mongoose.model('User', UserSchema);