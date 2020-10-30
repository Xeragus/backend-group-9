const PropertyType = require('../models/PropertyType')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://bobz:87-pr-12@clusternanovoinficirani.ngbhd.mongodb.net/i_property?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

PropertyType.insertMany([
  (new PropertyType({ code: 'house', name: 'House' })), 
  (new PropertyType({ code: 'apartment', name: 'Apartment' })),
  (new PropertyType({ code: 'factory', name: 'Factory' })),
  (new PropertyType({ code: 'field', name: 'Field' })),
  (new PropertyType({ code: 'plot', name: 'Plot' }))
])


