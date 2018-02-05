/**
 * Wkx_resource_keyword.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourcekeywordId:{
      type: "integer",
      autoIncrement: true,
      primaryKey: true
    },
    resourcekeywordResourceId:{
      model:'Wkx_resource'
    },
    resourcekeywordQuoteId:{
      type: "integer"
    },
    resourcekeywordParaphraseId:{
      type: "integer"
    },
    resourcekeywordMusingId:{
      type: "integer"
    },
    resourcekeywordKeywordId:{
      model:'Wkx_keyword'
    }
  }
};

