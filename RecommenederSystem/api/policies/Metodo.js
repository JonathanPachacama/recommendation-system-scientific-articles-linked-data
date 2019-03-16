/**
 * Created by CEDIA on 03/07/2017.
 */
module.exports = function(req, res, next) {
  if(req.method=="POST"){
    return next() //Tienes permiso
  }else{
    return res.send("Error")
  }

};
