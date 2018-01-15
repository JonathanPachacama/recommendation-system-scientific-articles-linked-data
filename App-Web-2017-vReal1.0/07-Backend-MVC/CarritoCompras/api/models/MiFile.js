/**
 * MiFile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'Mysqladapter',
  tableName: 'MiFiles', // entirely optional
  attributes: {
    filename: {
      type: 'string',
      required: true
    },
    path: {
      type: 'string',
      required: true
    },
    fkIdMiArticulo:{
      model:'MiArticulo'

    }
  }
};
