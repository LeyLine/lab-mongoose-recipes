const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: [],
  cousine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now()
  },
});

const Recipe = mongoose.model('two', recipeSchema);

// Recipe.create({
//   title: 'turk',
//   level: 'Easy Peasy',
//   ingredients: ['Spagetti', 'water', 'tomato sauce', 'oil'],
//   cousine: 'Italian',
//   dishType: 'Dish',
//   duration: 60,
//   creator: 'Adrian'

// }, function (err, user) {
//   if (err) console.log('An error happened:', err);
//   else console.log('The user is saved and its value is: ', user);
// });

// Recipe.insertMany(data)
//   .then((recipe) => {
//     console.log('The recipe is ', recipe);
//   })
//   .catch((err) => {
//     console.log('An error has wrecked you: ', err);
//   });


Recipe.updateOne({
    title: "Rigatoni alla Genovese"
  }, {
    duration: 600
  })
  .then((user) => {
    console.log('Updated that rigga');
  })
  .catch((err) => {
    console.log('An error happened:');
  });

Recipe.deleteOne({
    title: "Rigatoni alla Genovese"
  })
  .then((user) => {
    console.log('deleted that carrot');
  })
  .catch((err) => {
    console.log('An error happened:');
  });

// setTimeout(() => {
//   mongoose.disconnect();
// }, 1500);