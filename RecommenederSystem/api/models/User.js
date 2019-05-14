var Passwords = require('machinepack-passwords');
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    user_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    user_rol_id:{
      model:"Rol_users",
      required:true
    },
    perfil_userId:{
      collection: 'Profile',
      via: 'pro_user_id'
    },
    user_username:{
      type:"string",
      unique: true,
      required: true
    },
    user_password:{
      type:"string",
      required:true
    },
    user_email:{
      type:"email",
      unique: true,
      required: true
    },
    user_name:{
      type:"string",
      required: true
    },
    user_last_name:{
      type:"string",
      required: true
    },
    user_has_access:{
      type:'string',
      enum: ['pending', 'approved', 'denied'],
      defaultsTo:'approved',
      required: true
    },
    user_articulos: {
      collection: 'Articulo',
      via: 'fkIdUser'
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true,
      columnName: 'user_created'
    },
    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true,
      columnName: 'user_updated'
    }
  },
  //model validation messages definitions
  validationMessages: { //hand for i18n & l10n

    user_username: {
      required: 'Se requiere nombre de usuario',
      string: 'El nombre de usuario debe ser una cadena válida',
      unique: 'Este nombre de usuario ya está tomado'
    },
    user_password: {
      required:'Se requiere contraseña',
      string: 'La contraseña debe ser una cadena válida',
    },
    user_email: {
      required: 'Se requiere correo electronico',
      email: 'Proporcionar una dirección de correo electrónico válida',
      unique: 'La dirección de correo electrónico ya está tomada'
    },

    user_name: {
      required:'Se requiere nombre',
      string: 'El nombre debe ser una cadena válida',
    },
    user_last_name: {
      required:'Se requiere apellido',
      string: 'El apellido es debe ser una cadena válida',
    },

    user_has_access: {
      in: 'El usuario no está aprobado',
    }
  },

  beforeCreate: function (values, cb) {

    if (values.user_password) {
      Passwords.encryptPassword({password: values.user_password}).exec({
        error: function (err) {
          cb("error en hash Password",err)
        },
        success: function (hashedPassword) {
          values.user_password = hashedPassword;
          // sails.log.info("hashedPassword",hashedPassword);
          cb()
        },
      });
    }else{
      cb();
    }
  },

  beforeUpdate: function (valueToUpdate,cb) {
    if (valueToUpdate.user_password) {
      Passwords.encryptPassword({
        password: valueToUpdate.user_password
      })
        .exec(
          {
            error: function (err) {
              cb("error en hash Password",err)
            },
            success: function (hashedPassword) {
              valueToUpdate.user_password = hashedPassword;
              cb()
            },
          });
    }else{
      cb();
    }
  },




};
