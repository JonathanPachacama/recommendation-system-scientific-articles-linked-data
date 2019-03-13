var Passwords = require('machinepack-passwords');
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    user_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    art_id:{
      collection: 'Article',
      via: 'art_id'
    },
    rol_id:{
      collection: 'Rol_users',
      via: 'rol_id'
    },
    user_name:{
      type:"string"
    },
    user_last_name:{
      type:"string"
    },
    user_path_photo:{
      type:"string"
    },
    user_phone:{
      type:"string"
    },
    user_email:{
      type:"email"
    },
    user_password:{
      type:"string",
      required:true
    },
    user_token:{
      type:"string"
    },
    user_username:{
      type:"string"
    },
    user_status_register:{
      type:"string"
    },
    user_has_access:{
      type:"string"
    },
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true, },

    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true, },

  },
  //
  // beforeCreate: function (usuario,cb) {
  //   // sails.log.info("Usuario",usuario);
  //   // usuario.nombre = "Joseee";
  //   // usuario.password = "12345";
  //   // cb();
  //
  //
  //   //if (usuario.password) {
  //   Passwords.encryptPassword({password: usuario.password}).exec({
  //     error: function (err) {
  //       cb("error en hash Password",err)
  //     },
  //     success: function (hashedPassword) {
  //       usuario.password = hashedPassword;
  //       cb()
  //     },
  //   });
  //   //}else{
  //   //cb();
  //   //}
  //
  //
  // },
  //
  // beforeUpdate: function (valorAActualizar,cb) {
  //   if (valorAActualizar.password) {
  //     Passwords.encryptPassword({
  //       password: valorAActualizar.password
  //     })
  //       .exec(
  //         {
  //           error: function (err) {
  //             cb("error en hash Password",err)
  //           },
  //           success: function (hashedPassword) {
  //             valorAActualizar.password = hashedPassword;
  //             cb()
  //           },
  //         });
  //   }else{
  //     cb();
  //   }
  //
  //
  // }

};
