module.exports = function(req, res, next) {

  var key = req.param('key');
  // var key = new Date().getFullYear();
  if(key=='Admin'){
    return next() //Tienes permiso
  }else{
    return res.forbidden() //Redirigirle al error 403!
  }
};
