declare var module;
declare var sails;
declare var ArticuloACM;


module.exports = {
  crearArticuloACM: (req, res) => {

    let parametros = req.allParams();

    let nuevoArticuloACM = {

      value: parametros.value,
      type: parametros.type

    };

    ArticuloACM.create(nuevoArticuloACM)
      .exec(
        (error,articuloACMCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            return res.ok(articuloACMCreado);
            //return res.created('Nuevo articulo creado.');
            // return res.view('busquedaArxiv')
          }
        }
      )

  },

}
