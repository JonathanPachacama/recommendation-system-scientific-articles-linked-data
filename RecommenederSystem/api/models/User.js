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
    },
    perfil_userId:{
      collection: 'Profile',
      via: 'pro_user_id'
    },
    user_name:{
      type:"string"
    },
    user_last_name:{
      type:"string"
    },
    user_username:{
      type:"string"
    },
    user_email:{
      type:"email"
    },
    user_password:{
      type:"string",
      required:true
    },
    user_has_access:{
      type:'string',
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true,
    },

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
  }
};
