/**
 * Created by USRDEL on 1/7/17.
 */
declare var module;
declare var sails;
declare var Articulo;
declare var MiArticulo;
declare var User;
module.exports = {


  AnadirArticulos:(req,res)=>{
    if (req.cookies.User)
    {

      res.view('homepage')
    }else{
      return res.redirect('/login'); //Redirigirle al login

    }

  },
  busqueda:(req,res)=>{
    if (req.cookies.User)
    {
      return res.clearCookie("busqueda"),
        res.view('busqueda')
    }else{
      return res.redirect('/login'); //Redirigirle al login
    }
  },
  busquedaArxiv:(req,res)=> {
    if (req.cookies.User) {
      return res.clearCookie("busqueda"),
        res.view('busquedaArxiv')
    } else {
      return res.redirect('/login'); //Redirigirle al login
    }
  },
  busquedaSpringer:(req,res)=> {
    if (req.cookies.User) {
      return res.clearCookie("busqueda"),
        res.view('busquedaSpringer')
    } else {
      return res.redirect('/login'); //Redirigirle al login
    }
  },
  busquedaScopus:(req,res)=> {
    if (req.cookies.User) {
      return res.clearCookie("busqueda"),
        res.view('busquedaScopus')
    } else {
      return res.redirect('/login'); //Redirigirle al login
    }
  },
  busquedaMrDlib:(req,res)=> {
    if (req.cookies.User ) {
      if (req.cookies.busqueda ) {
        return res.view('busquedaRecomendador')
      }else {
        return res.redirect('/busqueda'); //Redirigirle al login
      }
    } else {
      return res.redirect('/login'); //Redirigirle al login
    }
  },

  biblioteca: function (req, res) {
    var parametros = req.allParams();
    if(parametros.idUsuario) {
      User
        .findOne()
        .where({
          user_id: parametros.idUsuario
        })
        .exec(function (err,User) {
          if (err){
            return res.negotiate(err);}
          if (User) {
            //Si encontro
            // User:User
            if(!parametros.biblioteca){
              parametros.biblioteca ='';
              parametros.idUsuario =User.user_id;
            }
            Articulo.find()
              .where({
                fkIdUser:User.user_id,
                title:{
                  contains:parametros.biblioteca
                }
              }).exec(function (err, articulos) {
              if (err) {
                return res.serverError(err);
              }
              if (!articulos) {
                return res.view('/busqueda');
              }
              return res.view('biblioteca',{
                articulos:articulos,
                User:User
              });

            });
          }
          else {
            //No encontro
            return res.view('/login');
          }
        });
    }
    else {
      return res.badRequest()
    }
  },


  crearArticulo:(req,res)=>{
    return res.view('busqueda')
  },
};
