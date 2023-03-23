const express = require('express');
const router = express.Router();
const client = require('../db/connection');

// GET /blogposts
router.get('/', (req, res) => {
  client.query('SELECT * FROM blogposts;')
    .then((response) => {
      const blogposts = response.rows;
      res.json(blogposts);
    });
});

// GET /blogposts/:id
router.get('/:id', (req, res) => {
  const blogpostId = req.params.id;
  // client.query(`SELECT * FROM blogposts WHERE id = ${blogpostId};`)
  client.query('SELECT * FROM blogposts WHERE id = $1;', [blogpostId])
    .then((response) => {
      const blogpost = response.rows[0];
      res.json(blogpost);
    });
});

module.exports = router;
