
module.exports = function(req, res, next) {


  if (AuthService.hacerLogin()) {
    return next();
  }
  res.redirect('/login');
  return;

};
