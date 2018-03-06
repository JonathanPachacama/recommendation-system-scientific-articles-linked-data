declare var module;
declare var sails;
declare var LinkPublication;
declare var Articulo;


module.exports = {

  crearLinkPublication: (req, res) => {

    let parametros = req.allParams();
    let nuevoLinks = {
      links_Value: parametros.links_Value,
      link_Type: parametros.link_Type,
      o_Value: parametros.o_Value,
      o_Type: parametros.o_Type,
    };
    LinkPublication.create(nuevoLinks)
      .exec(
        (error,linkCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            // return res.ok(linkCreado);
            //return res.created('Nuevo articulo creado.');
            return res.view('recommender')
          }
        }
      )

  },

}
