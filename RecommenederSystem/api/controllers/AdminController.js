module.exports = {
    index: function (req, res) {
        return res.view('Admin/newRol', {
            layout: 'Auth/loginLayout'
        });
    },
    view: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Rol_users
            .find()
            .exec(function (err, rols) {
            if (err)
                return res.negotiate(err);
            sails.log.info("roles", rols);
            return res.view('Admin/rols', {
                rol: rols,
                layout: 'Auth/loginLayout'
            });
        });
    },
    edit: function (req, res) {
        var parametros = req.allParams();
        if (parametros.rol_id) {
            Rol_users.findOne({
                rol_id: parametros.rol_id
            })
                .exec(function (err, rolFound) {
                if (err)
                    return res.serverError(err);
                if (rolFound) {
                    //Si encontro
                    return res.view('Admin/editRol', {
                        rol: rolFound,
                        layout: 'Auth/loginLayout'
                    });
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    },
    create_rol: function (req, res) {
        var parametros = req.allParams();
        var newRol = {
            rol_name: parametros.rol_name,
            rol_description: parametros.rol_description,
            rol_active: parametros.rol_active
        };
        Rol_users.create(newRol)
            .exec(function (error, rolCreated) {
            if (error) {
                return res.negotiate(error);
            }
            return res.ok(rolCreated);
        });
    },
    update_role: function (req, res) {
        var parametros = req.allParams();
        if (parametros.rol_name &&
            parametros.rol_description &&
            parametros.rol_active &&
            parametros.rol_id) {
            Rol_users.update({
                rol_id: parametros.rol_id
            }, {
                rol_name: parametros.rol_name,
                rol_description: parametros.rol_description,
                rol_active: parametros.rol_active
            })
                .exec(function (err, rolEdit) {
                if (err)
                    return res.serverError(err);
                if (rolEdit) {
                    //Si encontro
                    return res.ok(rolEdit);
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    },
    delete_rol: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.rol_id) {
            Rol_users.destroy({
                rol_id: params.rol_id
            }).exec(function (err, rolDeleted) {
                if (err)
                    return res.serverError(err);
                return res.ok(rolDeleted);
            });
        }
        else {
            return res.badRequest();
        }
    },
    update_password: function (req, res) {
        var parametros = req.allParams();
        if (parametros.user_password &&
            parametros.user_username &&
            parametros.user_id) {
            User.update({
                user_id: parametros.user_id
            }, {
                user_password: parametros.user_password,
                user_username: parametros.user_username
            })
                .exec(function (err, passEdit) {
                if (err)
                    return res.serverError(err);
                if (passEdit) {
                    //Si Edito
                    return res.ok(passEdit);
                }
                else {
                    //No Edito
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    },
};
