const express = require('express');

//Link the controller to route
const bobController = require('../controllers/bobController');

// TODO: [2] invoke the Router()
const bobRouter = express.Router();


const showJSON = (req,res) => {
    res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(404);
  };

//Get all
bobRouter.get("/",bobController.index, showJSON);

//Get One
bobRouter.get('/:id', bobController.getOne,showJSON);

//Delete
bobRouter.delete(bobController.destroy, (req,res) => {
    res.sendStatus(200);
});

//Update


//Create

bobRouter.use(handle404);

module.exports = bobRouter;