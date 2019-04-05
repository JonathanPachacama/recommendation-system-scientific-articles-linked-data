declare var module;
declare var sails;
declare var Rol_users;
declare var require;
module.exports = {

  index:function(req,res){
    return res.view('Admin/newRol',{
      layout: 'Auth/loginLayout'
    })
  },

  view:function(req,res){

    let parametros = req.allParams();
    sails.log.info("Parametros",parametros);
    Rol_users
      .find()
      .exec((err,rols)=>{
        if(err) return res.negotiate(err);
        sails.log.info("roles",rols);
        return res.view('Admin/rols',{
          rol:rols,
          layout: 'Auth/loginLayout'
        })
      })
  },

  edit:function(req,res){

    let parametros = req.allParams();
    if(parametros.rol_id){
      Rol_users.findOne({
        rol_id:parametros.rol_id
      })
        .exec((err,rolFound)=>{
          if(err) return res.serverError(err);
          if(rolFound){
            //Si encontro
            return res.view('Admin/editRol',{
              rol:rolFound,
              layout: 'Auth/loginLayout'
            })
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }
  },

  create_rol:(req, res)=>{

    let parametros = req.allParams();
    let newRol = {
      rol_name :parametros.rol_name ,
      rol_description :parametros.rol_description ,
      rol_active :parametros.rol_active
    };
    Rol_users.create(newRol)
      .exec(
        (error,rolCreated)=> {
          if (error) {return res.negotiate(error);}
            return res.ok(rolCreated)
        })
  },

  update_role:(req,res)=>{

    let parametros = req.allParams();
    if(parametros.rol_name&&
      parametros.rol_description&&
      parametros.rol_active&&
      parametros.rol_id){
      Rol_users.update({
        rol_id:parametros.rol_id
      },{
        rol_name:parametros.rol_name,
        rol_description:parametros.rol_description,
        rol_active:parametros.rol_active
      })
        .exec((err,rolEdit)=>{
          if(err) return res.serverError(err);
          if(rolEdit){
            //Si encontro
            return res.ok(rolEdit)
          }else{
            //No encontro
            return res.notFound()
          }
        })
    }else{
      return res.badRequest()
    }
  },

  delete_rol: (req, res) => {

    let params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.rol_id) {
      Rol_users.destroy({
        rol_id: params.rol_id
      }).exec((err, rolDeleted) => {
        if (err) return res.serverError(err);
        return res.ok(rolDeleted)
      })
    } else {
      return res.badRequest();
    }
  },
};
