declare var module;
declare var sails;
declare var Articulo;
declare var Wkx_category;
declare var Wkx_collection;
declare var Wkx_creator;
declare var Wkx_keyword;
declare var Wkx_publisher;

// /Saludo/crearUsuarioQuemado

module.exports = {

  crearArticuloQuemado: (req, res) => {

    let parametros = req.allParams();

    let nuevaCategoria = {

      categoryCategory:parametros.category
    };
    let nuevoCollection = {

      collectionTitle:parametros.journal,
      collectionType:parametros.typejournal
    };

    let nuevoAuthor = {

      creatorFirstname:parametros.nombreAuthores,
      creatorSurname:parametros.apellidoAuthores,
      creatorInitials:"NULL",
      creatorPrefix:"NULL",
      creatorSameAs:0
    };
    let nuevoKeyword = {
      keywordKeyword:parametros.keywords,
    };
    let nuevoPublisher = {
      publisherLocation:parametros.country,
      publisherName:parametros.editorial,
      publisherType: ""
    };

    let nuevoResourse = {
      resourceType: "journal_article",
      resourceTitle:parametros.title,
      resourceSubtitle: "NULL",
      resourceShortTitle:"NULL",
      resourceTransTitle:"NULL",
      resourceTransSubtitle:"NULL",
      resourceTransShortTitle:"NULL",
      resourceTitleSort:"NULL",
      resourceField1:"NULL",
      resourceField2:"NULL",
      resourceField3:"NULL",
      resourceField4:"NULL",
      resourceField5:"NULL",
      resourceField6:"NULL",
      resourceField7:"NULL",
      resourceField8:"NULL",
      resourceField9:"NULL",
      resourceNoSort:"NULL",
      resourceTransNoSort:"NULL",
      resourceIsbn:"NULL",
      resourceBibtexKey:"NULL",
      resourceDoi:"NULL"



    };




    Wkx_category.create(nuevaCategoria)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            return res.ok(articuloCreado);
            //return res.created('Nuevo articulo creado.');
            //  return res.view('Biblioteca')
          }
        }
      )

    Wkx_collection.create(nuevoCollection)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }
        }
      )
      Wkx_creator.create(nuevoAuthor)
        .exec(
          (error,articuloCreado)=>{
            if(error){
              return res.serverError(error);
            }
          }
        )
    Wkx_keyword.create(nuevoKeyword)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }
        }
      )
    Wkx_publisher.create(nuevoPublisher)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }
        }
      )
  },
}/**
 * Created by CEDIA on 01/11/2017.
 */
