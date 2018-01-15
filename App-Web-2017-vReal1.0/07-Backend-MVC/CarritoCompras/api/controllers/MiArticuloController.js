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
        if (parametros.title &&
            parametros.country &&
            parametros.number &&
            parametros.volume &&
            parametros.year &&
            parametros.journal &&
            parametros.editorial &&
            parametros.abstract &&
            parametros.issns &&
            parametros.language &&
            parametros.keywords &&
            parametros.link &&
            parametros.authors &&
            parametros.category &&
            parametros.pages &&
            parametros.notas &&
            parametros.id) {
            MiArticulo.update({
                id: parametros.id
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
                language: parametros.language,
                keywords: parametros.keywords,
                link: parametros.link,
                authors: parametros.authors,
                pages: parametros.pages,
                notas: parametros.notas
            })
                .exec(function (err, Editado) {
                if (err)
                    return res.serverError(err);
                if (Editado) {
                    //Si encontro
                    return res.redirect("/");
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
