const express = require('express');

// Link the controller to route
const bobController = require('../controllers/bobController');
const viewController = require('../controllers/viewController.js');

// TODO: [2] invoke the Router()
const bobRouter = express.Router();


const handle404 = (err, req, res, next) => {
  // console.error(err);
  res.sendStatus(404);
};

// Edit
bobRouter.get('/:id/edit', bobController.getOne, viewController.showEditForm);

bobRouter.get('/new', viewController.showBlankForm);

// Get One
bobRouter.get('/:id', bobController.getOne, viewController.showOne, viewController.show404);

// Delete
bobRouter.delete('/:id', bobController.destroy, viewController.handleDestroy);

// Update
bobRouter.put('/:id', bobController.update, viewController.handleUpdate);

// Create
bobRouter.post('/', bobController.create, viewController.handleCreate);

// Get all
bobRouter.get('/', bobController.index, viewController.showAll, viewController.show404);

bobRouter.use(handle404);

module.exports = bobRouter;
