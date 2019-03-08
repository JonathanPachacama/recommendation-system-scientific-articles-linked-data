module.exports = {
    validate: function (req, res) {
        var username = req.param('username');
        var password = req.param('password');
        if (username === 'admin' && password === 'admin') {
            req.session.authenticated = true;
            /**as described in point2**/
            res.redirect('/login/success');
        }
        else {
            res.redirect('/login');
        }
    },
    success: function (req, res) {
        return res.redirect('/');
    },
    error: function (req, res) {
        return res.view('error', { layout: false });
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            return res.redirect('/login');
            ;
        });
    }
};
