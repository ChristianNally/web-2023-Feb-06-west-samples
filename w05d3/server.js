require('dotenv').config();



const express = require('express');
const pg = require('pg');
const PORT = 8979;
const app = express();

// CONFIG
app.set('view engine', 'ejs');


//
// Middleware
//
app.use(express.urlencoded({ extended: true }));

const Client = pg.Client;

const configObj = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

const db_client = new Client(configObj);

db_client.connect()
  .then(() => {
    console.log(`db connected`);
  })
  .catch((error) => {
    console.log(`db connection error:`, error);
  });

// ROUTES

//
// BROWSE VERB on Home
//
app.get('/', (req, res) => {
  db_client.query('SELECT id, question FROM objectives;')
  .then((response) => {
//    console.log('response', response);
    const templateVars = {
      objectives: response.rows
    };
    res.render('home', templateVars);
  })
  .catch((error) => {
    console.log('db error:', error);
  });
  
});

//
// ADD
// 
app.get('/objectives/new', (req, res) => {
  res.render('new');
});

app.post('/objectives/new', (req, res) => {
  console.log('req.body', req.body);

  // { question: 'How Fuzzy?', answer: 'Very', sort: '1', type: 'learning' }

  const query_string = "INSERT INTO objectives (question, answer, sort, type) VALUES ($1, $2, $3, $4);";

  db_client.query(query_string, [req.body.question, req.body.answer, req.body.sort, req.body.type])
  .then((response) => {
    console.log(`response`, response);
    res.redirect('/');
  })
  .catch((error) => {
    console.log('db error:', error);
  });
});

//
// READ VERB detail page
//
app.get('/objectives/:id', (req, res) => {
  const objective_id = req.params.id;

  db_client.query(`SELECT id, question, answer, sort, type FROM objectives WHERE id = $1;`, [objective_id])
  .then((response) => {
//    console.log('response', response);
    const templateVars = {
      question: response.rows[0].question,
      answer: response.rows[0].answer,
      type: response.rows[0].type,
      sort: response.rows[0].sort,
      id: response.rows[0].id,
    };
    res.render('objective', templateVars);
  })
  .catch((error) => {
    console.log('db error:', error);
  });
  
});

//
// DELETE
//
app.get('/objectives/:id/delete', (req, res) => {
  const objective_id = req.params.id;

  db_client.query(`DELETE FROM objectives WHERE id = $1;`, [objective_id])
  .then((response) => {
//    console.log('response', response);
    res.redirect('/');
  })
  .catch((error) => {
    console.log('db error:', error);
  });
});

app.listen(PORT, () => {
  console.log(`Server Listening on PORT=${PORT}`);
});
