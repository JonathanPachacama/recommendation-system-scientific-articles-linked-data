/**
 * Wkx_resource_misc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourcemiscId:{
      type: "integer",
      autoIncrement: true,
      primaryKey: true
    },
    resourcemiscCollection:{
      model:'Wkx_collection'
    },
    resourcemiscPublisher:{
      model:'Wkx_publisher'
    },
    resourcemiscField1:{
      type: "integer"
    },
    resourcemiscField2:{
      type: "integer"
    },
    resourcemiscField3:{
      type: "integer"
    },
    resourcemiscField4:{
      type: "integer"
    },
    resourcemiscField5:{
      type: "integer"
    },
    resourcemiscField6:{
      type: "integer"
    },
    resourcemiscTag:{
      type: "integer"
    },
    resourcemiscAddUserIdResource:{
      type: "integer"
    },
    resourcemiscAccesses:{
      type: "integer"
    },
    resourcemiscAccessesPeriod:{
      type: "integer"
    },
    resourcemiscMaturityIndex:{
      type: "float"
    },
    resourcemiscPeerReviewed:{
      type:"string"
    },
    resourcemiscQuarantine:{
      type:"string"
    }
  }
};

