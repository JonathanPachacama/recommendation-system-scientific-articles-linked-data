/**
 * Wkx_resource_year.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourceyearId:{
      type:"integer",
      primaryKey:true
    },
    resourceyearYear1:{
      type: "string"
    },
    resourceyearYear2:{
      type: "string"
    },
    resourceyearYear3:{
      type: "string"
    },
    resourceyearYear4:{
      type: "string"
    }
  }
};

