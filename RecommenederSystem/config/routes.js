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

  // 'get /': 'VistaController.biblioteca',
  '/perfil':{
    view:'UsuarioGestion/perfil'
  },
  '/busqueda':{
    view:'busqueda'
  },
  '/MisArticulos':{
    view:'MisArticulos'
  },
 // '/misArticulos': 'VistaController.misArticuloView',
  '/mibiblioteca': 'SaludoController.VerMisArticulos',
  '/biblioteca': 'VistaController.biblioteca',
  'get /crearMisArticulos':
    'VistaController.crearMisArticulos',
  'get /ArticuloSpringer':
    'GuardarArticuloController.VerArticuloSpringer',


  'get /ContenidoOculto':
    'VistaController.vistaOculta',
  'get /VerArticulo':
    'ArticuloController.VerArticulo',
  'get /VerMisArticulo':
    'SaludoController.VerMiArticulo',

  <!--(start) added for Recommender Module-->
  'get /recommendations':
    'RecommenderModule/RecommenderController.articlesToRecommend',

  'get /recommendationsWkx':
    'RecommenderModule/RecommenderWkxController.recommenderWkx',
  <!--(end) added for Recommender Module-->


  'get /login' :{
    view: 'Auth/login',
    locals:{layout:'Auth/loginLayout'}
  },

  'get /Auth' :{
    view: 'Auth/register',
    locals:{layout:'Auth/loginLayout'}
  },

  'POST /Auth':'AuthController.new_account',

  'get /' :{
    view: 'Auth/login',
  },

  'POST /login':'AuthController.validate',


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
