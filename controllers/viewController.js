module.exports = {
    // eslint-disable-next-line no-unused-vars
    showAll(req, res) {
      res.render('bob/showAll');
    },

    showOne(req, res) {
        res.render('bob/showOne');
      },

    handleCreate(req, res) {
        const { id } = res.locals.bob;
        res.redirect(`/bob/${id}`);
      },

    handleDestroy(req, res) {
        res.redirect('/bob');
      },

    showNew(req, res) {
        res.render('bob/showNew');
      },

    show404(req, res) {
        res.send(404);
      },
    };