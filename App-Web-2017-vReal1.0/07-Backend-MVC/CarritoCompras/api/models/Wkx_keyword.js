/**
 * Wkx_keyword.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    keywordId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },

    keywordKeyword:{
      type:"longtext"
    },
    keyword_Keyword:{
      collection: 'Wkx_resource_keyword',
      via: 'resourcekeywordKeywordId'
    }

  }
};

