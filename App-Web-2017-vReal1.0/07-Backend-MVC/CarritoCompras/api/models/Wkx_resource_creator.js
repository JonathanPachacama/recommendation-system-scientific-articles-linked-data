/**
 * Wkx_resource_creator.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourcecreatorId:{
      type: "integer",
      autoIncrement: true,
      primaryKey: true
    },
    resourcecreatorResourceId:{
      model:'Wkx_resource'
    },
    resourcecreatorCreatorId:{
      model:'Wkx_creator'
    },
    resourcecreatorOrder:{
      type: "integer"
    },
    resourcecreatorRole:{
      type: "integer"
    },
    resourcecreatorCreatorMain:{
      type: "integer"
    },
    resourcecreatorCreatorSurname:{
      type:"string"
    }

  }
};

