
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
    user_photo:{
      type:"string"
    },
    user_email:{
      type:"email"
    },
    user_password:{
      type:"string"
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
    user_date_created:{
      type:"date"
    },
    user_date_updated:{
      type:"date"
    },
    user_has_access:{
      type:"string"
    }

  }

};
