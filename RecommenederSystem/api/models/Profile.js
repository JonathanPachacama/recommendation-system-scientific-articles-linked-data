module.exports = {
  connection:'Mysqladapter',
  attributes:{
    pro_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    pro_user_id:{
      model:"User",
    },
    pro_profileId:{
      collection: 'Profile_article',
      via: 'pa_pro_id'
    },
    pro_completed:{
      type:"string"
    },
    pro_path_photo:{
      type:"string"
    },
    pro_education:{
      type:"string"
    },
    pro_city:{
      type:"string"
    },
    pro_address:{
      type:"string"
    },
    pro_phone:{
      type:"string"
    },
    pro_aboutMe:{
      type:"longtext"
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
  }
};
