module.exports = {
  // eslint-disable-next-line no-unused-vars

  // Show all
  showAll(req, res) {
    res.render('bob/showAll');
  },

  // Show one
  showOne(req, res) {
    res.render('bob/showOne');
  },
  //Destroys one
  handleDestroy(req, res) {
    res.redirect('/bob');
  },

  // Create blank form
  showBlankForm(req, res) {
    res.render('bob/showNew');
  },
  // Handle Create
  handleCreate(req, res) {
    res.redirect('/bob');
  },

  // Edit
  showEditForm(req, res) {
    res.render('bob/showEdit');
  },

  //Handle Update
  handleUpdate(req, res) {
    res.redirect(`/bob/${req.params.id}`);
  },

  show404(req, res) {
    res.send(404);
  },
};

