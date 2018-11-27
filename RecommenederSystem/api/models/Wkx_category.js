/**
 * Wkx_category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'Mysqladapter2',
  attributes: {
    categoryId: {
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    categoryCategory: {
      type:"string"
    },
    resouceSubcategory:{
      collection: 'Wkx_resource_category',
      via: 'resourcecategoryCategoryId'
    }


  }
};
