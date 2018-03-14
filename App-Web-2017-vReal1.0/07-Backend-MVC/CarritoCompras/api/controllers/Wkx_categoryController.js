// /Saludo/crearUsuarioQuemado
module.exports = {
    crearArticuloQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevaCategoria = {
            categoryCategory: parametros.category
        };
        var nuevoCollection = {
            collectionTitle: parametros.journal,
            collectionType: parametros.typejournal
        };
        var nuevoAuthor = {
            creatorFirstname: parametros.nombreAuthores,
            creatorSurname: parametros.apellidoAuthores,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        var nuevoAuthor1 = {
            creatorFirstname: parametros.nombreAuthores1,
            creatorSurname: parametros.apellidoAuthores1,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        var nuevoAuthor2 = {
            creatorFirstname: parametros.nombreAuthores2,
            creatorSurname: parametros.apellidoAuthores2,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        var nuevoAuthor3 = {
            creatorFirstname: parametros.nombreAuthores3,
            creatorSurname: parametros.apellidoAuthores3,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        var nuevoAuthor4 = {
            creatorFirstname: parametros.nombreAuthores4,
            creatorSurname: parametros.apellidoAuthores4,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        var nuevoAuthor5 = {
            creatorFirstname: parametros.nombreAuthores5,
            creatorSurname: parametros.apellidoAuthores5,
            creatorInitials: parametros.ap,
            creatorPrefix: parametros.ap,
            creatorSameAs: 0
        };
        numero_authors = parametros.numero_autores;
        sails.log.info("Parametros", numero_authors);
        var nuevoKeyword = {
            keywordKeyword: parametros.keywords,
        };
        var nuevoPublisher = {
            publisherLocation: parametros.country,
            publisherName: parametros.editorial,
            publisherType: ""
        };
        var nuevoResourse = {
            resourceType: "journal_article",
            resourceTitle: parametros.title,
            resourceSubtitle: parametros.tit,
            resourceShortTitle: parametros.tit,
            resourceTransTitle: parametros.tit,
            resourceTransSubtitle: parametros.tit,
            resourceTransShortTitle: parametros.tit,
            resourceTitleSort: parametros.tit,
            resourceField1: parametros.volume,
            resourceField2: parametros.tit,
            resourceField3: parametros.tit,
            resourceField4: parametros.tit,
            resourceField5: parametros.tit,
            resourceField6: parametros.tit,
            resourceField7: parametros.tit,
            resourceField8: parametros.tit,
            resourceField9: parametros.tit,
            resourceNoSort: parametros.tit,
            resourceTransNoSort: parametros.tit,
            resourceIsbn: parametros.tit,
            resourceBibtexKey: parametros.apellido + parametros.year,
            resourceDoi: parametros.doi
        };
        Wkx_collection.create(nuevoCollection)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                collectionId = articuloCreado.collectionId;
                Wkx_publisher.create(nuevoPublisher)
                    .exec(function (error, articuloCreado) {
                    if (error) {
                        return res.serverError(error);
                    }
                    else {
                        PublisherId = articuloCreado.publisherId;
                        Wkx_resource_misc.create({
                            resourcemiscCollection: collectionId,
                            resourcemiscPublisher: PublisherId,
                            resourcemiscAddUserIdResource: 1,
                            resourcemiscAccesses: 2,
                            resourcemiscAccessesPeriod: 2,
                            resourcemiscMaturityIndex: 0,
                            resourcemiscPeerReviewed: "N",
                            resourcemiscQuarantine: "N"
                        })
                            .exec(function (error, articuloCreado) {
                            if (error) {
                                return res.serverError(error);
                            }
                        });
                    }
                });
            }
        });
        Wkx_category.create(nuevaCategoria)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                CategoryId = articuloCreado.categoryId;
                Wkx_resource.create(nuevoResourse)
                    .exec(function (error, articuloCreado) {
                    if (error) {
                        return res.serverError(error);
                    }
                    else {
                        ResourceId = articuloCreado.resourceId;
                        Wkx_resource_category.create({
                            resourcecategoryResourceId: articuloCreado.resourceId,
                            resourcecategoryCategoryId: CategoryId
                        }).exec(function (error, articuloCreado) {
                            if (error) {
                                return res.serverError(error);
                            }
                            else {
                                Wkx_creator.create(nuevoAuthor)
                                    .exec(function (error, articuloCreado) {
                                    if (error) {
                                        return res.serverError(error);
                                    }
                                    else {
                                        Wkx_resource_creator.create({
                                            resourcecreatorResourceId: ResourceId,
                                            resourcecreatorCreatorId: articuloCreado.creatorId,
                                            resourcecreatorOrder: 1,
                                            resourcecreatorRole: 1,
                                            resourcecreatorCreatorMain: articuloCreado.creatorId,
                                            resourcecreatorCreatorSurname: articuloCreado.creatorSurname
                                        }).exec(function (error, articuloCreado) {
                                            if (error) {
                                                return res.serverError(error);
                                            }
                                            else {
                                                CreatorSurname1 = articuloCreado.creatorSurname;
                                                if (numero_authors == 2) {
                                                    Wkx_creator.create(nuevoAuthor1)
                                                        .exec(function (error, articuloCreado) {
                                                        if (error) {
                                                            return res.serverError(error);
                                                        }
                                                        else {
                                                            Wkx_resource_creator.create({
                                                                resourcecreatorResourceId: ResourceId,
                                                                resourcecreatorCreatorId: articuloCreado.creatorId,
                                                                resourcecreatorOrder: 1,
                                                                resourcecreatorRole: 1,
                                                                resourcecreatorCreatorMain: articuloCreado.creatorId,
                                                                resourcecreatorCreatorSurname: CreatorSurname1
                                                            }).exec(function (error, articuloCreado) {
                                                                if (error) {
                                                                    return res.serverError(error);
                                                                }
                                                                else {
                                                                    if (numero_authors == 3) {
                                                                        Wkx_creator.create(nuevoAuthor2)
                                                                            .exec(function (error, articuloCreado) {
                                                                            if (error) {
                                                                                return res.serverError(error);
                                                                            }
                                                                            else {
                                                                                Wkx_resource_creator.create({
                                                                                    resourcecreatorResourceId: ResourceId,
                                                                                    resourcecreatorCreatorId: articuloCreado.creatorId,
                                                                                    resourcecreatorOrder: 1,
                                                                                    resourcecreatorRole: 1,
                                                                                    resourcecreatorCreatorMain: articuloCreado.creatorId,
                                                                                    resourcecreatorCreatorSurname: CreatorSurname1
                                                                                }).exec(function (error, articuloCreado) {
                                                                                    if (error) {
                                                                                        return res.serverError(error);
                                                                                    }
                                                                                    else {
                                                                                        if (numero_authors == 4) {
                                                                                            Wkx_creator.create(nuevoAuthor3)
                                                                                                .exec(function (error, articuloCreado) {
                                                                                                if (error) {
                                                                                                    return res.serverError(error);
                                                                                                }
                                                                                                else {
                                                                                                    Wkx_resource_creator.create({
                                                                                                        resourcecreatorResourceId: ResourceId,
                                                                                                        resourcecreatorCreatorId: articuloCreado.creatorId,
                                                                                                        resourcecreatorOrder: 1,
                                                                                                        resourcecreatorRole: 1,
                                                                                                        resourcecreatorCreatorMain: articuloCreado.creatorId,
                                                                                                        resourcecreatorCreatorSurname: CreatorSurname1
                                                                                                    }).exec(function (error, articuloCreado) {
                                                                                                        if (error) {
                                                                                                            return res.serverError(error);
                                                                                                        }
                                                                                                        else {
                                                                                                            if (numero_authors == 5) {
                                                                                                                Wkx_creator.create(nuevoAuthor4)
                                                                                                                    .exec(function (error, articuloCreado) {
                                                                                                                    if (error) {
                                                                                                                        return res.serverError(error);
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        Wkx_resource_creator.create({
                                                                                                                            resourcecreatorResourceId: ResourceId,
                                                                                                                            resourcecreatorCreatorId: articuloCreado.creatorId,
                                                                                                                            resourcecreatorOrder: 1,
                                                                                                                            resourcecreatorRole: 1,
                                                                                                                            resourcecreatorCreatorMain: articuloCreado.creatorId,
                                                                                                                            resourcecreatorCreatorSurname: CreatorSurname1
                                                                                                                        }).exec(function (error, articuloCreado) {
                                                                                                                            if (error) {
                                                                                                                                return res.serverError(error);
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                if (numero_authors == 6) {
                                                                                                                                    Wkx_creator.create(nuevoAuthor5)
                                                                                                                                        .exec(function (error, articuloCreado) {
                                                                                                                                        if (error) {
                                                                                                                                            return res.serverError(error);
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            Wkx_resource_creator.create({
                                                                                                                                                resourcecreatorResourceId: ResourceId,
                                                                                                                                                resourcecreatorCreatorId: articuloCreado.creatorId,
                                                                                                                                                resourcecreatorOrder: 1,
                                                                                                                                                resourcecreatorRole: 1,
                                                                                                                                                resourcecreatorCreatorMain: articuloCreado.creatorId,
                                                                                                                                                resourcecreatorCreatorSurname: CreatorSurname1
                                                                                                                                            }).exec(function (error, articuloCreado) {
                                                                                                                                                if (error) {
                                                                                                                                                    return res.serverError(error);
                                                                                                                                                }
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                }
                                                                                                                            }
                                                                                                                        });
                                                                                                                    }
                                                                                                                });
                                                                                                            }
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            });
                                                                                        }
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                                Wkx_keyword.create(nuevoKeyword)
                                                    .exec(function (error, articuloCreado) {
                                                    if (error) {
                                                        return res.serverError(error);
                                                    }
                                                    else {
                                                        Wkx_resource_keyword.create({
                                                            resourcekeywordResourceId: ResourceId,
                                                            resourcekeywordQuoteId: articuloCreado.key,
                                                            resourcekeywordParaphraseId: articuloCreado.key,
                                                            resourcekeywordMusingId: articuloCreado.key,
                                                            resourcekeywordKeywordId: articuloCreado.keywordId
                                                        }).exec(function (error, articuloCreado) {
                                                            if (error) {
                                                                return res.serverError(error);
                                                            }
                                                            else {
                                                                Wkx_resource_page.create({
                                                                    resourcepageId: ResourceId,
                                                                    resourcepagePageStart: parametros.starpage,
                                                                    resourcepagePageEnd: parametros.endpage
                                                                }).exec(function (error, articuloCreado) {
                                                                    if (error) {
                                                                        return res.serverError(error);
                                                                    }
                                                                    else {
                                                                        Wkx_resource_text.create({
                                                                            resourcetextId: ResourceId,
                                                                            resourcetextAddUserIdNote: articuloCreado.key,
                                                                            resourcetextEditUserIdNote: articuloCreado.key,
                                                                            resourcetextAddUserIdAbstract: articuloCreado.key,
                                                                            resourcetextEditUserIdAbstract: articuloCreado.key,
                                                                            resourcetextNote: articuloCreado.key,
                                                                            resourcetextAbstract: parametros.abstract,
                                                                            resourcetextUrls: parametros.link,
                                                                            resourcetextUrlText: articuloCreado.key
                                                                        }).exec(function (error, articuloCreado) {
                                                                            if (error) {
                                                                                return res.serverError(error);
                                                                            }
                                                                            else {
                                                                                Wkx_resource_year.create({
                                                                                    resourceyearId: ResourceId,
                                                                                    resourceyearYear1: parametros.year,
                                                                                    resourceyearYear2: articuloCreado.y,
                                                                                    resourceyearYear3: articuloCreado.y,
                                                                                    resourceyearYear4: articuloCreado.y
                                                                                }).exec(function (error, articuloCreado) {
                                                                                    if (error) {
                                                                                        return res.serverError(error);
                                                                                    }
                                                                                    else {
                                                                                        //return res.ok(articuloCreado);
                                                                                        //return res.created('Nuevo articulo creado.');
                                                                                        //  return res.view('Biblioteca')
                                                                                        //(start) added for Recommender Module
                                                                                        return res.view('RecommenderModule/MainWikindx');
                                                                                        //(end) added for Recommender Module
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
}; /**
 * Created by CEDIA on 01/11/2017.
 */
