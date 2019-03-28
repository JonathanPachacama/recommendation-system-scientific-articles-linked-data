module.exports = {

  base_url: function (options) {

    // url for tests
    // var url = '/'


    // // url for deployed
    // var url = '[DOMINIO]'
    //

    //url for google cloud
    var ip = '192.168.1.6'
    var port = ':8081'
    var url = 'http://'+ip+port+'/'

    return url;
  },

  base_wikindx: function (options) {

    // url for tests and google cloud
    var ip = '192.168.1.6'
    // var ip = 'localhost'
    var port = ':80'
    var url = 'http://'+ip+port+'/wikindx5/'

    // // url for deployed
    // var domain = '[DOMINIO]'
    // var url = domain+'/wikindx5/'

    return url;
  },

  base_proxy: function (options) {

    // url for tests and google cloud
    var ip = '192.168.1.6'
    // var ip = 'localhost'
    var port = ':8083'
    var url = 'http://'+ip+port+'/fetch/'

    // // url for deployed
    // var domain = '[DOMINIO]'
    // var url = domain+'/wikindx5/'

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
