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
                return res.redirect("/busqueda");
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
                    return res.view('editarArticulo', {
                        articulos: articuloEditado
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
    },
    editanota: function (req, res) {
        var parametros = req.allParams();
        if (parametros.title &&
            parametros.country &&
            parametros.notas &&
            parametros.id) {
            Articulo.update({
                id: parametros.id
            }, {
                title: parametros.title,
                country: parametros.country,
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
    },
};
