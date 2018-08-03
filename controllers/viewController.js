
module.exports = {
    // eslint-disable-next-line no-unused-vars
    showAll(req, res) {
      res.render('bob/showAll');
    },

    show404(req, res) {
      res.send(404);
    },
  };