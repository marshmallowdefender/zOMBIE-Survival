const express = require('express');

//Link the controller to route
const bobController = require('../controllers/bobController');

// TODO: [2] invoke the Router()
const bobRouter = express.Router();


const showJSON = (req,res) => {
    res.json(res.locals.data);
};

//Get all
bobRouter.get(bobController.index, showJSON);

module.exports = bobRouter;