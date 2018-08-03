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
    index(req, res,next) {
        console.log('req');
      db.findAll()
        .then((bob) => {
          res.locals.data = bob;
          next();
        })
        .catch(e => next(e));
    },

    getOne(req, res, next) {
        // TODO: make this method
        db.findById(req.params.id)
          .then((bob) => {
            res.locals.data = bob;
            next();
          })
          .catch(next);
      },
};