const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product: { type: String, required: true },     // Product name
  cost: { type: Number, required: true }  ,      // Price
  description: {type: String},                   // Description
  quantity: {type: Number, required: true }      // Quantity availability
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

