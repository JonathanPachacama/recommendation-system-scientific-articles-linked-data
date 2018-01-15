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
            creatorInitials: "NULL",
            creatorPrefix: "NULL",
            creatorSameAs: 0
        };
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
            resourceSubtitle: "NULL",
            resourceShortTitle: "NULL",
            resourceTransTitle: "NULL",
            resourceTransSubtitle: "NULL",
            resourceTransShortTitle: "NULL",
            resourceTitleSort: "NULL",
            resourceField1: "NULL",
            resourceField2: "NULL",
            resourceField3: "NULL",
            resourceField4: "NULL",
            resourceField5: "NULL",
            resourceField6: "NULL",
            resourceField7: "NULL",
            resourceField8: "NULL",
            resourceField9: "NULL",
            resourceNoSort: "NULL",
            resourceTransNoSort: "NULL",
            resourceIsbn: "NULL",
            resourceBibtexKey: "NULL",
            resourceDoi: "NULL"
        };
        Wkx_category.create(nuevaCategoria)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(articuloCreado);
                //return res.created('Nuevo articulo creado.');
                //  return res.view('Biblioteca')
            }
        });
        Wkx_collection.create(nuevoCollection)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
        });
        Wkx_creator.create(nuevoAuthor)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
        });
        Wkx_keyword.create(nuevoKeyword)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
        });
        Wkx_publisher.create(nuevoPublisher)
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
        });
    },
}; /**
 * Created by CEDIA on 01/11/2017.
 */
