var estaLogeado = false;
var AuthService = {
  hacerLogin: function hacerLoginService(correo,password) {
    var _this = this
    if (ApiAuthService.logIn(correo,password)){

      var tokenValue =  ApiAuthService.logIn(correo,password)

      _this.TokenService.token(tokenValue);
      return _this.estaLogeado = true;
    } else {

      return estaLogeado;
    }
  },

  hacerLogout: function hacerLogoutService() {
    var _this = this
    var tokenValue  = ""
    _this.TokenService.token(tokenValue);
    return estaLogeado;

  },
};

module.exports = AuthService;

