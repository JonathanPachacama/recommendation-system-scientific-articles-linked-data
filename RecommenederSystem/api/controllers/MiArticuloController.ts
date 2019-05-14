/**
 * Created by CEDIA on 25/09/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
declare var Articulo;
declare var MiArticulo;
declare var MiFile;

// /Saludo/crearMiArticulo

module.exports = {
  homepage: (req,res) => {
    sails.models.MiArticulo.find().exec(
      (err, MiArticuloEncontrados) => {
        if (err) return res.serverError(err)
        return res.view('MisArticulos',{MiArticulo:MiArticuloEncontrados})
      }
    )

  },
  editanota:(req,res)=>{

    let parametros = req.allParams();

    if (parametros.idMiArticulo&&
      parametros.title&&
      parametros.country&&
      parametros.number&&
      parametros.volume&&
      parametros.year&&
      parametros.journal&&
      parametros.editorial&&
      parametros.abstract&&
      parametros.issns&&
      parametros.doi&&
      parametros.language&&
      parametros.keywords&&
      parametros.authors&&
      parametros.category&&
      parametros.pages&&
      parametros.notas
    ){

      MiArticulo.update({
        id:parametros.idMiArticulo
      },{
        title:parametros.title,
        country:parametros.country,
        number:parametros.number,
        volume:parametros.volume,
        year:parametros.year,
        journal:parametros.journal,
        editorial:parametros.editorial,
        abstract:parametros.abstract,
        issns:parametros.issns,
        doi:parametros.doi,
        language:parametros.language,
        keywords:parametros.keywords,
        authors:parametros.authors,
        category:parametros.category,
        pages:parametros.pages,
        notas:parametros.notas


      })
        .exec((err,Editado)=>{
          if(err) return res.serverError(err);
          if(Editado){
            //Si encontro
            return res.redirect('/VerMisArticulo?id=' + parametros.idMiArticulo)
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }

  },
  viewMiFile:(req,res)=>{
    MiFile.find().exec((err,MiFile)=>{
      if(err) return res.negotiate(err);
      sails.log.info("file",MiFile);

      return res.view('VerMisArticulos',{
        MiFile:MiFile
      })
    })
  },

  ///parece no ser necesario///
  VerMiFile:(req,res)=>{

    let parametros = req.allParams();

    if(parametros.id){
      MiArticulo.findOne({
        id:parametros.id
      })

        .exec((err,articuloEditado)=>{
          if(err) return res.serverError(err);
          if(articuloEditado){
            //Si encontro
            MiFile.findOne({fkIdMiArticulo:parametros.id}).exec(
              (error,MiFile)=>{
                if(error){
                  return res.serverError(error);
                }
                if (!MiFile) {
                  return res.view('VerMisArticulos',{
                    MiFile:articuloEditado

                  })
                }
                return res.view('VerMisArticulos',{
                  MiArticulo:articuloEditado,
                  MiFile:MiFile

                })
              }
            )

          }else{
            //No encontro
            return res.view('MisArticulos')
          }
        })
    }else{
      return res.view('MisArticulos')
    }
  },

};
