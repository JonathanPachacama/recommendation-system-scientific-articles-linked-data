/**
 * Wkx_collection.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    collectionId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    collectionTitle:{
      type:"string"
    },
    collectionTitleShort:{
      type:"string"
    },
    collectionType:{
      type:"string"
    },
    misc_collection:{
      collection: 'Wkx_resource_misc',
      via: 'resourcemiscCollection'
    }
  }
};

