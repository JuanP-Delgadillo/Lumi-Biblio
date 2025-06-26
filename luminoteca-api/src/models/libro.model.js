const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  image: String,
  summary: String
});

module.exports = mongoose.model('Libro', libroSchema);