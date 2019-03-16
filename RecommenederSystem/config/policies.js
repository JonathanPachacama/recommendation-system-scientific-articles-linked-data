/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  '*': 'sessionAuth',

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/

  AuthController: {
    // Apply 'isAdmin' to the 'foo' action.  'isLoggedIn' will NOT be applied!
    'login': 'Metodo',

    'new_account': 'Metodo'
  }
,
	//policies.js
  // VistaController: {
	// 	vistaOculta : ['validarAno2016']
	//  },
  'Saludo': {
    'welcome': 'flash',
    'crearMiArticulo': 'flash'
  },
  newPolitica:['Metodo'],


};
