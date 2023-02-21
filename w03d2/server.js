const express = require('express');
const app = express();
const PORT = 8889;

//
// CONFIG
//
app.set('view engine', 'ejs');

//
// DATABASE
//
const exercises = {
  'situps': {
    name: 'situps',
    reps: 10
  },
  'pushups': {
    name: 'pushups',
    reps: 100
  },
  'deadlift': {
    name: 'deadlift',
    reps: 100
  },
  'jazzercise': {
    name: 'jazzercise',
    reps: 100
  },
};

//
// MIDDLEWARE
//
// app.use((req, res, next)=>{
//   console.log('i am middleware');
//   next();
// });

app.use(express.urlencoded({extended: true})); // Parses FORM Data


//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {
  // 1. gather the custom data required for this route

  const exerciseNames = [];
  for (exercise in exercises){
    exerciseNames.push(exercise);
  }
  console.log('exerciseNames', exerciseNames);

  const templateVars = {
    'listOfExercises': exerciseNames
  };

  // 2. send this custom data into a template for the HTML
  res.render('homepage', templateVars);
});

//
// READ
//
app.get('/read/:name', (req, res) => {

  // console.log('req.params', req.params);
  const nameOfExercise = req.params.name;
  const exercise = exercises[nameOfExercise];
  // const templateVars = {
  //   exercise: exercise
  // };

  res.render('read', { exercise });
});

//
// EDIT
//
app.get('/edit/:name', (req, res) => {
  const key = req.params.name;

  const templateVars = {
    name: exercises[key].name,
    reps: exercises[key].reps
  };
  res.render('edit', templateVars);
});

app.post('/edit', (req, res) => {
  const slug = req.params.slug;
  console.log('req.body', req.body);
  const name = req.body.name;
  const reps = req.body.reps;

  exercises[name].reps = reps; // UPDATES THE DATABASE
  res.redirect('/');
});

//
// ADD
//
app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  console.log('POST /add executed');
  console.log('req.body', req.body);

  // add the new exercise to our Database
  exercises[req.body.name] = {
    name: req.body.name,
    reps: req.body.reps
  };

  res.redirect('/');
});

//
// DELETE
//
app.get('/delete/:name', (req, res) => {
  const name = req.params.name;
  delete exercises[name];
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`The server is listening on port=${PORT}`);
});
