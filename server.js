
const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');


const bobRoutes = require('./routes/bobRouter');

//INITIALIZE EXPRESS
const app = require('express')();

//PORT 
const PORT = process.env.PORT || 3000;


//LOGGER
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//ROUTES
//From Model bob.js
//I get an error here stating the following:TypeError: Router.use() requires a middleware function but got a Object
app.use('/bob', bobRoutes); 


//GET request handler for home page
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

module.exports = { app };

