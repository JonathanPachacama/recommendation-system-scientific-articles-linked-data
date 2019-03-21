
var ApiAuthService = {

  logIn: function logInService(correo,password) {

    var token
    if (correo && password) {
      var parametros = UserService.find(correo);
      var result = UserService.checkPassword(password,parametros);
    }
    if (result === true){
      token = TokenService.emitir(parametros);
      console.log("token emitido",token);
      var decodeToken = TokenService.decode(token);;
      console.log("token decodificado",decodeToken);
    }

    return token
  }

};

module.exports = ApiAuthService;







