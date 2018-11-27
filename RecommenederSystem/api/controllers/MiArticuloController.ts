/**
 * Created by CEDIA on 25/09/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
declare var Articulo;
declare var MiArticulo;

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

    if(parametros.title&&
      parametros.country&&
      parametros.number&&
      parametros.volume&&
      parametros.year&&
      parametros.journal&&
      parametros.editorial&&
      parametros.abstract&&
      parametros.issns&&
      parametros.language&&
      parametros.keywords&&
      parametros.link&&
      parametros.authors&&
      parametros.category&&
      parametros.pages&&
      parametros.notas&&
      parametros.id){

      MiArticulo.update({
        id:parametros.id
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
        language:parametros.language,
        keywords:parametros.keywords,
        link:parametros.link,
        authors:parametros.authors,
        pages:parametros.pages,
        notas:parametros.notas
      })
        .exec((err,Editado)=>{
          if(err) return res.serverError(err);
          if(Editado){
            //Si encontro
            return res.redirect("/")
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }

  }
};
