/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //No necesitan seguridad (libres)

  '/perfil':{
    view:'UsuarioGestion/perfil',
    policy: 'sessionAuth'
  },


  '/AnadirArticulos': 'VistaController.AnadirArticulos',
  '/busqueda':'VistaController.busqueda',
  '/busquedaSpringer': 'VistaController.busquedaSpringer',
  '/busquedaArxiv':'VistaController.busquedaArxiv',
  '/busquedaMrDlib':'VistaController.busquedaMrDlib',
  '/busquedaScopus': 'VistaController.busquedaScopus',


  '/mibiblioteca': 'SaludoController.VerMisArticulos',
  '/biblioteca': 'VistaController.biblioteca',
  '/bibliotecaUser':'GuardarArticuloController.bibliotecaUser',


  'get /VerArticulo': 'ArticuloController.VerArticulo',
  'post /editarArticulo':'ArticuloController.editarArticulo',
  'get /filedownloader': 'FileController.download',
  'get /VerFile': 'FileController.BusquedaFile',


  '/crearMisArticulos':'SaludoController.crearMiArticulo',
  'get /VerMisArticulo': 'SaludoController.VerMiArticulo',
  'get /Mifiledownloader': 'MiFileController.download',
  'get /ViewMiFile': 'MiFileController.BusquedaFile',

  <!--(start) added for Recommender Module-->


  'GET /recommendations': {
    policy: 'sessionAuth',
    controller: "RecommenderModule/RecommenderController",
    action: "articlesToRecommend"
  },

  'GET /recommendationsWkx': {
    policy: 'sessionAuth',
    controller: "RecommenderModule/RecommenderWkxController",
    action: "recommenderWkx"
  },

  <!--(end) added for Recommender Module-->

//login
  'get /login' :{
    view: 'Auth/login',
    locals: {
      layout:'Auth/loginLayout',
      msj: '',
    }
  },

  'get /Auth' :{
    view: 'Auth/register',
    locals: {
      layout:'Auth/loginLayout',
      msj: '',
    }
  },

  'POST /Auth':'AuthController.new_account',

  'get /' :[
    { policy: 'sessionAuth' },
    { view: 'dashboard' }
  ],

  'POST /login': {
    controller: "AuthController",
    action: "login"
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
