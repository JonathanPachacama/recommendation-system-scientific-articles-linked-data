/**
 * MiFileController
 *
 * @description :: Server-side logic for managing mifiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload: function  (req, res) {
    var parametros = req.allParams();
    sails.log.info("Parametros", parametros);

    req.file('avatar') // this is the name of the file in your multipart form
      .upload({
        // optional
        // dirname: [SOME PATH TO SAVE IN A CUSTOM DIRECTORY]
      }, function(err, uploads) {
        // try to always handle errors
        if (err) { return res.serverError(err) }
        // uploads is an array of files uploaded
        // so remember to expect an array object
        if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
        // if file was uploaded create a new registry
        // at this point the file is phisicaly available in the hard drive

        MiFile.create({

          path: uploads[0].fd,
          filename: uploads[0].filename,
          fkIdMiArticulo:parametros.id
        }).exec(function(err, file) {
          if (err) { return res.serverError(err) }
          // if it was successful return the registry in the response
          return res.json(file)
        })
      })
  },
  download: function(req, res) {
    var mifileID = req.param('id')
    // gets the id either in urlencode, body or url query
    MiFile
      .findOne({ id: mifileID })
      .exec(function(err, file){
        if (err) { return res.serverError(err) }
        if (!file) { return res.notFound() }
        // we use the res.download function to download the file
        // and send a ok response
        res.download(file.path, function (err) {
          if (err) {
            return res.serverError(err)
          } else {
            return res.ok()
          }
        })
      })
  },
  verArchivo:function  (req, res) {

    MiFile.find().exec(function (err, miarticulo) {
      if (err)
        return res.negotiate(err);
      sails.log.info("MiArticulo", miarticulo);
      res.attachment('tmp/uploads/15c26377-1310-4778-9926-322b1c8a34f7.pdf');
    });
  }
};

