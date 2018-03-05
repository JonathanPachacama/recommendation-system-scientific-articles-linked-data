module.exports = {
    recomendador: function (req, res) {
        return res.view('recommender');
    },
    VerArticuloGuardados: function (req, res) {
        Articulo
            .find()
            .exec(function (err, articulo) {
            if (err)
                return res.negotiate(err);
            console.log("Articulo:", articulo);
            return res.view('busquedaArxiv', {
                Articulos: articulo
            });
        });
    },
    TraerParametros: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Articulo.findOne({
                id: parametros.id
            })
                .exec(function (err, articuloEncontrado) {
                if (err)
                    return res.serverError(err);
                if (articuloEncontrado) {
                    //Si encontro
                    var id = articuloEncontrado.id;
                    var title = articuloEncontrado.title;
                    var authors = articuloEncontrado.authores;
                    var abstract = articuloEncontrado.abstract;
                    var keywords = articuloEncontrado.keywords;
                    var category = articuloEncontrado.category;
                    sails.log.info("id:", id);
                    sails.log.info("Titulo:", title);
                    sails.log.info("Autor/es:", authors);
                    sails.log.info("Abstract:", abstract);
                    sails.log.info("Palabras clave:", keywords);
                    sails.log.info("Categoria:", category);
                    // sails.log.info("Articulo:",articuloEncontrado);
                    return res.view('recommender', {
                        /*authors:articuloEncontrado,
                        abstract:articuloEncontrado,
                        keywords:articuloEncontrado,
                        category:articuloEncontrado*/
                        Articulo: articuloEncontrado
                    });
                }
                else {
                    //No encontro
                    return res.redirect('/');
                }
            });
        }
        else {
            return res.redirect('/');
        }
    }
};
