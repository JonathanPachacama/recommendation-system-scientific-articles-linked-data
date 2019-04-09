declare var module;
declare var sails;
declare var User;
declare var Profile;
declare var require;
declare var TokenService;
declare var ApiAuthService;
declare var UserService;
declare var PerfilService;
declare var MasterUrlService

var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');




module.exports = {

  Auth:function(req,res){

    let flash_message = true
    let msj = 'Usuario Registrado'

    return res.view('Auth/register',{
      flash_message:flash_message,
      msj:msj,
      layout: 'Auth/loginLayout'
    })

  },

  new_account:function(req,res){

    // let flash_message = true
    // let msj = 'Usuario Registrado'
    let parametros = req.allParams();

    let user_table = {
      user_rol_id:2,
      user_name:parametros.user_name,
      user_last_name:parametros.user_last_name,
      user_email:parametros.user_email,
      user_password:parametros.user_password,
      user_has_access:1,
      user_username:parametros.user_username
    };

    User.create(user_table)
      .exec(
        (error,userCreated)=> {
          if (error) {
            var msj = ' ERROR'
            return res.view('Auth/register', {
              msj:msj,
              layout: 'Auth/loginLayout'
            });

            return res.negotiate(error);
          }
          else
          {
            let profile_table = {
              pro_user_id:userCreated.user_id,
              pro_art_id:userCreated.user_id,
              pro_path_photo:'theme/dist/img/user-avatar.jpg',
              pro_phone:parametros.user,
              pro_completed:0,
              user_date_created:new Date('Y-m-d H:i:s'),
              user_date_updated:new Date('Y-m-d H:i:s'),
            };

            Profile.create(profile_table)
              .exec(
                (error,profileCreated)=> {
                  if (error) {
                    var msj = ' ERROR'
                    return res.view('Auth/register', {
                      msj:msj,
                      layout: 'Auth/loginLayout'
                    });
                    return res.negotiate(error);
                  }
                  else
                  {
                    console.log(userCreated);
                    console.log(profileCreated);
                    res.redirect('/login');

                  }
                }
              )
          }
        }
      )
  },

  edit_profile:function(req,res){

    let parametros = req.allParams();
    if(parametros.pro_education&&
      parametros.pro_city&&
      parametros.pro_address&&
      parametros.pro_phone&&
      parametros.pro_aboutMe&&
      parametros.pro_id){
      Profile.update({
        pro_user_id:parametros.pro_id
      },{
        pro_completed:1,
        pro_education:parametros.pro_education,
        pro_city:parametros.pro_city,
        pro_address:parametros.pro_address,
        pro_phone:parametros.pro_phone,
        pro_aboutMe:parametros.pro_aboutMe
      })
        .exec((err,profileEdit)=>{
          if(err) return res.serverError(err);
          if(profileEdit){
            //Si encontro
            res.redirect('/perfil');
          }else{
            //No encontro
            // return res.notFound()
            res.redirect('/');
          }
        })
    }else{
      res.redirect('/');
    }
  },

  edit_user:function(req,res){

    let parametros = req.allParams();
    if(parametros.user_name&&
      parametros.user_last_name&&
      parametros.user_email&&
      parametros.user_id){
      User.update({
        user_id:parametros.user_id
      },{
        user_name:parametros.user_name,
        user_last_name:parametros.user_last_name,
        user_email:parametros.user_email,
      })
        .exec((err,userEdit)=>{
          if(err) return res.serverError(err);
          if(userEdit){
            //Si encontro
            res.redirect('/perfil');
          }else{
            //No encontro
            // return res.notFound()
            res.redirect('/');
          }
        })
    }else{
      res.redirect('/');
    }
  },

  change_password:function(req,res){

    let pass1 = req.param('new_password');
    let pass2 = req.param('repit_password');
    let parametros = req.allParams();

    if(pass1 != pass2){
      let msj = "Las contraseñas no coinciden. Intente nuevamente";
      console.log(msj)
      res.redirect('/');
    }
    else{

      if(parametros.new_password&&
        parametros.user_id){
        User.update({
          user_id:parametros.user_id
        },{
          user_password:parametros.new_password,
        })
          .exec((err,passUpdate)=>{
            if(err) return res.serverError(err);
            if(passUpdate){
              //Si encontro
              res.redirect('/perfil');
            }else{
              //No encontro
              // return res.notFound()
              res.redirect('/');
            }
          })
      }else{
        res.redirect('/');
      }
    }


  },

  login : function(req,res){

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
            var msj = 'El usuario no existe'
            return res.view('Auth/error',{
              msj:msj,
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
                  var msj = 'Contraseña incorrecta'
                  return res.view('Auth/error',{
                    msj:msj,
                    layout: 'Auth/loginLayout'
                  });
                },
                success: function () {

                  let query = 'select user.*,rol_users.rol_name as rol, profile.*\n' +
                    'from user, rol_users, profile\n' +
                    'WHERE rol_users.rol_id = user.user_rol_id\n' +
                    'AND user.user_id = profile.pro_user_id\n' +
                    'AND user.user_username = ?\n' +
                    'AND user.user_password = ?\n' +
                    'AND user.user_has_access = ?\n' +
                    'limit 1'
                  User.query(query, [ foundUser.user_username,foundUser.user_password,'1'] ,function(err, User_Session) {
                    if (err) { return res.serverError(err); }

                    sails.log('result',User_Session);
                    sails.log('result tamaño',User_Session.length);

                    if (User_Session.length == 1) {

                      req.session.authenticated = true;
                      req.session.all = User_Session[0]
                      req.session.me = {
                        usuarioId:User_Session[0].user_id,
                        rol:User_Session[0].rol,
                        rolId:User_Session[0].user_rol_id,
                        name:User_Session[0].user_name,
                        last_name:User_Session[0].user_last_name,
                        username:User_Session[0].user_username,
                        email:User_Session[0].user_email,
                        path_photo:User_Session[0].pro_path_photo,
                      }


                      console.log("req.session.me",req.session.me);
                      console.log("req.session.me",req.session.me.username);
                      console.log("req.session.all1",req.session.all);
                      console.log("req.session.all2",req.session.all.user_username);


                      // return the credential
                      var token =jwt
                        .sign(
                          {
                            exp:Math.floor(Date.now()/ 1000)+(60*60), // expires in one hour
                            data:{
                              user_id:foundUser.user_id,
                              user_name:foundUser.user_name,
                              user_last_name:foundUser.user_last_name,
                              user_username:foundUser.user_username,
                              user_email:foundUser.user_email
                            }
                          },
                          'secret');  //secret word
                      console.log("token",token);
                      var decodeToken = TokenService.decode(token);
                      console.log("helloMessage",decodeToken);
                      res.redirect('/');


                    } else {
                      res.redirect('/');
                    }
                  });

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

  success : function(req,res){
    return res.redirect('/');
  },

  error : function(req,res){

    return res.view('error', {layout : false});
  },

  logout: function(req, res) {
    req.session.destroy(function(err) {
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
        saveAs: req.session.me.name +require('path').extname(req.session.me.name+'.jpg')

      }, function whenDone(err, uploadedFiles) {

        if (err) {
          // return res.serverError(err);
          return res.negotiate(err);
        }

        if (uploadedFiles.length === 0){
          return res.badRequest('No file was uploaded');
        }

        Profile.update( {pro_user_id:req.session.me.usuarioId},{
          pro_path_photo: require('util').format('uploads/profiles/%s.jpg', req.session.me.name),  // Generate a unique URL where the avatar can be downloaded.
        })
          .exec(function (err){
            if (err) return res.negotiate(err);

            if (uploadedFiles) {

              var image = {
                files: uploadedFiles,
                textParams: req.allParams(),
                message: uploadedFiles.length + ' file(s) uploaded successfully!',

                avatarFd:uploadedFiles[0].fd, // Grab the first file and use it's `fd` (file descriptor)
                filename: uploadedFiles[0].filename,
              }
              console.log('imagen',image)

              return  res.redirect('/perfil');
            }
            else {
              //No encontro
              return res.redirect('/');
            }
          });
      });
  },
};
