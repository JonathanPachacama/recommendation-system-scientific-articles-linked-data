/**
 * Wkx_resource_page.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    resourcepageId:{
      type:"integer",
      primaryKey:true
    },
    resourcepagePageStart:{
      type:"integer"
    },
    resourcepagePageEnd:{
      type:"integer"
    }
  }
};

