
var FlashService = {

  menssage: function menssageService(err,message) {
    var out = []
    if (err){
      for (var i = 0; i < err.length;i++){
        var rule = err[i].rule
        switch (rule) {
          case 'required':
            out.push(message.required)
            break;
          case 'email':
            out.push(message.email)
            break;
          case 'in':
            out.push(message.in)
            break;
          case 'unique':
            out.push(message.unique)
            break;
          default: out.push('Datos Icorrectos'); break;
        }
      }
    }
    return out
  },

};
module.exports = FlashService;





