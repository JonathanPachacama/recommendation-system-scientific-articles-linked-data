module.exports = {

  base_url: function (options) {
    // var url = 'http://localhost:1337/'
    var url = '/'
    return url;
  },

  base_wikindx: function (options) {
    var url = 'http://localhost:80/wikindx5/'
    // var url = '/'
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
