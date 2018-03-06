/**
 * Created by CEDIA on 24/07/2017.
 *
 */
declare var module;
declare var sails;
declare var Articulo;

// /Saludo/crearMiArticulo

module.exports = {
  crearArticuloQuemado: (req, res) => {

    let parametros = req.allParams();

    let nuevoArticulo = {


      country: parametros.country,
      number: parametros.number,
      title: parametros.title,
      volume: parametros.volume,
      year: parametros. year,
      journal: parametros. journal,
      editorial: parametros. editorial,
      abstract: parametros.abstract,
      issns:parametros.issns,
      language:parametros.language,
      keywords:parametros.keywords,
      link:parametros.link,
      authores:parametros.authores,
      category:parametros.category,
      pages: parametros. pages,
      notas:parametros.notas


    };




    Articulo.create(nuevoArticulo)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            //return res.ok(articuloCreado);
            //return res.created('Nuevo articulo creado.');
            return res.view('busquedaArxiv')
          }
        }
      )
  },
  Busqueda:(req,res)=>{

    Articulo.find().exec((err,articulos)=>{
      if(err) return res.negotiate(err);
      sails.log.info("Articulo",articulos);

      return res.view('bilioteca',{
        articulos:articulos
      })
    })
  },
  biblioteca:(req,res)=>{

    Articulo.find().exec((err,articulos)=>{
      if(err) return res.negotiate(err);
      sails.log.info("articulo",articulos);

      return res.view('busqueda',{
        articulos:articulos
      })
    })
  },
  crearUsuario:(req,res)=>{
    return res.view('busqueda')
  },

  VerArticuloSpringer:(req,res)=>{
    if(Articulo.authores==''){
      return res.view('busqueda');
    }else{
      //return res.ok(articuloCreado);
      return res.created('Nuevo articulo creado.');
    }
  }
}
