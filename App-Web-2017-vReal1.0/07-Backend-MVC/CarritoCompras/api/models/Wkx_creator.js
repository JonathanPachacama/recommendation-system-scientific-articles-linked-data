/**
 * Wkx_creator.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    creatorId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    creatorFirstname:{
      type:"string"
    },

    creatorInitials:{
      type:"string"
    },
    creatorPrefix:{
      type:"string"
    },
    creatorSameAs:{
      type:"integer",

    },
    creatorSurname:{
      type:"string"
    },
    resourcecreatorCreator: {
      collection: 'Wkx_resource_creator',
      via: 'resourcecreatorCreatorId'
    }

  }
};

