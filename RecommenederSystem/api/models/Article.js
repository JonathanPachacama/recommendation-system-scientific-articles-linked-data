
module.exports = {
  connection:'Mysqladapter',
  attributes:{
    art_id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
      model:'User'
    },
    art_title:{
      type:"string"
    },
    art_contry:{
      type:"string"
    },
    art_number:{
      type:"string"
    },
    art_volume:{
      type:"string"
    },
    art_year:{
      type:"string"
    },
    art_journal:{
      type:"string"
    },
    art_editorial:{
      type:"string"
    },
    art_abstract:{
      type:"longtext"
    },
    art_issns:{
      type:"string"
    },
    art_language:{
      type:"string"
    },
    art_keywords:{
      type:"string"
    },
    art_link:{
      type:"string"
    },
    art_authors:{
      type:"string"
    },
    art_category:{
      type:"string"
    },
    art_pages:{
      type:"string"
    },
    art_notes:{
      type:"longtext"
    },
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true, },

    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true, },
  }
};
