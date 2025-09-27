const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  mobilenumber: {
    type: Number,
    required: true,
    min: 0
  },
  password:{
    type: Number,
    required: true,
    min:0
  },
  email: {
    type: String,
    required: true,
    
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
});

module.exports = mongoose.model('Login', LoginSchema); 