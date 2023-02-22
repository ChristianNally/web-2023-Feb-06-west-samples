const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json'); // JSON.parse(json)
// console.log(languages);

const app = express();
const port = 6543;

// database
const users = {
  abc: {
    username: 'alice',
    password: '1234',
    id: 'abc'
  },
  def: {
    username: 'bob',
    password: '5678',
    id: 'def'
  },
};

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // (req, res, next) => {}
app.use(cookieParser()); // populates req.cookies
app.use(express.urlencoded({ extended: false })); // populates req.body
app.use(express.json());

// route handlers
// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab username and password from req.body
  const username = req.body.username;
  const password = req.body.password;

  // what if they didn't give us a username and/or password
  if (!username || !password) {
    return res.status(400).send('please provide a username AND password');
  }

  // find the user object based on the username provided
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // set the cookie
  res.cookie('userId', foundUser.id);

  // redirect the user
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  // const newUrl = req.body.url;
  // // POST /urls/:id
  // const shortUrl = req.params.id;

  // check if the user has a cookie
  if (!userId) {
    return res.status(401).send('you must have a cookie to see this page');
  }

  // lookup the user based on their cookie
  const user = users[userId];

  // render the protected view with template vars
  const templateVars = {
    user: user,
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user's cookies (send an instruction to their browser to clear the cookies)
  res.clearCookie('userId');

  res.redirect('/login');
});



// GET /home
app.get('/home', (req, res) => {
  // console.log(req.cookies);
  // req.cookies.languagePref;
  const languagePref = req.cookies.languagePref || 'so';

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };
  // console.log(templateVars);

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languagePref = req.cookies.languagePref || 'ko';

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };
  res.render('about', templateVars);
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  const userChoice = req.params.languagePref;

  // set the cookie
  res.cookie('languagePref', userChoice); // set for next time

  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
