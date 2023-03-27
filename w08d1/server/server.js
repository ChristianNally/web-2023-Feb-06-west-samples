const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 8001;

const todos = {
  abc: {
    id: 'abc',
    task: 'walk the dog',
    complete: false
  },
  def: {
    id: 'def',
    task: 'do the dishes',
    complete: true
  }
};

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // populates req.body
app.use(express.json());
// app.use(cors());
app.use(express.static('../client/build'));

// endpoints
// BROWSE
app.get('/todos', (req, res) => {
  const arr = Object.values(todos);
  res.json(arr);
});

// READ
app.get('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const todo = todos[todoId];
  res.json(todo);
});

// EDIT
app.post('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const newTask = req.body.newTask;
  
  todos[todoId].task = newTask;
  console.log(todos);

  res.send('updated successfully');
});

// ADD
app.post('/todos', (req, res) => {
  const task = req.body.task;
  const id = Math.random().toString(36).substring(2, 5);

  const todo = {
    id,
    task,
    complete: false
  };

  todos[id] = todo;
  console.log(todos);

  res.json(todo);
});

// DELETE
app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;

  delete todos[todoId];

  res.send('todo deleted successfully');
});

// start the server up
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
