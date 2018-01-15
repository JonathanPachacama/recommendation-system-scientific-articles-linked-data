/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req,res){

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="title"><br>'+
      '<input type="file" name="avatar" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    )
  },
  upload: function  (req, res) {
    var parametros = req.allParams();
    sails.log.info("Parametros", parametros);

    req.file('avatar') // this is the name of the file in your multipart form
      .upload({
        // optional
      //  dirname: ['C:/Users/CEDIA/Desktop/Pasantia-Fernanda Escobar/webstorm/App-Web-2017-validaEntrdasPeroNoGuardaCompl/07-Backend-MVC/CarritoCompras/.tmp/uploads']
      }, function(err, uploads) {
        // try to always handle errors
        if (err) { return res.serverError(err) }
        // uploads is an array of files uploaded
        // so remember to expect an array object
        if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
        // if file was uploaded create a new registry
        // at this point the file is phisicaly available in the hard drive

        File.create({

          path: uploads[0].fd,
          filename: uploads[0].filename,
          fkIdArticulo:parametros.id
        }).exec(function(err, file) {
          if (err) { return res.serverError(err) }
          // if it was successful return the registry in the response
          return res.json(file)
          //return res.attachment('');
        })
      })
  },
  download: function(req, res) {
    var fileID = req.param('id')
    // gets the id either in urlencode, body or url query
    File
      .findOne({ id: fileID })
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

    File.find().exec(function (err, articulos) {
      if (err)
        return res.negotiate(err);
      sails.log.info("Articulo", articulos);
      res.attachment('tmp/uploads/15c26377-1310-4778-9926-322b1c8a34f7.pdf');
    });
  }
};
