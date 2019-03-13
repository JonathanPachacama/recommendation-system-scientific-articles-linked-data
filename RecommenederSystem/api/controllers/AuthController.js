module.exports = {
    Auth: function (req, res) {
        var flash_message = true;
        var msj = 'Usuario Registrado';
        return res.view('Auth/register', {
            flash_message: flash_message,
            msj: msj,
            layout: 'Auth/loginLayout'
        });
    },
    new_account: function (req, res) {
        var flash_message = true;
        var msj = 'Usuario Registrado';
        var parametros = req.allParams();
        var new_user = {
            user_name: parametros.user_name,
            user_last_name: parametros.user_last_name,
            user_path_photo: parametros.photo,
            user_phone: parametros.phone,
            user_email: parametros.user_email,
            user_password: parametros.user_password,
            user_token: parametros.token,
            user_username: parametros.user_username,
            user_status_register: 1,
            user_date_created: new Date('Y-m-d H:i:s'),
            user_date_updated: new Date('Y-m-d H:i:s'),
            user_has_access: 1,
        };
        User.create(new_user)
            .exec(function (error, userCreated) {
            if (error) {
                req.flash = {
                    err: error
                };
                return res.view('Auth/register', {
                    flash_message: flash_message,
                    msj: msj,
                    layout: 'Auth/loginLayout'
                });
            }
            else {
                res.redirect('/login');
            }
        });
    },
    validate: function (req, res) {
        var username = req.param('username');
        var password = req.param('password');
        if (username && password) {
            User.findOne({ user_username: username })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (password == usuarioEncontrado.user_password) {
                        req.session.authenticated = true;
                        console.log("Estas logeado");
                        res.redirect('/login/success');
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                    // Passwords.checkPassword({
                    //   passwordAttempt: password,
                    //   encryptedPassword: usuarioEncontrado.password,
                    // })
                    //   .exec({
                    //     error: function (err) {
                    //       return res.serverError(err);
                    //     },
                    //     incorrect: function () {
                    //       return res.badRequest("Datos Invalidos")
                    //     },
                    //     success: function () {
                    //       return res.view('UsuarioGestion/perfil');
                    //     }
                    //   });
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.serverError("No envia correo y pass");
        }
    },
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            User.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.view('UsuarioGestion/perfil');
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                    // Passwords.checkPassword({
                    //   passwordAttempt: parametros.password,
                    //   encryptedPassword: usuarioEncontrado.password,
                    // })
                    //   .exec({
                    //     error: function (err) {
                    //       return res.serverError(err);
                    //     },
                    //     incorrect: function () {
                    //       return res.badRequest("Datos Invalidos")
                    //     },
                    //     success: function () {
                    //       return res.view('UsuarioGestion/perfil');
                    //     }
                    //   });
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.serverError("No envia correo y pass");
        }
    },
    // logIn:function (req,res) {
    //   var parametros = req.allParams();
    //
    //   if(parametros.correo&&parametros.password){
    //     Usuario
    //       .findOne({
    //         correo:parametros.correo
    //       })
    //       .exec(function (err,usuarioEncontrado) {
    //
    //         if(err) return res.serverError("Error",err);
    //
    //         if(!usuarioEncontrado){
    //           return res.notFound("Usuario no Encontrado");
    //         }else{
    //           /*
    //            if(parametros.password==usuarioEncontrado.password){
    //            return res.ok("Estas logeado")
    //            }else{
    //            return res.badRequest("Password Incorrecta")
    //            }
    //            */
    //
    //           Passwords.checkPassword({
    //             passwordAttempt: parametros.password,
    //             encryptedPassword: usuarioEncontrado.password,
    //           })
    //             .exec({
    //               error: function (err) {
    //                 return res.serverError(err);
    //               },
    //               incorrect: function () {
    //                 return res.badRequest("Datos Invalidos")
    //               },
    //               success: function () {
    //                 //devolver la credencial
    //                 var token =jwt
    //                   .sign(
    //                     {
    //                       exp:Math.floor(Date.now()/ 1000)+(60*60), // aki va expirar en una hor
    //                       data:{
    //                         id:usuarioEncontrado.id,
    //                         nombre:usuarioEncontrado.nombre,
    //                         correo:usuarioEncontrado.correo
    //                       }
    //                     },
    //                     'leninAmaACoreea');  //palabra secreta
    //                 return res.ok(token);
    //               }
    //             });
    //         }
    //
    //       });
    //
    //
    //
    //
    //   }else{
    //
    //     return res.badRequest("No envia correo y pass");
    //
    //   }
    //
    //
    // },
    success: function (req, res) {
        return res.redirect('/');
    },
    error: function (req, res) {
        return res.view('error', { layout: false });
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            return res.redirect('/login');
            ;
        });
    }
};
