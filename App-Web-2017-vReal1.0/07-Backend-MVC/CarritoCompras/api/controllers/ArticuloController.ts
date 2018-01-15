/**
 * Created by CEDIA on 24/07/2017.
 */
declare var module;
declare var sails;
declare var Articulo;

//    localhost:1337/Articulo/metodos

module.exports = {

  eliminarArticulo: (req, res) => {

    let params = req.allParams();
    sails.log.info("Parametros", params);

    if (req.method == "POST" && params.id) {

      Articulo.destroy({
        id: params.id
      }).exec((err, articuloBorrado) => {
        if (err) return res.serverError(err);
        return res.redirect("/busqueda")
      })

    } else {
      return res.badRequest();
    }

  },
  VerArticulo:(req,res)=>{

    let parametros = req.allParams();

    if(parametros.id){
      Articulo.findOne({
        id:parametros.id
      })

        .exec((err,articuloEditado)=>{
          if(err) return res.serverError(err);
          if(articuloEditado){
            //Si encontro
            return res.view('editarArticulo',{
              articulos:articuloEditado
            })
          }else{
            //No encontro
            return res.redirect('/')
          }
        })
    }else{
      return res.redirect('/')
    }




  },
  editanota:(req,res)=>{

    let parametros = req.allParams();

    if(parametros.title&&
      parametros.country&&
      parametros.notas&&
      parametros.id){

      Articulo.update({
        id:parametros.id
      },{
        title:parametros.title,
        country:parametros.country,
        notas:parametros.notas
      })
        .exec((err,Editado)=>{
          if(err) return res.serverError(err);
          if(Editado){
            //Si encontro
            return res.redirect("/")
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }




  },
}
