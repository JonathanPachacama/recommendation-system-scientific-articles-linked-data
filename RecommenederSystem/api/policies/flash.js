/**
 * Created by CEDIA on 07/09/2017.
 */
module.exports = function(req, res, next) {
  res.flash = {};

 if(req.flash) return next();

res.flash = _.clone(req.flash);

  //clear flash
req.flash={};
  next();
}

