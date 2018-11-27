/**
 * Created by USRDEL on 1/7/17.
 */
declare var module;
declare var sails;
declare var Articulo;
declare var MiArticulo;
module.exports = {

  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },

 biblioteca:(req,res)=>{
   let parametros = req.allParams();



   if(!parametros.biblioteca){
     parametros.biblioteca ='';
   }
  Articulo
      .find()
      .where({
        title:{
          contains:parametros.biblioteca
        }
      })
      .exec((err,articulos)=>{
        if(err) return res.negotiate(err);


        return res.view('biblioteca',{
          articulos:articulos
        })
      })
  },
  crearArticulo:(req,res)=>{
    return res.view('busqueda')
  },
  crearMisArticulos:(req,res)=>{
    return res.view('homepage')
  },


};
