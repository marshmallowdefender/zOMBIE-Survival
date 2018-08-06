const db = require('../models/bob');

module.exports = {
  /**
     * Middleware function:
     * Get all the sodas and set them in res.locals
     * @param {req} req - Node's Request Object
     * @param {res} res - Node's Response Object
     * @param {next} next - The next middleware function in our route
     * @return {undefined}
     * Find all bobs
     */
  // find all bobs
  index(req, res, next) {
    db.findAll()
      .then((bobs) => {
        res.locals.bobs = bobs;
        next();
      })
      .catch(e => next(e));
  },
  // Get one bob by id
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((bob) => {
        res.locals.bob = bob;
        next();
      })
      .catch(next);
  },
  // Destroy
  destroy(req, res, next) {
    db.delete(req.params.id)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },
  // Create a bob
  create(req, res, next) {
    db.create(req.body)
      .then((bob) => {
        res.locals.bob = bob;
        next();
      })
      .catch(err => next(err));
  },
  // Update a bob
  update(req, res, next) {
    const { id } = req.params;
    const bobBody = req.body;
    db.update(id, bobBody)
      .then((bob) => {
        res.locals.bob = bob;
        next();
      })
      .catch(err => next(err));
  },

  // Make a blank bob
  makeBlankBob(req, res, next) {
    const bob = {
      creator: '',
      name: '',
      drink: '',
      description: '',
    };

    res.locals.bob = bob;
    next();
  },


};
