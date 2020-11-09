const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  address: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  property_type: {
    type: mongoose.Types.ObjectId,
    ref: 'PropertyType'
  },
  area: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Property', schema)
