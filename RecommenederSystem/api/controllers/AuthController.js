var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');
var message = require('sails-custom-validation-messages');
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
        var parametros = req.allParams();
        var user_table = {
            user_rol_id: 2,
            user_name: parametros.user_name,
            user_last_name: parametros.user_last_name,
            user_email: parametros.user_email,
            user_password: parametros.user_password,
            user_username: parametros.user_username
        };
        User.create(user_table)
            .exec(function (err, userCreated) {
            if (err) {
                if (err.invalidAttributes) {
                    err = message(User, err);
                    var msj = [];
                    var Error = err.invalidAttributes;
                    if (Error.user_email || Error.user_username || Error.user_password || Error.user_name || Error.user_last_name) {
                        var email = Error.user_email;
                        var username = Error.user_username;
                        var password = Error.user_password;
                        var name = Error.user_name;
                        var lastname = Error.user_last_name;
                        var msjEmail = User.validationMessages.user_email;
                        var msjUsername = User.validationMessages.user_username;
                        var msjName = User.validationMessages.user_name;
                        var msjLastname = User.validationMessages.user_last_name;
                        var msjPassword = User.validationMessages.user_password;
                    }
                    msj.push(FlashService.menssage(email, msjEmail));
                    msj.push(FlashService.menssage(username, msjUsername));
                    msj.push(FlashService.menssage(password, msjPassword));
                    msj.push(FlashService.menssage(name, msjName));
                    msj.push(FlashService.menssage(lastname, msjLastname));
                    var result = msj.filter(function (word) { return word.length > 0; });
                    var flash_message = false;
                    // console.log(Error)
                    return res.view('Auth/register', {
                        msj: result,
                        flash_message: flash_message,
                        layout: 'Auth/loginLayout'
                    });
                }
                else {
                    sails.log('Error', err);
                    return res.view('500', {
                        // data:err,
                        layout: '500'
                    });
                }
            }
            else {
                var profile_table = {
                    pro_user_id: userCreated.user_id,
                    pro_art_id: userCreated.user_id,
                    pro_path_photo: 'theme/dist/img/user-avatar.jpg',
                    pro_phone: parametros.user,
                    pro_completed: 0,
                    user_date_created: new Date('Y-m-d H:i:s'),
                    user_date_updated: new Date('Y-m-d H:i:s'),
                };
                Profile.create(profile_table)
                    .exec(function (err, profileCreated) {
                    if (err) {
                        // return res.negotiate(error);
                        sails.log('Error', err);
                        var msj = 'No se registrado el Usuario';
                        var flash_message = false;
                        return res.view('Auth/register', {
                            msj: msj,
                            flash_message: flash_message,
                            layout: 'Auth/loginLayout'
                        });
                    }
                    else {
                        // console.log(userCreated);
                        // console.log(profileCreated);
                        msj = req.addFlash('success', 'Usuario Registrado');
                        var flash_message = true;
                        return res.view('Auth/register', {
                            msj: msj,
                            flash_message: flash_message,
                            layout: 'Auth/loginLayout'
                        });
                    }
                });
            }
        });
    },
    edit_profile: function (req, res) {
        var parametros = req.allParams();
        if (parametros.pro_education &&
            parametros.pro_city &&
            parametros.pro_address &&
            parametros.pro_phone &&
            parametros.pro_aboutMe &&
            parametros.pro_id) {
            Profile.update({
                pro_user_id: parametros.pro_id
            }, {
                pro_completed: 1,
                pro_education: parametros.pro_education,
                pro_city: parametros.pro_city,
                pro_address: parametros.pro_address,
                pro_phone: parametros.pro_phone,
                pro_aboutMe: parametros.pro_aboutMe
            })
                .exec(function (err, profileEdit) {
                if (err)
                    return res.serverError(err);
                if (profileEdit) {
                    //Si encontro
                    res.redirect('/perfil');
                }
                else {
                    //No encontro
                    // return res.notFound()
                    res.redirect('/');
                }
            });
        }
        else {
            res.redirect('/');
        }
    },
    edit_user: function (req, res) {
        var parametros = req.allParams();
        if (parametros.user_name &&
            parametros.user_last_name &&
            parametros.user_email &&
            parametros.user_id) {
            User.update({
                user_id: parametros.user_id
            }, {
                user_name: parametros.user_name,
                user_last_name: parametros.user_last_name,
                user_email: parametros.user_email,
            })
                .exec(function (err, userEdit) {
                if (err)
                    return res.serverError(err);
                if (userEdit) {
                    //Si encontro
                    res.redirect('/perfil');
                }
                else {
                    //No encontro
                    // return res.notFound()
                    res.redirect('/');
                }
            });
        }
        else {
            res.redirect('/');
        }
    },
    change_password: function (req, res) {
        var pass1 = req.param('new_password');
        var pass2 = req.param('repit_password');
        var parametros = req.allParams();
        if (pass1 != pass2) {
            var msj = "Las contraseñas no coinciden. Intente nuevamente";
            console.log(msj);
            res.redirect('/');
        }
        else {
            if (parametros.new_password &&
                parametros.user_id) {
                User.update({
                    user_id: parametros.user_id
                }, {
                    user_password: parametros.new_password,
                })
                    .exec(function (err, passUpdate) {
                    if (err)
                        return res.serverError(err);
                    if (passUpdate) {
                        //Si encontro
                        res.redirect('/perfil');
                    }
                    else {
                        //No encontro
                        // return res.notFound()
                        res.redirect('/');
                    }
                });
            }
            else {
                res.redirect('/');
            }
        }
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
        var queryLogin = 'select user.*,rol_users.rol_name as rol, profile.*\n' +
            'from user, rol_users, profile\n' +
            'WHERE rol_users.rol_id = user.user_rol_id\n' +
            'AND user.user_id = profile.pro_user_id\n' +
            'AND user.user_username = ?\n' + //foundUser.user_username
            'AND user.user_password = ?\n' + //foundUser.user_password
            'AND user.user_has_access = ?\n' + //1
            'limit 1';
        if (username && password) {
            User.findOne({ user_username: username })
                .exec(function (err, foundUser) {
                if (err) {
                    sails.log('Error', err);
                    return res.view('500', {
                        // data:err,
                        layout: '500'
                    });
                }
                if (!foundUser) {
                    // return res.serverError('El usuario no existe');
                    var msj = 'El usuario no existe';
                    return res.view('Auth/login', {
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
                            sails.log('Error', err);
                            return res.view('500', {
                                // data:err,
                                layout: '500'
                            });
                        },
                        incorrect: function () {
                            // return res.serverError('Contraseña incorrecta');
                            var msj = 'Contraseña incorrecta';
                            return res.view('Auth/login', {
                                msj: msj,
                                layout: 'Auth/loginLayout'
                            });
                        },
                        success: function () {
                            User.query(queryLogin, [foundUser.user_username, foundUser.user_password, 'approved'], function (err, User_Session) {
                                if (err) {
                                    sails.log('Error', err);
                                    return res.view('500', {
                                        // data:err,
                                        layout: '500'
                                    });
                                }
                                // sails.log('result',User_Session);
                                // sails.log('result tamaño',User_Session.length);
                                if (User_Session.length == 1) {
                                    req.session.authenticated = true;
                                    req.session.all = User_Session[0];
                                    req.session.me = {
                                        usuarioId: User_Session[0].user_id,
                                        rol: User_Session[0].rol,
                                        rolId: User_Session[0].user_rol_id,
                                        name: User_Session[0].user_name,
                                        last_name: User_Session[0].user_last_name,
                                        username: User_Session[0].user_username,
                                        email: User_Session[0].user_email,
                                        path_photo: User_Session[0].pro_path_photo,
                                    };
                                    res.cookie('User', req.session.me.usuarioId);
                                    // console.log("req.session.me",req.session.me);
                                    // console.log("req.session.me",req.session.me.username);
                                    // console.log("req.session.all1",req.session.all);
                                    // console.log("req.session.all2",req.session.all.user_username);
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
                                    res.redirect('Auth/success');
                                }
                                else {
                                    // res.redirect('/');
                                    return res.view('500', {
                                        data: 'No se encontró el perfil del Usuario',
                                        layout: '500'
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        else {
            var msj = 'No envía usuario y contraseña';
            return res.view('Auth/login', {
                msj: msj,
                layout: 'Auth/loginLayout'
            });
        }
    },
    success: function (req, res) {
        return res.redirect('/');
    },
    error: function (req, res) {
        var msj = 'Algo Salio mal...';
        return res.view('Auth/login', {
            msj: msj,
            layout: 'Auth/loginLayout'
        });
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            return res.redirect('/login');
        });
    },
    upload: function (req, res) {
        // e.g.
        // 0 => infinite
        // 240000 => 4 minutes (240,000 miliseconds)
        // etc.
        //
        // Node defaults to 2 minutes.
        res.setTimeout(0);
        req.file('image')
            .upload({
            // // You can apply a file upload limit (in bytes)
            // maxBytes: 2000000,
            dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/profiles'),
            // saveAs: function (__newFileStream, cb) {
            //   cb(null, req.session.me.name + require('path').extname(__newFileStream.filename+'.jpg'));
            // },
            saveAs: req.session.me.name + require('path').extname(req.session.me.name + '.jpg')
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                // return res.serverError(err);
                return res.negotiate(err);
            }
            if (uploadedFiles.length === 0) {
                return res.badRequest('No file was uploaded');
            }
            Profile.update({ pro_user_id: req.session.me.usuarioId }, {
                pro_path_photo: require('util').format('uploads/profiles/%s.jpg', req.session.me.name),
            })
                .exec(function (err) {
                if (err)
                    return res.negotiate(err);
                if (uploadedFiles) {
                    var image = {
                        files: uploadedFiles,
                        textParams: req.allParams(),
                        message: uploadedFiles.length + ' file(s) uploaded successfully!',
                        avatarFd: uploadedFiles[0].fd,
                        filename: uploadedFiles[0].filename,
                    };
                    console.log('imagen', image);
                    return res.redirect('/perfil');
                }
                else {
                    //No encontro
                    return res.redirect('/');
                }
            });
        });
    },
};
