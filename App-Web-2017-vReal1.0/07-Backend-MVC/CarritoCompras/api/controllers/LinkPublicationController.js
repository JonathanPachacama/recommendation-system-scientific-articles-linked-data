module.exports = {
    recomendador: function (req, res) {
        return res.view('busquedaArxiv');
    },
    crearLinkPublication: function (req, res) {
        var parametros = req.allParams();
        var nuevoLinks = {
            links_Value: parametros.links_Value,
            link_Type: parametros.link_Type,
            o_Value: parametros.o_Value,
            o_Type: parametros.o_Type,
        };
        LinkPublication.create(nuevoLinks)
            .exec(function (error, linkCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                // return res.ok(linkCreado);
                //return res.created('Nuevo articulo creado.');
                return res.view('busquedaArxiv');
            }
        });
    },
    VerArticulos: function (req, res) {
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
                    var authors = articuloEncontrado.authores;
                    var abstract = articuloEncontrado.abstract;
                    var keywords = articuloEncontrado.keywords;
                    var category = articuloEncontrado.category;
                    /*sails.log.info("autor/es:",authors);
                    sails.log.info("abstract:",abstract);
                    sails.log.info("palabra clave:",keywords);
                    sails.log.info("categoria:",category);*/
                    sails.log.info("Articulo:", articuloEncontrado);
                    return res.view('busquedaArxiv', {
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
