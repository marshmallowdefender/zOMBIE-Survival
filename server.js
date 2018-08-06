
const path = require('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const bobRoutes = require('./routes/bobRouter');

// INITIALIZE EXPRESS
const app = require('express')();

//set up static assets (things that will be delivered as files, the server will deliver when asked for it)
app.use(express.static('public'));
//anything coming out of public will be served just as files
//set up the root of the server from public, if you're in the folder public
// it will serve insiden public as if it was the root / as an absolute path.



// PORT
const PORT = process.env.PORT || 3000;


// LOGGER
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// i expect by default that you have an ejs file in a views folder and i will go in and render it
app.set('view engine', 'ejs');

// ROUTES
// From Model bob.js
// I get an error here stating the following:TypeError: Router.use() requires a middleware function but got a Object
app.use('/bob', bobRoutes);

/*
//GET request handler for home page
app.get('/', (req, res) => {
    res.send('hello world');
});
*/

app.get('/', (req, res) => {
  res.render('bob/home', {
    message: 'Hello world!',
    documentTitle: 'This is my zombie app!!',
    subTitle: 'Read some of the coolest zombies around.',
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

module.exports = { app };
