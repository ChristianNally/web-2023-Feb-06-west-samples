const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 4000;

const foods = {
  abc: {
    id: 'abc',
    name: 'Big Mac',
    calories: 750
  },
  def: {
    id: 'def',
    name: 'Naan Bread',
    calories: 300
  },
  ghi: {
    id: 'ghi',
    name: 'Small Snack',
    calories: 150
  },
};

// middleware
app.use(morgan('dev'));
// express to server static files
app.use(express.static('static-files'));
// res.render('index') // index.ejs => script links to jquery
app.use(express.json()); // parse incoming JSON bodies
app.use(express.urlencoded({ extended: false })); // parse incoming urlencoded bodies

// GET /foods
app.get('/foods', (req, res) => {
  const arrOfFoods = Object.values(foods);
  res.json(arrOfFoods);
});

// POST /foods
app.post('/foods', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const calories = Number(req.body.calories);
  const randomId = Math.random().toString(36).substring(2, 5);

  const newFood = {
    id: randomId,
    name: name,
    calories: calories
  };

  foods[randomId] = newFood;
  console.log(foods);

  res.send('food created!');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
