const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true }
});

module.exports = mongoose.model('Item', itemSchema);
