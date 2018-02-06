module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    biblioteca: function (req, res) {
        var parametros = req.allParams();
        if (!parametros.biblioteca) {
            parametros.biblioteca = '';
        }
        Articulo
            .find()
            .where({
            title: {
                contains: parametros.biblioteca
            }
        })
            .exec(function (err, articulos) {
            if (err)
                return res.negotiate(err);
            return res.view('biblioteca', {
                articulos: articulos
            });
        });
    },
    crearArticulo: function (req, res) {
        return res.view('busqueda');
    },
    crearMisArticulos: function (req, res) {
        return res.view('homepage');
    },
};
