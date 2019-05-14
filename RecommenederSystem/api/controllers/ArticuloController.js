//    localhost:1337/Articulo/metodos
module.exports = {
    eliminarArticulo: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Articulo.destroy({
                id: params.id
            }).exec(function (err, articuloBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/bibliotecaUser");
            });
        }
        else {
            return res.badRequest();
        }
    },
    VerArticulo: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Articulo.findOne({
                id: parametros.id
            })
                .exec(function (err, articuloEditado) {
                if (err)
                    return res.serverError(err);
                if (articuloEditado) {
                    //Si encontro
                    File.find()
                        .where({
                        fkIdArticulo: parametros.id
                    }).exec(function (error, File) {
                        if (error) {
                            return res.serverError(error);
                        }
                        if (!File) {
                            return res.view('editarArticulo', {
                                articulos: articuloEditado
                            });
                        }
                        return res.view('editarArticulo', {
                            articulos: articuloEditado,
                            File: File
                        });
                    });
                }
                else {
                    //No encontro
                    return res.redirect('/biblioteca');
                }
            });
        }
        else {
            return res.redirect('/biblioteca');
        }
    },
    editanota: function (req, res) {
        var parametros = req.allParams();
        if (parametros.title &&
            parametros.country &&
            parametros.notas &&
            parametros.number &&
            parametros.volume &&
            parametros.year &&
            parametros.journal &&
            parametros.editorial &&
            parametros.abstract &&
            parametros.issns &&
            parametros.doi &&
            parametros.language &&
            parametros.category &&
            parametros.pages &&
            parametros.idArticulo) {
            Articulo.update({
                id: parametros.idArticulo
            }, {
                title: parametros.title,
                country: parametros.country,
                notas: parametros.notas,
                number: parametros.number,
                volume: parametros.volume,
                year: parametros.year,
                journal: parametros.journal,
                editorial: parametros.editorial,
                abstract: parametros.abstract,
                issns: parametros.issns,
                doi: parametros.doi,
                language: parametros.language,
                category: parametros.category,
                pages: parametros.pages,
            })
                .exec(function (err, Editado) {
                if (err)
                    return res.serverError(err);
                if (Editado) {
                    //Si encontro
                    return res.redirect('/VerArticulo?id=' + parametros.idArticulo);
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarArticulo: function (req, res) {
        var parametros = req.allParams();
        if (parametros.idArticulo &&
            parametros.title &&
            // parametros.country&&
            parametros.number &&
            parametros.volume &&
            parametros.year &&
            parametros.journal &&
            // parametros.editorial&&
            //parametros.abstract&&
            //parametros.issns&&
            // parametros.language&&
            parametros.keywords &&
            //parametros.category&&
            parametros.pages
        //parametros.notas
        ) {
            Articulo.update({
                id: parametros.idArticulo
            }, {
                title: parametros.title,
                country: parametros.country,
                number: parametros.number,
                volume: parametros.volume,
                year: parametros.year,
                journal: parametros.journal,
                editorial: parametros.editorial,
                abstract: parametros.abstract,
                issns: parametros.issns,
                doi: parametros.doi,
                language: parametros.language,
                keywords: parametros.keywords,
                category: parametros.category,
                pages: parametros.pages,
                notas: parametros.notas,
            })
                .exec(function (err, Editado) {
                if (err)
                    return res.serverError(err);
                if (Editado) {
                    //Si encontro
                    return res.redirect('/VerArticulo?id=' + parametros.idArticulo);
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    }
};
