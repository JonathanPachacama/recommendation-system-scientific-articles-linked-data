var Passwords = require('machinepack-passwords');
var UserService = {


  username_profile: function username_profileService(options) {
    var username = 'username'
    return username;
  },

  role: function roleService(role) {
    var username = 'role'
    return username;
  },

  checkPassword: function checkPasswordService(password,parametros) {

    Passwords.checkPassword({
      passwordAttempt: password,
      encryptedPassword: parametros.user_password,
    })
      .exec({
        error: function (err) {
          return res.serverError(err);
        },
        incorrect: function () {
          return res.badRequest("Datos Invalidos")
        },
        success: function () {
          var result =true
          return result
        }
      });
  },

  find: function findOneService(correo) {


    User.findOne({ user_email: correo })
      .exec(function (err, foundUser) {
        if (err){
          var msj = 'ERROR'
          return msj;
        }
        if (!foundUser) {
          var msj = 'El usuario no existe'
          return msj;
        }
        else {
          return  foundUser
        }
      });



  },

  menssage: function menssageService(err,message) {
    var out = []
    if (err){
      for (var i = 0; i < err.length;i++){
        var rule = err[i].rule
        switch (rule) {
          case 'required':
            out.push(message.required)
            break;
          case 'email':
            out.push(message.email)
            break;
          case 'in':
            out.push(message.in)
            break;
          case 'unique':
            out.push(message.unique)
            break;
          default: out.push('Datos Icorrectos'); break;
        }
      }
    }
    return out
  },


};

module.exports = UserService;





