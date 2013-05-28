var KallyRazor  = require('kally-razor');
var path        = require('path');


if (path.sep == '/') {
    var razor = new KallyRazor({
        root: __dirname + '/../views/home',
        layout: __dirname + '/../views/shared/_layout.html'
    });
} else {
    var razor = new KallyRazor({
        root: __dirname + '\\..\\views\\home',
        layout: __dirname + '\\..\\views\\shared\\_layout.html'
    });
}

module.exports = {
    index: function (req, res) {
        res.send(razor.render('index.html', { activeTab: 'home' }));
    },

    about: function (req, res) {
        res.send(razor.render('about.html', { activeTab: 'about' }));
    }
};