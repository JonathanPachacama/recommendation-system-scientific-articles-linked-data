var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');
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
        // let flash_message = true
        // let msj = 'Usuario Registrado'
        var parametros = req.allParams();
        var user_table = {
            user_rol_id: 2,
            user_name: parametros.user_name,
            user_last_name: parametros.user_last_name,
            user_email: parametros.user_email,
            user_password: parametros.user_password,
            user_profile_completed: 0,
            user_username: parametros.user_username
        };
        User.create(user_table)
            .exec(function (error, userCreated) {
            if (error) {
                var msj = ' ERROR';
                return res.view('Auth/register', {
                    msj: msj,
                    layout: 'Auth/loginLayout'
                });
                return res.negotiate(error);
            }
            else {
                var profile_table = {
                    pro_user_id: userCreated.user_id,
                    pro_art_id: userCreated.user_id,
                    pro_path_photo: 'theme/dist/img/user-avatar.jpg',
                    pro_phone: parametros.user,
                    pro_has_access: 1,
                    user_date_created: new Date('Y-m-d H:i:s'),
                    user_date_updated: new Date('Y-m-d H:i:s'),
                };
                Profile.create(profile_table)
                    .exec(function (error, profileCreated) {
                    if (error) {
                        var msj = ' ERROR';
                        return res.view('Auth/register', {
                            msj: msj,
                            layout: 'Auth/loginLayout'
                        });
                        return res.negotiate(error);
                    }
                    else {
                        console.log(userCreated);
                        console.log(profileCreated);
                        res.redirect('/login');
                    }
                });
            }
        });
    },
    login: function (req, res) {
        // var correo = req.param('correo');
        // var password = req.param('password');
        // var token = ApiAuthService.logIn(correo,password)
        //
        // if(token){
        //   req.session.authenticated = true;
        //   console.log("Estas logeado");
        //   res.redirect('/perfil');
        // }else{
        //   console.log("no se logeo")
        //   res.redirect('/login')
        // }
        var username = req.param('username');
        var password = req.param('password');
        if (username && password) {
            User.findOne({ user_username: username })
                .exec(function (err, foundUser) {
                if (err)
                    return res.negotiate(err);
                if (!foundUser) {
                    // return res.serverError('El usuario no existe');
                    var msj = 'El usuario no existe';
                    return res.view('Auth/error', {
                        msj: msj,
                        layout: 'Auth/loginLayout'
                    });
                }
                else {
                    Passwords.checkPassword({
                        passwordAttempt: password,
                        encryptedPassword: foundUser.user_password,
                    })
                        .exec({
                        error: function (err) {
                            return res.serverError(err);
                        },
                        incorrect: function () {
                            // return res.serverError('Contraseña incorrecta');
                            var msj = 'Contraseña incorrecta';
                            return res.view('Auth/error', {
                                msj: msj,
                                layout: 'Auth/loginLayout'
                            });
                        },
                        success: function () {
                            req.session.authenticated = true;
                            req.session.me = {
                                id: foundUser.user_id,
                                rol: foundUser.user_rol_id,
                                name: foundUser.user_name,
                                last_name: foundUser.user_last_name,
                                email: foundUser.user_email,
                                perfil: foundUser.user_profile_completed,
                                username: foundUser.user_username
                            };
                            console.log("req.session.me", req.session.me);
                            // return the credential
                            var token = jwt
                                .sign({
                                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                data: {
                                    user_id: foundUser.user_id,
                                    user_name: foundUser.user_name,
                                    user_last_name: foundUser.user_last_name,
                                    user_username: foundUser.user_username,
                                    user_email: foundUser.user_email
                                }
                            }, 'secret'); //secret word
                            console.log("token", token);
                            var decodeToken = TokenService.decode(token);
                            console.log("helloMessage", decodeToken);
                            res.redirect('/');
                        }
                    });
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.serverError("No envia correo y pass");
        }
    },
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
