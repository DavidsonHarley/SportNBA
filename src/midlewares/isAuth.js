module.exports = function isAuth(req, res, next) {
  if (req.session && !req.session.newUser) {
    return res.redirect('/');
  }
  return next();
};
