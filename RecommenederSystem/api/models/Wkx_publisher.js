/**
 * Wkx_publisher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    publisherId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    publisherLocation:{
      type:"string"
    },

    publisherName:{
      type:"string"
    },
    publisherType:{
      type:"string"
    },
    misc_Publisher:{
      collection: 'Wkx_resource_misc',
      via: 'resourcemiscPublisher'
    }
  }
};

