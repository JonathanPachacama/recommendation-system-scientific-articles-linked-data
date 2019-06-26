module.exports = {

  base_url: function (options) {

    // url for tests
    // var url = '/'

    // // url for deployed
    // var url = '[DOMINIO]'
    //

    //url for google cloud
    var ip = IpService.ip()
    // var port = ':8081'
    var port = ':1337'
    var url = 'http://'+ip+port+'/'

    return url;
  },

  base_wikindx: function (options) {

    // // url for tests
    // var ip = 'localhost'

    // // url for deployed
    // var domain = '[DOMINIO]'
    // var url = domain+'/wikindx5/'

    // url for google cloud
    var ip = IpService.ip()
    var port = ':80'
    var url = 'http://'+ip+port+'/wikindx5/'

    return url;
  },

  base_proxy: function (options) {

    // // url for tests
    // var ip = 'localhost'

    // // url for deployed
    // var domain = '[DOMINIO]'

    // google cloud
    var ip = IpService.ip()
    var port = ':8082'
    var url = 'http://'+ip+port+'/fetch/'

    return url;
  },

  base_java: function (options) {

    // // url for tests
    // var ip = 'localhost'

    // // url for deployed
    // var domain = '[DOMINIO]'

    // url for tests and google cloud
    var ip = IpService.ip()
    // var port = ':8084'
    var port = ':8080'
    var url = 'http://'+ip+port+'/'

    return url;
  },

  image_url: function (options) {
    var url = 'theme/dist/img/user-avatar.jpg'
    return url;
  },

  username_url: function (options) {
    var url = 'username'
    return url;
  }

};
