/**
 * Created by USRDEL on 19/6/17.
 */

declare var module;
declare var sails;
declare var Usuario;
declare var Articulo;
declare var MiArticulo;
declare var MiFile;
declare var MiArticuloId;
declare var User;
declare var Wkx_category;
declare var Wkx_collection;
declare var Wkx_creator;
declare var Wkx_keyword;
declare var Wkx_publisher;
declare var Wkx_resource_category;
declare var Wkx_resource;
declare var Wkx_resource_creator;
declare var CategoryId;
declare var collectionId;
declare var Wkx_resource_keyword;
declare var Wkx_resource_misc;
declare var Wkx_resource_page;
declare var Wkx_resource_text;
declare var Wkx_resource_year;
declare var numero_authors;
declare var CreatorSurname1;
declare var PublisherId;
declare var ResourceId;

// /Saludo/crearMiArticulo

module.exports = {

  crearMiArticulo:(req, res)=>{

    let parametros = req.allParams();

    let nuevoArticulo = {
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
      link:parametros.link,
      authors:parametros.authors,
      category:parametros.category,
      pages:parametros.starpage + "-" + parametros.endpage,
      notas:parametros.notas,
      fkIdUser:parametros.idUsuario

    };
    let nuevaCategoria = {

      categoryCategory:parametros.category
    };
    let nuevoCollection = {

      collectionTitle:parametros.journal,
      collectionType:parametros.typejournal
    };
    let nuevoAuthor = {

      creatorFirstname:parametros.nombreA,
      creatorSurname:parametros.apellido,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };
    let nuevoAuthor1 = {

      creatorFirstname:parametros.nombreA1,
      creatorSurname:parametros.apellido1,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };
    let nuevoAuthor2 = {

      creatorFirstname:parametros.nombreA2,
      creatorSurname:parametros.apellido2,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };
    let nuevoAuthor3 = {

      creatorFirstname:parametros.nombreA3,
      creatorSurname:parametros.apellido3,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };
    let nuevoAuthor4 = {

      creatorFirstname:parametros.nombreAuthores4,
      creatorSurname:parametros.apellidoAuthores4,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };

    let nuevoAuthor5 = {

      creatorFirstname:parametros.nombreAuthores5,
      creatorSurname:parametros.apellidoAuthores5,
      creatorInitials:parametros.ap,
      creatorPrefix:parametros.ap,
      creatorSameAs:0
    };
    numero_authors=parametros.numero_autores;
    sails.log.info("Parametros",numero_authors);
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
      resourceSubtitle: parametros.tit,
      resourceShortTitle:parametros.tit,
      resourceTransTitle:parametros.tit,
      resourceTransSubtitle:parametros.tit,
      resourceTransShortTitle:parametros.tit,
      resourceTitleSort:parametros.tit,
      resourceField1:parametros.volume,
      resourceField2:parametros.tit,
      resourceField3:parametros.tit,
      resourceField4:parametros.tit,
      resourceField5:parametros.tit,
      resourceField6:parametros.tit,
      resourceField7:parametros.tit,
      resourceField8:parametros.tit,
      resourceField9:parametros.tit,
      resourceNoSort:parametros.tit,
      resourceTransNoSort:parametros.tit,
      resourceIsbn:parametros.tit,
      resourceBibtexKey:parametros.apellido+parametros.year,
      resourceDoi:parametros.doi
    };

    MiArticulo.create(nuevoArticulo)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            MiArticuloId=articuloCreado.id
          }
        }
      ),

      Wkx_collection.create(nuevoCollection)
        .exec(
          (error,articuloCreado)=>{
            if(error){
              return res.serverError(error);
            }else{
              collectionId=articuloCreado.collectionId,
                Wkx_publisher.create(nuevoPublisher)
                  .exec(
                    (error,articuloCreado)=>{
                      if(error){
                        return res.serverError(error);
                      }else{
                        PublisherId=articuloCreado.publisherId,
                          Wkx_resource_misc.create({
                            resourcemiscCollection:collectionId,
                            resourcemiscPublisher: PublisherId,
                            resourcemiscAddUserIdResource:1,
                            resourcemiscAccesses:2,
                            resourcemiscAccessesPeriod:2,
                            resourcemiscMaturityIndex:0,
                            resourcemiscPeerReviewed:"N",
                            resourcemiscQuarantine:"N"
                          })
                            .exec(
                              (error,articuloCreado)=>{
                                if(error){
                                  return res.serverError(error);
                                }}

                            )
                      }

                    }
                  )
            }
          }
        ),

      Wkx_category.create(nuevaCategoria)
        .exec(
          (error,articuloCreado)=>{
            if(error){
              return res.serverError(error);
            }else{
              CategoryId=articuloCreado.categoryId
              Wkx_resource.create(nuevoResourse)
                .exec(
                  (error,articuloCreado)=>{
                    if(error){
                      return res.serverError(error);
                    }else{
                      ResourceId=articuloCreado.resourceId
                      Wkx_resource_category.create({
                        resourcecategoryResourceId:articuloCreado.resourceId,
                        resourcecategoryCategoryId:CategoryId
                      }).exec(
                        (error,articuloCreado)=>{
                          if(error){
                            return res.serverError(error);
                          }else{
                            Wkx_creator.create(nuevoAuthor)
                              .exec(
                                (error,articuloCreado)=>{
                                  if(error){
                                    return res.serverError(error);
                                  }else{

                                    Wkx_resource_creator.create({
                                      resourcecreatorResourceId:ResourceId,
                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                      resourcecreatorOrder:1,
                                      resourcecreatorRole:1,
                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                      resourcecreatorCreatorSurname:articuloCreado.creatorSurname
                                    }).exec(
                                      (error,articuloCreado)=>{
                                        if(error){
                                          return res.serverError(error);
                                        }else{
                                          CreatorSurname1=articuloCreado.creatorSurname

                                          if(numero_authors >=2){
                                            Wkx_creator.create(nuevoAuthor1)
                                              .exec(
                                                (error,articuloCreado)=>{
                                                  if(error){
                                                    return res.serverError(error);
                                                  }else{
                                                    Wkx_resource_creator.create({
                                                      resourcecreatorResourceId:ResourceId,
                                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                                      resourcecreatorOrder:1,
                                                      resourcecreatorRole:1,
                                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                                      resourcecreatorCreatorSurname:CreatorSurname1
                                                    }).exec(
                                                      (error,articuloCreado)=>{
                                                        if(error){
                                                          return res.serverError(error);
                                                        }else{
                                                          if(numero_authors >=3){
                                                            Wkx_creator.create(nuevoAuthor2)
                                                              .exec(
                                                                (error,articuloCreado)=>{
                                                                  if(error){
                                                                    return res.serverError(error);
                                                                  }else{
                                                                    Wkx_resource_creator.create({
                                                                      resourcecreatorResourceId:ResourceId,
                                                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                                                      resourcecreatorOrder:1,
                                                                      resourcecreatorRole:1,
                                                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                                                      resourcecreatorCreatorSurname:CreatorSurname1
                                                                    }).exec(
                                                                      (error,articuloCreado)=>{
                                                                        if(error){
                                                                          return res.serverError(error);
                                                                        }else{
                                                                          if(numero_authors >=4){
                                                                            Wkx_creator.create(nuevoAuthor3)
                                                                              .exec(
                                                                                (error,articuloCreado)=>{
                                                                                  if(error){
                                                                                    return res.serverError(error);
                                                                                  }else{
                                                                                    Wkx_resource_creator.create({
                                                                                      resourcecreatorResourceId:ResourceId,
                                                                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                                                                      resourcecreatorOrder:1,
                                                                                      resourcecreatorRole:1,
                                                                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                                                                      resourcecreatorCreatorSurname:CreatorSurname1
                                                                                    }).exec(
                                                                                      (error,articuloCreado)=>{
                                                                                        if(error){
                                                                                          return res.serverError(error);
                                                                                        }else{
                                                                                          if(numero_authors >=5){
                                                                                            Wkx_creator.create(nuevoAuthor4)
                                                                                              .exec(
                                                                                                (error,articuloCreado)=>{
                                                                                                  if(error){
                                                                                                    return res.serverError(error);
                                                                                                  }else{
                                                                                                    Wkx_resource_creator.create({
                                                                                                      resourcecreatorResourceId:ResourceId,
                                                                                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                                                                                      resourcecreatorOrder:1,
                                                                                                      resourcecreatorRole:1,
                                                                                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                                                                                      resourcecreatorCreatorSurname:CreatorSurname1
                                                                                                    }).exec(
                                                                                                      (error,articuloCreado)=>{
                                                                                                        if(error){
                                                                                                          return res.serverError(error);
                                                                                                        }else{
                                                                                                          if(numero_authors ==6){
                                                                                                            Wkx_creator.create(nuevoAuthor5)
                                                                                                              .exec(
                                                                                                                (error,articuloCreado)=>{
                                                                                                                  if(error){
                                                                                                                    return res.serverError(error);
                                                                                                                  }else{
                                                                                                                    Wkx_resource_creator.create({
                                                                                                                      resourcecreatorResourceId:ResourceId,
                                                                                                                      resourcecreatorCreatorId:articuloCreado.creatorId,
                                                                                                                      resourcecreatorOrder:1,
                                                                                                                      resourcecreatorRole:1,
                                                                                                                      resourcecreatorCreatorMain:articuloCreado.creatorId,
                                                                                                                      resourcecreatorCreatorSurname:CreatorSurname1
                                                                                                                    }).exec(
                                                                                                                      (error,articuloCreado)=>{
                                                                                                                        if(error){
                                                                                                                          return res.serverError(error);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    )
                                                                                                                  }
                                                                                                                }
                                                                                                              )
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    )
                                                                                                  }
                                                                                                }
                                                                                              )
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  }
                                                                                }
                                                                              )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  }
                                                                }
                                                              )
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              )
                                          }
                                          Wkx_keyword.create(nuevoKeyword)
                                            .exec(
                                              (error,articuloCreado)=>{
                                                if(error){
                                                  return res.serverError(error);
                                                }else{
                                                  Wkx_resource_keyword.create({
                                                    resourcekeywordResourceId:ResourceId,
                                                    resourcekeywordQuoteId:articuloCreado.key,
                                                    //resourcekeywordParaphraseId:articuloCreado.key,
                                                    // resourcekeywordMusingId:articuloCreado.key,
                                                    resourcekeywordKeywordId:articuloCreado.keywordId
                                                  }).exec(
                                                    (error,articuloCreado)=>{
                                                      if(error){
                                                        return res.serverError(error);
                                                      }else{
                                                        Wkx_resource_page.create({
                                                          resourcepageId:ResourceId,
                                                          resourcepagePageStart:parametros.starpage,
                                                          resourcepagePageEnd:parametros.endpage
                                                        }).exec(
                                                          (error,articuloCreado)=>{
                                                            if(error){
                                                              return res.serverError(error);
                                                            }else{
                                                              Wkx_resource_text.create({
                                                                resourcetextId:ResourceId,
                                                                resourcetextAddUserIdNote:articuloCreado.key,//estos que parecen que no son nada es para que se guarden null en la base
                                                                resourcetextEditUserIdNote:articuloCreado.key,
                                                                resourcetextAddUserIdAbstract:articuloCreado.key,
                                                                resourcetextEditUserIdAbstract:articuloCreado.key,
                                                                resourcetextNote:articuloCreado.key,
                                                                resourcetextAbstract:parametros.abstract,
                                                                resourcetextUrls:parametros.link,
                                                                resourcetextUrlText:articuloCreado.key
                                                              }).exec(
                                                                (error,articuloCreado)=>{
                                                                  if(error){
                                                                    return res.serverError(error);
                                                                  }else{
                                                                    Wkx_resource_year.create({
                                                                      resourceyearId:ResourceId,
                                                                      resourceyearYear1:parametros.year,
                                                                      resourceyearYear2:articuloCreado.y,
                                                                      resourceyearYear3:articuloCreado.y,
                                                                      resourceyearYear4:articuloCreado.y
                                                                    }).exec(
                                                                      (error,articuloCreado)=>{
                                                                        if(error){
                                                                          return res.serverError(error);
                                                                        }else{
                                                                          //MiArticuloId=articuloCreado.id
                                                                          res.redirect('/mibiblioteca');
                                                                          //return res.created('Nuevo articulo creado.');
                                                                          //  return res.view('Biblioteca')

                                                                        }
                                                                      }
                                                                    )
                                                                  }
                                                                }
                                                              )
                                                            }
                                                          }
                                                        )

                                                      }
                                                    }
                                                  )
                                                }
                                              }
                                            )
                                        }
                                      }
                                    )
                                  }
                                }
                              )
                          }

                        }
                      )

                    }
                  }
                )
            }
          }
        )
  },

  VerMisArticulos:(req,res)=>{
    req.cookies.User;
    // res.send('Cookie seteada',req.cookies.User)
    var parametros = req.allParams();
    User
      .findOne()
      .where({
        user_id: req.cookies.User
      })
      .exec(function (err,User) {
        if (err){
          return res.negotiate(err);}
        if (User) {
          //Si encontro
          // User:User
          if(!parametros.mibiblioteca){
            parametros.mibiblioteca ='';
            parametros.idUsuario =req.cookies.User;
          }
          MiArticulo.find()
            .where({
              fkIdUser:req.cookies.User,
              title:{
                contains:parametros.mibiblioteca
              }
            }).exec(function (err, Miarticulo) {
            if (err) {
              return res.serverError(err);
            }
            if (!Miarticulo) {
              return res.view('/homepage');
            }
            return res.view('MisArticulos',{
              MiArticulo:Miarticulo,
              User:User
            });

          });
        }
        else {
          //No encontro
          return res.redirect('/');
        }
      });
  },
  eliminarmiArticulo: (req, res) => {

    let params = req.allParams();

    if (req.method == "POST" && params.id) {

      MiArticulo.destroy({
        id: params.id
      }).exec((err, articuloBorrado) => {
        if (err) return res.serverError(err);
        return res.redirect("/mibiblioteca")
      })

    } else {
      return res.badRequest();
    }

  },

  VerMiArticulo:(req,res)=>{
    let parametros = req.allParams();

    if(parametros){
      MiArticulo.findOne({
        id:parametros.id,
      })

        .exec((err,articuloEditado)=>{
          if(err) {return res.serverError(err);}
          if(articuloEditado){
            //Si encontro
            MiFile.find()
              .where({
                fkIdMiArticulo:parametros.id

              }).exec(
              (err,MiFile)=>{
                if(err){
                  return res.serverError(err);
                }
                if (!MiFile) {
                  return res.view('verMisArticulos',{
                    Miarticulo:articuloEditado

                  })
                }
                return res.view('verMisArticulos',{
                  Miarticulo:articuloEditado,
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
