
const mongoose = require('mongoose');
// Define the schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pin: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});
// Create the model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
