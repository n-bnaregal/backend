const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  productbought: {
    type:Date,
    required: true,
    min: 0
  },
  review: {
    type: String,
    required: true,
    enum: ['good','bad','excellent']
  },
  ratings:{
    type:Number,
    required:true,
    
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema); 