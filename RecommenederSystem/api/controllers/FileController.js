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
      '<form action="<%= MasterUrlService.base_url()%>file/upload" enctype="multipart/form-data" method="post">'+
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
          fkIdArticulo:parametros.idArticulo,
        }).exec(function(err, file) {
          if (err) { return res.serverError(err)
          }else {
            // if it was successful return the registry in the response
            return res.redirect('/VerArticulo?id=' + parametros.idArticulo)
            //return res.attachment('');
          }
        })
      })
  },
  BusquedaFile: function (req, res) {
    var parametros = req.allParams();
    if (req.method == "GET" && parametros.idArticulo) {
      File.findOne({fkIdArticulo:parametros.idArticulo }).exec(function (err, File) {
        if (err){
          return res.negotiate(err);
        }else
          sails.log.info("File", File);
        return res.ok(File)
        //return res.redirect('/VerArticulo?id=' + parametros.id)

      });
    }else{
      return res.negotiate(err);
    }
  },

  download: function(req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    //var fileID = req.param('id')
    // gets the id either in urlencode, body or url query
    if (req.method == "GET" && params.id) {
      File.findOne({id: params.id})
        .exec(function (err, file) {
          if (err) {
            return res.serverError(err)
          }
          if (!file) {
            return res.badRequest(
              'There is no file attached to this article .'
            );
          }
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
    }
  },

  eliminarFile: function (req, res) {
    var params = req.allParams();
    sails.log.info("Parametros", params);
    if (req.method == "POST" && params.id) {
      File.destroy({
        id: params.id
      }).exec(function (err, articuloBorrado) {
        if (err)
          return res.serverError(err);
        return res.redirect('/VerArticulo?id=' + params.idArticulo);
      });
    }
    else {
      return res.badRequest();
    }
  },

};
