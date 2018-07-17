const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


const Recipe = new Schema({
  title: String,
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef' - 'UltraPro Chef']
  },
  ingredients: []


});