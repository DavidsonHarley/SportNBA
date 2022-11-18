const router = require('express').Router();

router.get('/logout', (req, res) => {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('CookieUser');
        res.redirect('/');
      });
    } else {
      res.redirect('/avt');
    }
  });


  module.exports = router;