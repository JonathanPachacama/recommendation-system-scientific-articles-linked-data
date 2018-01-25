module.exports = {
    crearArticuloACM: function (req, res) {
        var parametros = req.allParams();
        var nuevoArticuloACM = {
            value: parametros.value,
            type: parametros.type
        };
        ArticuloACM.create(nuevoArticuloACM)
            .exec(function (error, articuloACMCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(articuloACMCreado);
                //return res.created('Nuevo articulo creado.');
                // return res.view('busquedaArxiv')
            }
        });
    },
};
