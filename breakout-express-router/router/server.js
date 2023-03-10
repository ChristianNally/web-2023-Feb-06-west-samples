require('dotenv').config(); // populates process.env

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require our routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// use our routers
// Express will remove the prefix from the route
// eg. GET /products/2 becomes GET /2
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
