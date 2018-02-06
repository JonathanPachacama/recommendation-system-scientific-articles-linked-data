/**
 * Wkx_resource.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourceId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    resourceType:{
      type:"string"
    },
    resourceTitle:{
      type:"mediumtext"
    },
    resourceSubtitle:{
      type:"mediumtext"
    },

    resourceShortTitle:{
      type:"string"
    },
    resourceTransTitle:{
      type:"mediumtext"
    },
    resourceTransSubtitle:{
      type:"mediumtext"
    },

    resourceTransShortTitle:{
      type:"string"
    },
    resourceTitleSort:{
      type:"mediumtext"
    },
    resourceField1:{
      type:"string"
    },

    resourceField2:{
      type:"string"
    },
    resourceField3:{
      type:"string"
    },
    resourceField4:{
      type:"string"
    },
    resourceField5:{
      type:"string"
    },
    resourceField6:{
      type:"string"
    },
    resourceField7:{
      type:"string"
    },
    resourceField8:{
      type:"string"
    },
    resourceField9:{
      type:"string"
    },
    resourceNoSort:{
      type:"mediumtext"
    },
    resourceTransNoSort:{
      type:"mediumtext"
    },
    resourceIsbn:{
      type:"string"
    },
    resourceBibtexKey:{
      type:"string"
    },
    resourceDoi:{
      type:"string"
    },
    resouceCategory:{
      collection: 'Wkx_resource_category',
      via: 'resourcecategoryResourceId'
    },
    creatorResourceId: {
      collection: 'Wkx_resource_creator',
      via: 'resourcecreatorResourceId'
    },
    keywordResourceId: {
      collection: 'Wkx_resource_keyword',
      via: 'resourcekeywordResourceId'
    }
  }
};

