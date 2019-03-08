
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    rol_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
      model:'User'
    },
    rol_name:{
      type:"string"
    },
    rol_description:{
      type:"string"
    },
    rol_active:{
      type:"string"
    }
  }
};
