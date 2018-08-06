const express = require('express');

//Link the controller to route
const bobController = require('../controllers/bobController');
const viewController = require('../controllers/viewController.js');

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
bobRouter.get("/",bobController.index, viewController.showAll, viewController.show404);

//Get One
bobRouter.get('/:id', bobController.getOne,viewController.showOne, viewController.show404);

//Delete
bobRouter.delete('/:id',bobController.destroy, viewController.handleDestroy);


//Create
bobRouter.post('/',bobController.create, viewController.handleCreate);

//get new
bobRouter.get('/new', bobController.makeBlankBob,viewController.showNew);

//Update

bobRouter.use(handle404);

module.exports = bobRouter;