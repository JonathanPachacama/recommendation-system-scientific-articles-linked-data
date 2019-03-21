var jwt = require('jsonwebtoken');
var TokenService = {

  emitir: function emitirService(parametros) {

    if(parametros.user_id){

      // (Tiempo de Validez)
      // ( DATO -> TOKEN, ID )
      // ( SECRETO )

      var token = jwt.sign({
        exp: Math.floor(Date.now()/ 1000)+(60*60),
        data: {
          user_id:parametros.user_id,
          user_name:parametros.user_name,
          user_last_name:parametros.user_last_name,
          user_username:parametros.user_username,
          user_email:parametros.user_email
        }
      }, 'secret');
      return token;

    }else{

      var token = ''
      return token;
    }

  },
  decode: function decodeService(token) {
    if (token) {
      var decodificado = jwt
        .verify(token, 'secret');

    }
    return decodificado;
  },

  token: function tokenService(tokenValue) {
    return tokenValue;
  }
};

module.exports = TokenService;

