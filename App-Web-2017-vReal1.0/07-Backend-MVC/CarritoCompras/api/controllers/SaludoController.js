/**
 * Created by USRDEL on 19/6/17.
 */
// /Saludo/crearMiArticulo
module.exports = {
    welcome: function (req, res) {
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    bienvenido: function (req, res) {
        //PUT
        return res.send("Hola");
    },
    crearMiArticulo: function (req, res) {
        var parametros = req.allParams();
        var nuevoArticulo = {
            title: parametros.title,
            country: parametros.country,
            number: parametros.number,
            volume: parametros.volume,
            year: parametros.year,
            journal: parametros.journal,
            editorial: parametros.editorial,
            abstract: parametros.abstract,
            issns: parametros.issns,
            language: parametros.language,
            keywords: parametros.keywords,
            link: parametros.link,
            authors: parametros.authors,
            category: parametros.category,
            pages: parametros.pages,
            notas: parametros.notas
        };
        MiArticulo.create(nuevoArticulo)
            .exec(function (error, articuloCreado) {
            function aticuloCreated(err, articulo) {
                if (err) {
                    req.flash = {
                        err: err
                    };
                    return res.redirect('/crearMisArticulos');
                }
                else {
                    res.redirect('/VerMisArticulo');
                }
            }
        });
    },
    VerMisArticulos: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        if (!parametros.mibiblioteca) {
            parametros.mibiblioteca = '';
        }
        MiArticulo
            .find()
            .where({
            title: {
                contains: parametros.mibiblioteca
            }
        })
            .exec(function (err, Miarticulo) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Miarticulo", Miarticulo);
            return res.view('MisArticulos', {
                MiArticulo: Miarticulo
            });
        });
    },
    eliminarmiArticulo: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            MiArticulo.destroy({
                id: params.id
            }).exec(function (err, articuloBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/MisArticulos");
            });
        }
        else {
            return res.badRequest();
        }
    },
    VerMiArticulo: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            MiArticulo.findOne({
                id: parametros.id
            })
                .exec(function (err, articuloEditado) {
                if (err)
                    return res.serverError(err);
                if (articuloEditado) {
                    //Si encontro
                    return res.view('verMisArticulos', {
                        Miarticulo: articuloEditado
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
