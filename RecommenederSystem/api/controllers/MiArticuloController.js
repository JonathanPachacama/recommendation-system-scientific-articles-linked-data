// /Saludo/crearMiArticulo
module.exports = {
    homepage: function (req, res) {
        sails.models.MiArticulo.find().exec(function (err, MiArticuloEncontrados) {
            if (err)
                return res.serverError(err);
            return res.view('MisArticulos', { MiArticulo: MiArticuloEncontrados });
        });
    },
    editanota: function (req, res) {
        var parametros = req.allParams();
        if (parametros.idMiArticulo &&
            parametros.title &&
            parametros.country &&
            parametros.number &&
            parametros.volume &&
            parametros.year &&
            parametros.journal &&
            parametros.editorial &&
            parametros.abstract &&
            parametros.issns &&
            parametros.doi &&
            parametros.language &&
            parametros.keywords &&
            parametros.authors &&
            parametros.category &&
            parametros.pages &&
            parametros.notas) {
            MiArticulo.update({
                id: parametros.idMiArticulo
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
                authors: parametros.authors,
                category: parametros.category,
                pages: parametros.pages,
                notas: parametros.notas
            })
                .exec(function (err, Editado) {
                if (err)
                    return res.serverError(err);
                if (Editado) {
                    //Si encontro
                    return res.redirect('/VerMisArticulo?id=' + parametros.idMiArticulo);
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
    viewMiFile: function (req, res) {
        MiFile.find().exec(function (err, MiFile) {
            if (err)
                return res.negotiate(err);
            sails.log.info("file", MiFile);
            return res.view('VerMisArticulos', {
                MiFile: MiFile
            });
        });
    },
    ///parece no ser necesario///
    VerMiFile: function (req, res) {
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
                    MiFile.findOne({ fkIdMiArticulo: parametros.id }).exec(function (error, MiFile) {
                        if (error) {
                            return res.serverError(error);
                        }
                        if (!MiFile) {
                            return res.view('VerMisArticulos', {
                                MiFile: articuloEditado
                            });
                        }
                        return res.view('VerMisArticulos', {
                            MiArticulo: articuloEditado,
                            MiFile: MiFile
                        });
                    });
                }
                else {
                    //No encontro
                    return res.view('MisArticulos');
                }
            });
        }
        else {
            return res.view('MisArticulos');
        }
    },
};
