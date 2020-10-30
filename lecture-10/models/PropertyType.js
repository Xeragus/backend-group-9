
const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  code: 'string',
  name: 'string'
})

module.exports = mongoose.model('PropertyType', schema)