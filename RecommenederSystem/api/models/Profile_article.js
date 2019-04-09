
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    pa_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    pa_pro_id:{
      model:"Profile",
    },
    pa_art_id:{
      model:"Article",
    },
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true, },

    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true, },
  }
};
