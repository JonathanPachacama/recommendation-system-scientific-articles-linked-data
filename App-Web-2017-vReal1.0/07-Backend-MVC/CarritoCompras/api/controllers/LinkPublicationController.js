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
};
