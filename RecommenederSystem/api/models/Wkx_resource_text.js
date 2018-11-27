/**
 * Wkx_resource_text.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourcetextId:{
      type:"integer",
      primaryKey:true
    },
    resourcetextAddUserIdNote:{
      type:"integer"
    },
    resourcetextEditUserIdNote:{
      type:"integer"
    },
    resourcetextAddUserIdAbstract:{
      type:"integer"
    },
    resourcetextEditUserIdAbstract:{
      type:"integer"
    },
    resourcetextNote:{
      type:"longtext"
    },
    resourcetextAbstract:{
      type:"longtext"
    },
    resourcetextUrls:{
      type:"longtext"
    },
    resourcetextUrlText:{
      type:"longtext"
    }
  }
};

