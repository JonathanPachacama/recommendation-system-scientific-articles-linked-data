
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    rol_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    user_rolId:{
      collection: 'User',
      via: 'user_rol_id'
    },
    rol_name:{
      type:"string"
    },
    rol_description:{
      type:"string"
    },
    rol_active:{
      type:"string"
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true, },

    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true, },
  }
};
