const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantity:{
    type: Number,
    required: true,
    min:0
  },
  category: {
    type: String,
    required: true,
    enum: ['veg', 'nonveg','lunch','breakfast']
  },
});

module.exports = mongoose.model('Cart', CartSchema); 