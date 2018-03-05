declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;


module.exports = {

  recomendador:(req, res) =>{

    return res.view('busquedaArxiv')
  },

  crearLinkPublication: (req, res) => {

    let parametros = req.allParams();
    let nuevoLinks = {
      links_Value: parametros.links_Value,
      link_Type: parametros.link_Type,
      o_Value: parametros.o_Value,
      o_Type: parametros.o_Type,
    };
    LinkPublication.create(nuevoLinks)
      .exec(
        (error,linkCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            // return res.ok(linkCreado);
            //return res.created('Nuevo articulo creado.');
            return res.view('busquedaArxiv')
          }
        }
      )

  },

  VerArticulos:(req,res)=>{

    Articulo.find().exec(
      (err, articulosEncontrados) => {
        if (err) return res.serverError(err)
        sails.log.info(" Articulos:  ",articulosEncontrados);
        return res.view('busquedaArxiv',{articulos:articulosEncontrados})
      });

  },





  TraerParametros:(req,res)=>{
    let parametros = req.allParams();
    if(parametros.id){
      Articulo.findOne({
        id:parametros.id
      })
        .exec((err,articuloEncontrado)=>{
          if(err) return res.serverError(err);
          if(articuloEncontrado){
            //Si encontro
            let id=articuloEncontrado.id;
            let title=articuloEncontrado.title;
            let authors=articuloEncontrado.authores;
            let abstract=articuloEncontrado.abstract;
            let keywords=articuloEncontrado.keywords;
            let category=articuloEncontrado.category;
            sails.log.info("id:",id);
            sails.log.info("Titulo:",title);
            sails.log.info("Autor/es:",authors);
            sails.log.info("Abstract:",abstract);
            sails.log.info("Palabras clave:",keywords);
            sails.log.info("Categoria:",category);
            // sails.log.info("Articulo:",articuloEncontrado);
            return res.view('recommender',{
              /*authors:articuloEncontrado,
              abstract:articuloEncontrado,
              keywords:articuloEncontrado,
              category:articuloEncontrado*/
              Articulo:articuloEncontrado
            })
          }else{
            //No encontro
            return res.redirect('/')
          }
        })
    }else{
      return res.redirect('/')
    }

  }




}